import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <section className='header-nombre'>
            <a> Froiman Hernan </a>
        </section>
        <section className='header-btns'>
            <a href="#Proyectos" >Proyectos</a>
            <a href="#Habilidades" >Habilidades</a>
            <a href="#Contacto" >Contacto</a>
        </section>
    </div>
  )
}

export default Header
