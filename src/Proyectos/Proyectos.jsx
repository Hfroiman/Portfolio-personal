import './Proyectos.css'
import Cards from './Cards/Cards'
import Creados from './Cards/Proyectos.js'

const Proyectos = () => {
  return (
    <div className='proyectos' id='Proyectos'>
        <section className='proyectos-titulo'>
            <a >Mis Proyectos</a>
        </section>
        <section className='proyectos-comentario'>
            <a>Algunos de los proyectos que se pueden encontrar en mi repositorio de Github</a>
        </section>
        <section className='proyectos-cards'>
           <Cards Creados ={ Creados } ></Cards>
        </section>
    </div>
  )
}

export default Proyectos