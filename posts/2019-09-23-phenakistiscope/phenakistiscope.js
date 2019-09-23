import React from 'react'
import { css, keyframes } from '@emotion/core'
import debounce from 'lodash.debounce'

// MESSAGE :: string
// Message to display.
const MESSAGE = "everything in its place oliver"
// N :: number
// Number of text lines in disc.
const N = 80
const FONT_FAMILY = 'Georgia'

export default class Phenakistiscope extends React.Component {
  canvasRef = React.createRef()
  boxRef = React.createRef()
  state = {
    width: 0,
    go: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.init)
    this.init()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.init)
  }

  init = debounce(() => {
    const width = this.boxRef.current.clientWidth
    this.setState({ width }, this.draw)
    setTimeout(() => this.setState({ go: true }), 1500)
  }, 300)

  draw = () => {
    const canvas = this.canvasRef.current
    const context = canvas.getContext('2d')
    const R = canvas.width / 2
    const LETTER_WIDTH = R / 40
    const FONT_SIZE = R / 23
    const BIG_FONT_SIZE = FONT_SIZE * 5

    context.save()
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.translate(R, R)
    context.fillStyle = '#444'
    context.textAlign = 'center'
    context.font = `${BIG_FONT_SIZE}px ${FONT_FAMILY}`
    const measure = context.measureText('S')
    context.fillText('S', 0, 0 + measure.width / 2, measure.width)

    for (let i = 0; i < MESSAGE.length; i++) {
      const len = getLength(i)
      const anglePerLetter = 2 * Math.PI / len
      const letter = MESSAGE[i]
      const r = R - (i * LETTER_WIDTH)

      for (let j = 0; j < len; j++) {
        const x = r * Math.cos(anglePerLetter)
        const y = r * Math.sin(anglePerLetter)
        context.save()
        context.font = `italic ${FONT_SIZE}px ${FONT_FAMILY}`
        context.fillStyle = 'black'
        context.textAlign = 'left'
        context.textBaseline = 'top'
        context.rotate(j * -anglePerLetter)
        context.translate(x, y)
        context.rotate(Math.PI + anglePerLetter)
        context.fillText(letter, 0, 0, LETTER_WIDTH)
        context.restore()
      }
    }

    context.restore()
  }

  render() {
    const { width, go } = this.state

    return (
      <div css={styles.container}>
        <div
          ref={this.boxRef}
          css={styles.box}
        >
          <div css={[styles.boxWrapper, { opacity: width ? 1 : 0 }]}>
            <canvas
              ref={this.canvasRef}
              css={[styles.canvas, go && styles.play]}
              width={width}
              height={width}
            />
            <div css={styles.hole} />
          </div>
        </div>
      </div>
    )
  }
}

const spin = keyframes`
  100% { transform: translate3d(0, 0, 0) rotate(360deg); }
`

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `,
  canvas: css`
    border-radius: 50%;
    background: white;
  `,
  hole: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: inset 8px 8px 7px -10px rgba(0,0,0,0.43);
  `,
  play: css`
    animation:
      ${spin} 3s ease-in,
      ${spin} 1.4s 3s linear infinite;
  `,

  box: css`
    border-radius: 50%;
    width: 100%;
  `,
  boxWrapper: css`
    position: relative;
    height: 0;
    padding-bottom: 100%;
    border: 1px solid #777;
    border-radius: 50%;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    transition: opacity 0.5s ease-out;
  `,
}

let l = 2
let sign = 1
function getLength(i) {
  if (l === -2 || l === 2) {
    sign *= -1
  }
  l += sign

  return N + l * 2
}
