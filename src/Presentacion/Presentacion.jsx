import './Presentacion.css'

const Presentacion = () => {
    return (
        <div className='presentacion'>
            <section className='presentacion-titulo'>
                <a>DESARROLLADOR WEB</a>
            </section>
            <section className='presentacion-descripcion'>
                <a>Soy Froiman Hernán, Tecnico en Programador recibido en la UTN y desarrollador en formación, enfocado en frontend con React.js y backend con .NET. Me interesa seguir creciendo como desarrollador y participar en proyectos que me permitan aplicar buenas prácticas y aprender nuevas tecnologías.</a>
            </section>
            <section className='presentacion-btns'>
                <a href="#Proyectos" className='presentacion-btn'>Ver Proyectos</a>
                <a href="#Habilidades" className='presentacion-btn'>Habilidades</a>
            </section>
        </div>
    )
}

export default Presentacion