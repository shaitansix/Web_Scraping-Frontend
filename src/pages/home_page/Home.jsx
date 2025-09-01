import { Link } from 'react-router'
import HomeCard from '@components/home_page/HomeCard'
import { TechnologyIcon, ModulesIcon, FilesIcon } from '@icons/Icons'
import './Home.css'

const Home = () => {
  return (
    <section className = 'home container'>
      <div className = 'home-hero'>
        <div className = 'hero-left'>
          <span className = 'hero-title'>Web Scraping</span>
          <span className = 'hero-description'>
            Un proyecto básico hecho con Python para extraer datos de una página web y exportarlos en múltiples formatos.
          </span>
          <Link className = 'hero-btn' to = '/scrap'>Empezar</Link>
        </div>

        <div className = 'hero-right'>
          <img 
            className = 'hero-img' 
            src = './scraping-img.png' 
            alt = 'hero img' />
        </div>
      </div>

      <div className = 'home-cards'>
        <HomeCard 
          icon = {<TechnologyIcon className = 'home_card-icon' />} 
          title = 'Tecnología: Python' 
          description = 'Este proyecto utiliza Python como lenguaje principal, aprovechando su facilidad para manejar datos y realizar tareas de scraping.' />
        <HomeCard 
          icon = {<ModulesIcon className = 'home_card-icon' />} 
          title = 'Librerías: BeautifulSoup, Selenium' 
          description = 'Se emplean librerías populares para el scraping: BeautifulSoup para HTML estático y Selenium para automatizar páginas dinámicas.' />
        <HomeCard 
          icon = {<FilesIcon className = 'home_card-icon' />} 
          title = 'Formato de salida: CSV, JSON' 
          description = 'Los datos extraídos pueden descargarse en formatos CSV y JSON, listos para análisis o integración en otros sistemas.' />
      </div>
    </section>
  )
}

export default Home