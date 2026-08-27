import './App.css'
import Contacto from './Contacto/Contacto.jsx'
import Footer from './Footer/Footer.jsx'
import Habilidades from './Habilidades/Habilidades.jsx'
import Header from './Header/Header'
import Presentacion from './Presentacion/Presentacion'
import Proyectos from './Proyectos/Proyectos'
import obj from './Contacto/Contacto.js'

const App = () => {
  return (
    <div>
      <Header/>
      <Presentacion/>
      <Proyectos/>
      <Habilidades/>
      <Contacto obj={obj}/>
      <Footer/>
    </div>
  )
}

export default App