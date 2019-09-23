import React, { useEffect, useRef } from 'react'
import { css } from '@emotion/core'

const Example = ({ filename }) => {
  let intervalId
  let go = false
  const imgRef = useRef()
  const angleRef = useRef(0)
  const handleClick = () => {
    if (!go) {
      go = true
      intervalId = setInterval(() => {
        imgRef.current.style.transform = `rotate(${angleRef.current}deg)`
        angleRef.current = (angleRef.current % 360) - 30
      }, 1000 / 12)
    } else {
      go = false
      clearInterval(intervalId)
    }
  }

  useEffect(() => {
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div css={styles.container} onClick={handleClick}>
      <div css={styles.imgContainer}>
        <img ref={imgRef} css={styles.img} src={require(`./${filename}`)} alt="phenakistiscope" />
      </div>
      <div css={styles.strobe} />
    </div>
  )
}

const styles = {
  container: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  imgContainer: css`
    padding: 2%;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
  `,
  img: css`
    border-radius: 50%;
    width: 100%;
    height: 100%;
  `,
}

export default Example