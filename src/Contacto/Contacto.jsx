import './Contacto.css'
import links from './Contacto';

const Contacto = () => {  
    function redireccion (e){
        e.preventDefault();
        const index = e.currentTarget.dataset.id;
        let url = links[index].url;
        window.open(url, "_blank", "noopener,noreferrer");
    }
  return (
    <div className='contact' id='contact'>
        <h2>Gracias por haber visitado mi portafolio</h2>
        <p>Si crees que mi perfil puede encajar en tu equipo, estaré encantado de conversar.</p>
        <section className='media'>
          <button className="Contacto-btn1" data-id={0} onClick={(e) => redireccion(e) }> Ver CV </button>
          <button className="Contacto-btn1" data-id={1} onClick={(e) => redireccion(e) }> Linkedln </button>
          <button className="Contacto-btn1" data-id={2} onClick={(e) => redireccion(e) }> GitHub </button>
        </section>
    </div>
  )
}

export default Contacto