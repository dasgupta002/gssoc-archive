function Footer() {
  const URL = 'https://www.britannica.com/topic/number-symbolism/Pythagoreanism'
  
  return (
    <section style = {{ padding: '11rem 0rem', textAlign: 'center', backgroundColor: 'linen' }}>
        <div className = "container">
            <h4>
                "Numbers rule the universe."
            </h4> 
            <h6>by Pythagorous</h6>
            <a className = "button button-primary" href = { URL } target = "_blank">Read More</a>
        </div>
    </section>
  )
}
    
export default Footer