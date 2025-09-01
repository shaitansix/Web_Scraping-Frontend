import './styles/HomeCard.css'

const HomeCard = ({ icon, title, description }) => {
  return (
    <article className = 'home_card'>
      <div className = 'card-icon'>
        {icon}
      </div>
      <div className = 'card-content'>
        <span className = 'card-title'>{title}</span>
        <span className = 'card-description'>{description}</span>
      </div>
    </article>
  )
}

export default HomeCard