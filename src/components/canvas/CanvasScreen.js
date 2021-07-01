import React, {useEffect, useContext} from 'react'
import {View} from 'react-native'
import CanvasCube from './CanvasCube'
import CanvasObject from './CanvasObject'
import CanvasPaper from './CanvasPaper'
import {Context as CanvasObjectContext} from '../../context/CanvasObjectContext'

const CanvasScreen = ({
  selectedPreposition,
  width = 300,
  height = 150,
  subjectCount = 1
}) => {
  const {updateTarget} = useContext(CanvasObjectContext)

  useEffect(() => {
    updateTarget(selectedPreposition)
  }, [selectedPreposition])

  return (
    <View>
      <CanvasPaper showGrid={false} width={width} height={height} />
      <CanvasCube />
      <CanvasObject count={subjectCount} />
    </View>
  )
}

export default CanvasScreen
