import React, { useRef, useState, useEffect } from 'react'

const CanvasObject = ({size, color='red', interval=5000, prevLocation={x:0,y:0}, curLocation={x:0,y:0}}) => {
  const canvasRef = useRef(null)

  const draw = (ctx, x, y, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let transformX = prevLocation.x
    let transformY = prevLocation.y
    let animationFrameId = null
    
    //Our draw came here
    const render = () => {
      frameCount++
      transformX = transformX + (curLocation.x-transformX)/interval*100
      transformY = transformY + (curLocation.y-transformY)/interval*100
      draw(context, transformX, transformY, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

    
  return <canvas style={{position:'absolute'}} ref={canvasRef} />
}

export default CanvasObject