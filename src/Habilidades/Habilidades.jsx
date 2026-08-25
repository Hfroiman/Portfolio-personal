import './Habilidades.css'
import CardHabilidades from './CardsHabilidades/CardHabilidades'
import habilidades from './Habilidades.js'

const Habilidades = () => {
  return (
    <div className='habilidades' id='Habilidades'>
        <section className='habilidades-title'>Habilidades Tecnicas</section>
        
        <section className='habilidades-Cards'>
           <CardHabilidades habilidades={habilidades}></CardHabilidades>
        </section>
    </div>
  )
}

export default Habilidades