import React, { useRef, useEffect } from 'react'

const CanvasBox = ({size, color, action}) => {
  console.log('canvas props : ', size, color)
  
  const canvasRef = useRef(null)
  
  const draw = (ctx) => {
    ctx.beginPath();
    ctx.rect(0, 0, 300, 150);
    ctx.stroke();
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    
    const render = () => {
      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas  style={{position:'absolute'}} ref={canvasRef} />
}

export default CanvasBox
