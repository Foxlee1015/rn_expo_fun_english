import React, { useRef, useEffect } from 'react'

const CanvasBox = ({size, color, action, showGrid=false}) => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx) => {
    ctx.beginPath();
    ctx.rect(0, 0, 300, 150);
    ctx.stroke();

  }
  const drawGrid = (ctx) => {
    for (var x = 0.5; x < 301; x += 10) {
      context.moveTo(x, 0);
      context.lineTo(x, 151);
    }
    
    for (var y = 0.5; y < 150; y += 10) {
      context.moveTo(0, y);
      context.lineTo(301, y);
    }
      
    context.strokeStyle = "#ddd";
    context.stroke();
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    
    const render = () => {
      draw(context)

      if (showGrid) {
        drawGrid(context)
      }
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
