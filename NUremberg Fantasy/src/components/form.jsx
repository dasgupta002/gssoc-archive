import { useRef } from 'react'

function Form({ data, handler }) {
  const numberRef = useRef()

  const submit = (event) => {
    event.preventDefault()
    handler(numberRef.current.value)
  }

  return (
    <form onSubmit = { submit } autoComplete = "off">
      <input className = "u-full-width" type = "text" ref = { numberRef }  />
      { 
        data && <p style = {{ padding: '1rem', backgroundColor: 'thistle', borderRadius: '1rem' }}>{ data }</p>
      }
      <input className = "button-primary" type = "submit" value = "Go" />
    </form>
  )
}
    
export default Form