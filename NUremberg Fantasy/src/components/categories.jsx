import { useState } from 'react'

function Categories({ handler }) {
  const [category, setCategory] = useState('trivia')

  const set = (literal) => {
    setCategory(literal)
    handler(literal)
  }

  return (
    <div className = "row">
      <span onClick = { () => set('math') } className = { category === 'math' ? 'current' : '' }>Math</span>
      <span onClick = { () => set('trivia') } className = { category === 'trivia' ? 'current' : '' }>Trivia</span>
      <span onClick = { () => set('date') } className = { category === 'date' ? 'current' : '' }>Date</span>
      <span onClick = { () => set('year') } className = { category === 'year' ? 'current' : '' }>Year</span>
    </div>
  )
  }
    
export default Categories