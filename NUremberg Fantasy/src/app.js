import { useEffect, useState } from 'react'
import Hero from './components/hero'
import Form from './components/form'
import Categories from './components/categories'
import Card from './components/card'
import Footer from './components/footer'

function App() {
  const [label, setLabel] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  async function wrapper(search) {
    if (search === '') {
      setError('Enter any number to see some magic!')
    } else if(isNaN(parseInt(search))) {
      setError('Enter some number rather, not a joke!')
    } else {
      const url = `http://numbersapi.com/${parseInt(search)}/${label}?json`
      const response = await fetch(url)
      const data = await response.json()
      setResult(data.text)
    }
  }

  return (
    <>
      <Hero />
      <section id = "main">
        <div className = "container">
          <div className = "row">
            <div className = "one-half column">
              <Form data = { error } handler = { wrapper } />
            </div>
            <div className = "one-half column" style = {{ padding: '11rem 0rem' }}>
              <Categories handler = { setLabel } />
              <Card data = { result } />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App