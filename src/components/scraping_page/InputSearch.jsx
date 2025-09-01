import './styles/InputSearch.css'

const InputSearch = ({ search, pending, handleSearch, handleScrap }) => {  
  return (
    <div className = 'input_search'>
      <input 
        className = 'input_search-input'
        type = 'text' 
        value = {search} 
        onChange = {handleSearch} 
        disabled = {true} />
      
      <button 
        className = 'input_search-btn' 
        onClick = {handleScrap} 
        disabled = {pending}>
        Iniciar
      </button>
    </div>
  )
}

export default InputSearch