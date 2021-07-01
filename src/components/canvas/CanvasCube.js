import React, { useRef, useEffect } from 'react'

const CanvasCube = ({size="", color, location=[150,120]}) => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx) => {
    let multiply;
    switch(size) {
      case 'small':
        multiply=0.5
        break;
      case 'large':
        multiply=2
        break;
      default:
        multiply=1
        break;
    }
    let [x ,y] = location;
    let wx = 50 * multiply
    let wy = 50 * multiply
    let h = 50 * multiply

    // turn on transparency
    ctx.globalAlpha = 0.2;

    // front-left
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
    ctx.fill();
    ctx.stroke();

    // front-right
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
    ctx.fill();
    ctx.stroke();

    // top
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
    ctx.fill();
    ctx.stroke();

    // bottom // dashed lines
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
    ctx.fill();
    ctx.stroke();
    
    // middle in the back
    ctx.beginPath();
    ctx.moveTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x - wx + wy, y - (wx * 0.5 + wy * 0.5));
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
    ctx.fill();
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
  
  return <canvas  style={{position:'absolute', zIndex: 10}} ref={canvasRef} />
}

export default CanvasCube


