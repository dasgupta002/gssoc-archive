function Hero() {
  return (
    <section className = "hero">
      <div className = "container">
        <div className = "row">
          <div className = "one-half column hero-left">
            <h5 className = "hero-heading">
              Stop buzzing, else have fun with mere numbers from anywhere at anytime, nowhere just here.
            </h5>
            <a className = "button button-primary" href = "#main">Try Now</a>
          </div>
          <div className = "one-half column hero-right">
            <img src = "images/numbers.png" alt = "hero_image" />
          </div>
        </div>
      </div>
    </section>
  )
}
    
export default Hero