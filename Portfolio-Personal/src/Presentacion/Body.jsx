import './Body.css'

const Body = () => {
  return (
    <div className='body'>
      <div className='body2'>
        <section>
          <div><h1 className='titulo'>WEB DEVELOPER</h1></div>
        </section>
        <section className='body-text'>
          <p>Soy Froiman Hernán, Tecnico en Programador recibido en la UTN y desarrollador en formación, enfocado en frontend con React.js y backend con .NET.

Me interesa seguir creciendo como desarrollador y participar en proyectos que me permitan aplicar buenas prácticas y aprender nuevas tecnologías.</p>
        </section>
        <section className='body-btnera'>
          <a href="#Proyectos" className="body-btn1">Ver proyectos</a>
          <a href='#contact' className="body-btn2">Contactar </a>
        </section>
      </div>
    </div>
  )
}

export default Body