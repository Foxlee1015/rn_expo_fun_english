import React, { useRef, useState, useContext, useEffect } from 'react'
import {Context as CanvasObjectContext} from '../../context/CanvasObjectContext';


const moves = {
  "on": {x:300,y:30},
  "in": {x:50,y:70},
  "under": {x:100,y:30},
  "front": {x:140,y:100},
  "behind": {x:80,y:80},
  "inside": {x:150,y:75}
}

const currentLocation = {
  x: 0,
  y: 0
}

const CanvasObject = ({size, color='red', interval=5000}) => {
  const canvasRef = useRef(null)

  const { state, updateCurrentLocation, updateNextLocation } = useContext(CanvasObjectContext);

  useEffect(()=>{
    if (state.target) {
      console.log(state)
      updateNextLocation(moves[state.target]);
      updateCurrentLocation(currentLocation);
    }
  },[state.target])

  const draw = (ctx, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, 20, 0, 2*Math.PI)
    ctx.fill()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId = null
    
    //Our draw came here
    const render = () => {
      currentLocation.x = currentLocation.x + (state.nextLocation.x-currentLocation.x)/interval*100
      currentLocation.y = currentLocation.y + (state.nextLocation.y-currentLocation.y)/interval*100
      draw(context, currentLocation.x, currentLocation.y)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, state.nextLocation])

    
  return <canvas style={{position:'absolute'}} ref={canvasRef} />
}

export default CanvasObject