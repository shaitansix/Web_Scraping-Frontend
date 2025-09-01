import { Link } from 'react-router'
import { GithubIcon, HomeIcon } from '@icons/Icons'
import './styles/Sidebar.css'

const Sidebar = () => {
  return (
    <nav className = 'sidebar'>
      <Link to = '/'>
        <HomeIcon className = 'sidebar-icon' />
      </Link>
      <a href = 'https://github.com/shaitansix' target = '_blank'>
        <GithubIcon className = 'sidebar-icon' />
      </a>
    </nav>
  )
}

export default Sidebar