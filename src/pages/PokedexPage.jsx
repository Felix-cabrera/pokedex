import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './Style/pokedex.css'
import './Style/Home.css'
import Pagination from "../components/PokedexPage/Pagination"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector(store => store.trainer)
  
  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const [ pokemons, getPokemons, getTypePokemon] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons'){

    } else {
      getTypePokemon(typeSelected)
    }
    getPokemons()
  },[typeSelected])

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  console.log(pokemons)
  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
  const Number = [2,4,6,8,10]
  const total = 5
  const[productsPerPage, setProductsPerPage] = useState(Number || total ? 5 : '')
  const[currentPage, setCurrentPage] = useState(1)
  const totalProducts = pokemons?.results.length
  const lastIndex = currentPage * productsPerPage
  const firstIndex = lastIndex - productsPerPage
  const handleChan = e =>{
    e.preventDefault()
    setProductsPerPage(e.target.value)
  }
  return (
    <div>
      <nav className="home__footer nav">
        <div className="home__red nav__red"></div>
        <div className="home__circule nav__circule">
        <div className="home__circule2 nav__circule2"></div>
        </div>
        <div className="home__black nav__black"></div>
        <img className="nav__img" src="./public/image 11.png" alt="" />
      </nav>
      <main className="main__container">
        <div className="div">
          <p className="div__title"><span className="div__p">Welcome {trainer},</span> here you can find your favorite Pokémon</p>
          <div className="div__sele">
            <p className="div__title total">Number of cards =</p>
            <select className="div__select" onChange={handleChan}>
              <option className="option">{total}</option>
              {
                Number.map(num =>(
                  <option className="option" key={num}>{num}</option>
                ))
              }
            </select>
          </div>
        </div>
          <SelectType 
            setTypeSelected={setTypeSelected}
            handleSearch={handleSearch}
            inputSearch={inputSearch}
          />
          <div className="pokecard__container">
            {
              pokeFiltered?.map(poke => (
                <PokeCard 
                  key={poke.url}
                  url={poke.url}
                />
              )).slice(firstIndex, lastIndex)
            }
          </div>
          <Pagination 
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProducts={totalProducts}
            lastIndex={lastIndex}
            firstIndex={firstIndex}
          />
        </main>
    </div>
  )
}

export default PokedexPage