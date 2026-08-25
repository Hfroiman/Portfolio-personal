import './CardHabilidades.css'

const CardHabilidades = ({ habilidades }) => {
    return (
        <div className='groupcard'>
            {
                habilidades.map((hab) => (
                    <div className="card-habilidades" key={hab.id}>
                        <div className='card-body-logo'>
                            <img src={hab.img} alt='Front' className='img-card'></img>
                            <h5 className="card-title-h">{hab.title}</h5>
                        </div>
                        <div className='card-body-list'>
                            {
                                hab.listado.map((list, index) => (
                                    <p key={index}>{list}</p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardHabilidades