import './Proyectos.css'
import Cards from './Cards/Cards'
import Creados from './Cards/Proyectos.js'

const Proyectos = () => {
  return (
    <div id="Proyectos">
      <div className='Proyectos-main'>
        <section className='section-titulo'>
          <h1>Mis Proyectos</h1>
        </section>
        <section className='section-text'>
          <a>Algunos de los proyectos que se pueden encontrar en el portfolio:</a>
        </section>
        <section className='section-group-cars'>
          <Cards Creados ={ Creados } ></Cards>
        </section>
      </div>
    </div>
  )
}

export default Proyectos