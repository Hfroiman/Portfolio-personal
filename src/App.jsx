import './App.css'
import Footer from './Footer/Footer.jsx'
import Habilidades from './Habilidades/Habilidades.jsx'
import Header from './Header/Header'
import Presentacion from './Presentacion/Presentacion'
import Proyectos from './Proyectos/Proyectos'

const App = () => {
  return (
    <div>
      <Header/>
      <Presentacion/>
      <Proyectos/>
      <Habilidades/>
      <Footer/>
    </div>
  )
}

export default App