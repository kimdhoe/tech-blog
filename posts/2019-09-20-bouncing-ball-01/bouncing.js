import React, { useEffect, useRef, forwardRef } from 'react'

const WIDTH = 300
const HEIGHT = 450
const BALL_RADIUS = 16
let vx = 350
let vy = 300

export default () => {
  const ballRef = useRef()

  useEffect(() => {
    let t0
    let dt
    let animId

    t0 = new Date().getTime()

    animationFrame()

    function animationFrame() {
      animId = requestAnimationFrame(animationFrame)
      tick()
    }

    function tick() {
      const t1 = new Date().getTime()
      dt = 0.001 * (t1 - t0)
      t0 = t1
      draw()
    }

    function draw() {
      const { style: ballStyle } = ballRef.current
      const sx = Number(ballStyle.left.replace(/px/g, ''))
      const sy = Number(ballStyle.top.replace(/px/g, ''))
      ballStyle.left = `${sx + dt * vx}px`
      ballStyle.top = `${sy + dt * vy}px`

      if (sx + BALL_RADIUS < 0) {
        vx *= -1
        ballStyle.left = `${-BALL_RADIUS}px`
      }
      else if (sx + BALL_RADIUS > WIDTH) {
        vx *= -1
        ballStyle.left = `${WIDTH - BALL_RADIUS}px`
      }
      else if (sy + BALL_RADIUS < 0) {
        vy *= -1
        ballStyle.top = `${-BALL_RADIUS}px`
      }
      else if (sy + BALL_RADIUS > HEIGHT) {
        vy *= -1
        ballStyle.top = `${HEIGHT - BALL_RADIUS}px`
      }
    }

    return () => cancelAnimationFrame(animId)
  })

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        border: '2px solid black',
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
      }}
    >
      <Ball ref={ballRef} x={0} y={0} />
    </div>
  )
}

const Ball = forwardRef(({ x, y }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: x - BALL_RADIUS,
        left: y - BALL_RADIUS,
        width: 2 * BALL_RADIUS,
        height: 2 * BALL_RADIUS,
        borderRadius: '50%',
        backgroundColor: 'black',
      }}
    />
  )
})