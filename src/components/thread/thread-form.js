import React, { useState } from 'react'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import axios from 'axios'
import validator from 'validator'

import useSiteMetadata from '../../hooks/use-sitemetadata'

const SUCCESS_MESSAGE =
  'Your message has been submitted and is now pending moderation.'
const ERROR_MESSAGE = 'Sorry, something went wrong.'
const INPUTS = { name: '', email: '', message: '' }

const CommentForm = ({ slug }) => {
  const {
    staticmanEndpoint,
    staticmanVersion,
    githubUsername,
    githubRepository,
    githubBranch,
  } = useSiteMetadata()
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState(INPUTS)
  const [inputs, setInputs] = useState(INPUTS)

  const handleInputChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    setMessage('')
    setErrorMessage('')
    setValidationErrors({ ...validationErrors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const { isValid, errors } = validate(inputs)

    if (!isValid) {
      setValidationErrors(errors)
      return
    }

    try {
      setPending(true)
      await axios({
        method: 'POST',
        url: `${staticmanEndpoint}/${staticmanVersion}/entry/github/${githubUsername}/${githubRepository}/${githubBranch}/comments`,
        data: {
          fields: {
            name: inputs.name.trim(),
            email: inputs.email.trim(),
            message: inputs.message.trim(),
            slug,
          },
          options: {
            slug,
          },
        },
      })
      setMessage(SUCCESS_MESSAGE)
      setInputs(INPUTS)
    } catch (err) {
      console.log(err)
      setErrorMessage(ERROR_MESSAGE)
    } finally {
      setPending(false)
      return
    }
  }

  return (
    <form
      css={styles.container}
      method="POST"
      action="https://staticman.kimdhoebot.now.sh/v3/entry/github/kimdhoe/tech-blog/master/comments"
    >
      <input type="hidden" name="options[slug]" value={slug} />

      <InputField
        label="Name"
        name="name"
        type="text"
        disabled={pending}
        error={validationErrors.name}
        value={inputs.name}
        onChange={handleInputChange}
      />

      <InputField
        label="Email (not visible to anyone)"
        name="email"
        type="email"
        disabled={pending}
        error={validationErrors.email}
        value={inputs.email}
        onChange={handleInputChange}
      />

      <TextAreaField
        label="Comment"
        name="message"
        placeholder="..."
        disabled={pending}
        error={validationErrors.message}
        value={inputs.message}
        onChange={handleInputChange}
      />

      <div css={styles.footer}>
        <div css={styles.message}>
          {(errorMessage || message) && (
            <p
              css={[
                styles.messageText,
                !!errorMessage && styles.errorMessageText,
              ]}
            >
              {errorMessage || message}
            </p>
          )}
        </div>

        <Button
          css={styles.button}
          type="button"
          onClick={handleSubmit}
          disabled={pending}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

const InputField = ({
  label,
  name,
  type,
  placeholder,
  disabled,
  error,
  value,
  onChange,
}) => {
  return (
    <div css={styles.field}>
      <p css={styles.label}>
        <label css={styles.labelText} htmlFor={'id' + label}>
          {label}
        </label>
      </p>
      <p css={styles.inputWrapper}>
        <input
          disabled={disabled}
          value={value}
          onChange={onChange}
          css={[styles.input, error && styles.inputError]}
          id={'id' + label}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </p>
      <p css={styles.validationError}>{error}</p>
    </div>
  )
}

const TextAreaField = ({
  label,
  name,
  placeholder,
  disabled,
  error,
  value,
  onChange,
}) => (
  <div css={styles.field}>
    <p css={[styles.label, styles.labelWithError]}>
      <label css={styles.labelText} htmlFor={'id' + label}>
        {label}
      </label>
    </p>
    <p css={styles.inputWrapper}>
      <textarea
        disabled={disabled}
        value={value}
        onChange={onChange}
        css={[styles.input, styles.textarea, error && styles.inputError]}
        id={'id' + label}
        name={name}
        placeholder={placeholder}
        rows="5"
      />
    </p>
  </div>
)

const Button = styled.button`
  padding: 0.3rem 0.2rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: border-color 0.1s ease-out;

  :disabled {
    cursor: default;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 1.5rem;
  }
`

const messageEnters = keyframes`
  from {
    opacity: 0;
    transform: translateX(3px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const styles = {
  container: css`
    margin: 2rem 0 1rem;

    @media only screen and (max-width: 480px) {
      margin-bottom: 2rem;
    }
  `,
  field: css`
    margin: 0 0 0.5rem 0;
  `,
  label: css`
    margin: 0 0 0.5rem 0;
  `,
  labelText: css`
    font-size: 0.9rem;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
      'Helvetica Neue', 'Arial', 'Noto Sans', 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    color: var(--text-auxiliary);
  `,
  inputWrapper: css`
    margin: 0;
  `,
  input: css`
    outline: none;
    padding: 0.6rem 0.7rem;
    border: 1px solid var(--hr);
    border-radius: 5px;
    max-width: 300px;
    width: 100%;
    line-height: 1.6;
    background: var(--well);
    -webkit-appearance: none;
    transition: border-color 0.1s ease;
    color: var(--text);

    ::placeholder {
      color: var(--text-placeholder);
    }

    :focus {
      border-color: var(--text);
    }
  `,
  inputError: css`
    border-color: #ffa8a8;
  `,
  textarea: css`
    max-width: 100%;
    width: 100%;
    -webkit-appearance: none;
  `,
  footer: css`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 480px) {
      flex-direction: column;
    }
  `,
  validationError: css`
    margin: 0.2rem 0 0 0;
    height: 17px;
    color: #ff8787;
    font-size: 0.9rem;
  `,
  message: css`
    line-height: 1.5;
    font-size: 0.889rem;
  `,
  messageText: css`
    margin: 0;
    color: #1864ab;
    animation: ${messageEnters} 0.15s ease-out;
  `,
  errorMessageText: css`
    color: #ff8787;
  `,
  button: css`
    margin-top: 1rem;
    border: 1px solid var(--text);
    border-radius: 5px;
    padding: 0.7rem 3rem;
    background: none;
    font-size: 1rem;
    background-color: var(--text);
    color: var(--bg);
    cursor: pointer;
    transition: all 0.15s ease-out;

    :disabled {
      background-color: var(--bg);
      color: var(--text);
    }

    :hover {
      background-color: var(--bg);
      color: var(--text);
    }
  `,
}

function validate(inputs) {
  let errors = { ...INPUTS }

  if (!inputs.name.trim()) {
    errors.name = ' '
  }
  if (!inputs.email.trim()) {
    errors.email = ' '
  } else if (!validator.isEmail(inputs.email)) {
    errors.email = 'Seems like this is not a correct email address.'
  }
  if (!inputs.message.trim()) {
    errors.message = ' '
  }

  return {
    isValid: Object.keys(errors).every(key => !errors[key]),
    errors,
  }
}

export default CommentForm
