import './Contacto.css'

const Contacto = ({ obj }) => {
    function redireccion(e, enlace) {
        e.preventDefault();
        window.open(enlace, "_blank", "noopener,noreferrer");
    }

    return (
        <section className='Contacto'>
            <h1>Gracias por haber visitado mi portafolio</h1>
            <p>Si crees que mi perfil puede encajar en tu equipo, estaré encantado de conversar.</p>
            <div className='contacto-group-btnes'>
                {
                    obj.map((pr) =>
                        <button className='Contacto-btn' onClick={(e)=>{redireccion(e, pr.link)}}> {pr.name} </button>
                    )
                }
            </div>
        </section>
    )
}

export default Contacto