function Card({ data }) {
  if(data === '') return null
  
  return (
    <div className = "trivia">
      { data } 
    </div>
  )
}
  
export default Card