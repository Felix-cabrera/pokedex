import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/pokecard.css'

const SelectType = ({setTypeSelected,handleSearch,inputSearch}) => {

  
  const url = 'https://pokeapi.co/api/v2/type'
  const [types, getTypes] = useFetch(url)

  useEffect( () => {
    getTypes()
  },[])

  const handleChange = e => {
    setTypeSelected(e.target.value)
  }
  return (
    <div className="div__all">
          <form className="home__form" onSubmit={handleSearch}>
            <input className="home__input" ref={inputSearch} type="text" />
            <button className="home__button">Search</button>
          </form>
        <select onChange={handleChange} className="home__button allPokemon">
            <option value='allPokemons'>all pokemons</option>
            {
                types?.results.map( typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectType