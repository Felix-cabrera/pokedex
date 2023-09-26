import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './Style/pokedexId.css'
import '../components/PokedexPage/styles/pokecard.css'

const PokedexIdPage = () => {

  const {id} = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  },[id])
  const firstType = pokemon?.types[0].type.name
  return (
    <section className="pokedexid__container">
      <nav className="home__footer nav">
        <div className="home__red nav__red"></div>
        <div className="home__circule nav__circule">
        <div className="home__circule2 nav__circule2"></div>
        </div>
        <div className="home__black nav__black"></div>
        <img className="nav__img" src="./public/image 11.png" alt="" />
      </nav>
      <div className="pokedexid">
        <header className={`pokedexid__header ${firstType}-gradient`}>
            <img className='pokedexid__img'
            src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <h2 className={`${firstType}-color`}>#{pokemon?.id}</h2>
        <hr />
        <h2 className={`${firstType}-color`}>{pokemon?.name}</h2>
        <ul className="container__type">
          <li className="type__li"><span>Weight</span><span className="type__text">{pokemon?.height}</span></li>
          <li className="type__li"><span>Height</span><span className="type__text">{pokemon?.weight}</span></li>
        </ul>
        <article className="pokedexid__type">
          <div>
            <h3 className="title">Type</h3>
            <div className="container__type">
              {
                pokemon?.types.map(typ =>(
                  <h4 className={`type__item ${typ.type.name}-background`} key={typ.type.url}>{typ.type.name}</h4>
                
                ))
              }
            </div>
          </div>
          <div>
            <h3 className="title">Ability</h3>
            <div className="container__type">
              {
                pokemon?.abilities.map(abili =>(
                  <h4 className="type__item1" key={abili.ability.url}>{abili.ability.name}</h4>
                ))
              }
            </div>
          </div>
        </article>
        <article className="pokedexid__stats">
          <h2>Stats</h2>
          {
            pokemon?.stats.map(sta =>(
              <ul key={sta.stat.url}>
                <li className="stats__container" ><span>{sta.stat.name}</span><span className="stats__base">{sta.base_stat}/150</span></li>
                <div className={`barra ${firstType}-gradient`}><div className={`progreso ${firstType}-gradient`} style={{width:`${(sta.base_stat*100)/150}%`}}></div></div>
              </ul>
            ))
          }
        </article>
      </div>
        <div className='movements'>
          <h2 className="movements__title">Movements</h2>
          <div className="movements__container">
            {
              pokemon?.moves.map(mov=>(
                <ul key={mov.move.url}>
                  <li className="movements__item" >{mov.move.name}</li>
                </ul>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default PokedexIdPage