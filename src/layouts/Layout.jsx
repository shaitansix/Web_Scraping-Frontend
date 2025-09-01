import './Layout.css'

const Layout = ({ children }) => {
  return (
    <section className = 'layout'>
      {children}
      <footer className = 'layout-footer'>
        <span>Copyright &copy; 2025</span>
      </footer>
    </section>
  )
}

export default Layout