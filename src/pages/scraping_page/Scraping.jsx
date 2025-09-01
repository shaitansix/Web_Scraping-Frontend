import { useState } from 'react'
import Sidebar from '@components/scraping_page/Sidebar'
import CustomAlert from '@components/UI/CustomAlert'
import InputSearch from '@components/scraping_page/InputSearch'
import Table from '@components/scraping_page/Table'
import { useAxios } from '@hooks/useAxios'
import { helpColumns } from '@helpers/helpTable'
import './Scraping.css'

const initSearch = 'https://books.toscrape.com'
// const URL_API = 'http://127.0.0.1:8000/scrap'
const URL_API = 'https://web-scraping-backend-six.vercel.app/scrap'

const Scraping = () => {
  const [search, setSearch] = useState(initSearch)
  const { 
    pending, 
    data, 
    error, 
    executePetition 
  } = useAxios({ url: URL_API, urlScrap: search })

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleScrap = async () => {
    await executePetition()
  }

  return (
    <section className = 'scraping'>
      <Sidebar />

      <div className = 'scraping-content'>
        <CustomAlert 
          type = 'info' 
          message = 'Aviso: Este proyecto solo hace scraping a la página sugerida para evitar problemas legales y reducir la complejidad.' />
        <InputSearch 
          search = {search} 
          pending = {pending} 
          handleSearch = {handleSearch} 
          handleScrap = {handleScrap} />
        
        { pending && <span>Cargando...</span> }
        { data && !pending && 
          <Table 
            data = {data} 
            columns = {helpColumns(Object.keys(data[0]))} />
        }
        { error &&  
          <CustomAlert 
            type = 'error' 
            message = {`Error ${error.status}: ${error.message}.`} />
        }
      </div>
    </section>
  )
}

export default Scraping