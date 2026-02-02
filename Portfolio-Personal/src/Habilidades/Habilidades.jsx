import CardHabilidades from './CardHabilidades/CardHabilidades'
import './habilidades.css'
import habilidades from './habilidades.js'

const Habilidades = () => {
  return (
    <div id='habilidades'>
      <h1>Habilidades tecnicas</h1>
        <CardHabilidades habilidades={habilidades}></CardHabilidades>
    </div>
  )
}

export default Habilidades