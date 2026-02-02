import './CardHabilidades.css'

const CardHabilidades = ({habilidades}) => {
    return (
        <div className='groupcard'>
            {
                habilidades.map((hab)=>(
                    <div className="card" key={hab.id}>
                        <div className="card-body2">
                            <div className='card-body-logo'>
                                <img src={hab.img} alt='Front' className='img-card'></img>
                                <h5 className="card-title">{hab.title}</h5>
                            </div>
                            <div className='card-body-list'>
                                {
                                    hab.listado.map((list, index)=>(
                                        <p key={index}>{list}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardHabilidades