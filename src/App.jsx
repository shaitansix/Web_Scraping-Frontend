import { Routes, Route } from 'react-router'
import Layout from '@layouts/Layout'
import Home from '@pages/home_page/Home'
import Scraping from '@pages/scraping_page/Scraping'
import './App.css'

function App() {
  return (
    <main className = 'app'>
      <Layout>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/scrap' element = {<Scraping />} />
        </Routes>
      </Layout>
    </main>
  )
}

export default App