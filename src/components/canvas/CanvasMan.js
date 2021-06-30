import React, { useRef, useState, useEffect } from 'react'

const CanvasMan = ({size, color='red', interval=5000, prevLocation={x:0,y:0}, curLocation={x:0,y:0}}) => {
  const canvasRef = useRef(null)

  const draw = (context, x, y) => {
    context.beginPath();
    // context.fillStyle = "#0000ff"; // #ffe4c4
    context.arc(130, 50, 50, 0, Math.PI * 2, true); // draw circle for head
    // (x,y) center, radius, start angle, end angle, anticlockwise
    context.stroke();

    context.beginPath();
    context.strokeStyle = "red"; // color
    context.lineWidth = 6;
    context.arc(130, 60, 20, 0, Math.PI, false); // draw semicircle for smiling
    context.stroke();

    // eyes
    context.beginPath();
    context.fillStyle = "green"; // color
    context.arc(190, 50, 3, 0, Math.PI * 2, true); // draw left eye
    context.fill();
    context.arc(210, 50, 3, 0, Math.PI * 2, true); // draw right eye
    context.fill();

    // body
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(200, 180);
    context.strokeStyle = "navy";
    context.stroke();

    // arms
    context.beginPath();
    context.strokeStyle = "pink"; 
    context.moveTo(200, 100);
    context.lineTo(150, 130);
    context.moveTo(200, 100);
    context.lineTo(250, 130);
    context.stroke();

    // legs
    context.beginPath();
    context.strokeStyle = "brown";
    context.moveTo(200, 180);
    context.lineTo(150, 280);
    context.moveTo(200, 180);
    context.lineTo(250, 280);
    context.stroke();

    // Text
    context.font = "30px Garamond";
    context.fillStyle = "#220033";
    context.fillText("Hi. My name is Bob.", 20, 330);
    context.fillText("Add my hands holding something", 20, 360);
    context.fillText("please!", 20, 385);
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
      transformX = transformX + (curLocation.x-transformX)/interval*100
      transformY = transformY + (curLocation.y-transformY)/interval*100
      draw(context, transformX, transformY)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

    
  return <canvas style={{position:'absolute'}} ref={canvasRef} />
}

export default CanvasMan