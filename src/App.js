import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'

function App() {
  let [colors, setColors] = useState ([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red', 'maroon',
    'purple', 'black', 'white'
  ])

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })

  return (
    <div className="App">
      {colorMap}
    </div>
  )
}

export default App