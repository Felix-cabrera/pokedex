import { useRef} from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import './Style/Home.css'

const HomePage = () => {
  
  const trainer = useSelector(store => store.trainer)

  const inputTrainer = useRef() 
  
  const  dispatch = useDispatch()

  const navigate = useNavigate()
  
  const handleTrainer = e =>{
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <section className="home__container">
      <div className="home">
        <img className="home__img" src="./public/image 11.png" alt="" />
        <h1 className="home__title">Hi Trainer !</h1>
        <p className="home__p" >To Start, please, enter your trainer nickname</p>
        <form className="home__form" onSubmit={handleTrainer}>
            <input className="home__input" ref={inputTrainer} type="text" />
            <button className="home__button" >start!</button>
      </form>
      {
        trainer
        ? <h2 className="home__err">❌ Hey! you nickname must be least 5 characters</h2>
        : ''
      }
      </div>
      <footer className="home__footer">
        <div className="home__red"></div>
        <div className="home__circule">
        <div className="home__circule2"></div>
        </div>
        <div className="home__black"></div>
      </footer>
    </section>
  )
}

export default HomePage