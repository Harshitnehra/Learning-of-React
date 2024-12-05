import { useState } from 'react'
import Panel from './Components/Panel'
import './App.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <h2>Almaty, Kazakhstan</h2>
    <Panel 
    tital="About" 
    activeIndex={activeIndex === 0}
    setActiveIndex={() => setActiveIndex(0)}>
    With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
    </Panel>
    <Panel 
    tital="Etymology"
    activeIndex={activeIndex === 1}
    setActiveIndex={() => setActiveIndex(1)}>
      The name comes from <span>алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i>Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
    </Panel>
    </>
  )
}

export default App
