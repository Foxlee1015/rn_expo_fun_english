import React, { useRef, useState, useContext, useEffect } from 'react'
import {Context as CanvasObjectContext} from '../../context/CanvasObjectContext';


const objectsProps = {
  "on": {x:150, y:50, zIndex:100},
  "in": {x:150, y:80, zIndex:1},
  "under": {x:150, y:120, zIndex:1},
  "front": {x:110, y:110, zIndex:100},
  "behind": {x:200, y:70, zIndex:1},
  "inside": {x:150, y:80, zIndex:1}
}

const currentLocation = {
  x: 0,
  y: 0
}

const CanvasObject = ({size, color='red', interval=5000}) => {
  const [objectZIndex, setObjectZIndex] = useState(100);
  const canvasRef = useRef(null)

  const { state, updateCurrentLocation, updateNextLocation } = useContext(CanvasObjectContext);

  useEffect(()=>{
    if (state.target) {
      const {x, y, zIndex} = objectsProps[state.target]
      updateNextLocation({x,y});
      setObjectZIndex(zIndex)
      updateCurrentLocation(currentLocation);
    }
  },[state.target])

  const draw = (ctx, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, 15, 0, 2*Math.PI)
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

    
  return <canvas style={{position:'absolute', zIndex:objectZIndex}} ref={canvasRef} />
}

export default CanvasObject