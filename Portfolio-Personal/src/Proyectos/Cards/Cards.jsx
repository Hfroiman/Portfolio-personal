import './Card.css'
import { use, useState } from 'react';


const Cards = ({ Creados }) => {

    const[tecnologias, setTecnologias] = useState([]);
    const[maxImagenes, setmaxImagenes] = useState();

    const[indiceProyecto, setindiceProyecto]=useState(0);
    const[indiceCantImg, setindiceCantImg]=useState(0);
    const[link, setLink] = useState("");
    const min = 1;
    
    function modal (e, id){
        e.preventDefault();

        const title = document.getElementById("staticBackdropLabel");
        title.innerText = Creados[id-min].title;

        const obs = document.getElementById("obs");
        obs.innerText = Creados[id-min].observaciones;
        
        setTecnologias([...Creados[id - min].tecnologias]);
        setmaxImagenes(Creados[id-min].img);
        setindiceProyecto(id);
        setindiceCantImg(min);
        setLink(Creados[id-min].enlacegit);
    }

    function next (e){
        e.preventDefault();
        if(indiceCantImg == maxImagenes){
            setindiceCantImg(min);
        }else{
            setindiceCantImg(indiceCantImg+min);
        }
    }

    function prev (e){
        e.preventDefault();
        if(indiceCantImg == min){
            setindiceCantImg(maxImagenes);
        }else{
            setindiceCantImg(indiceCantImg+min);
        }
    }

    function redireccion(e){
        e.preventDefault();
        window.open(link, "_blank", "noopener,noreferrer");
    }

    return (
        <div className='group-cards'>
            {
                Creados.map((pr) => (
                    <div className="card" key={pr.id}>
                        <img src={`/Proyecto${pr.id}/1.png`} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"> {pr.title} </h5>
                            <section className='card-tecnologis'>
                                {
                                    pr.tecnologias.map((te, index) => (
                                        <p className='card-leng' key={index}>{te}</p>
                                    ))
                                }
                            </section>
                            <div className='card-botonera'>
                                <a href="#" className="card-botones"><img src='../public/git.png' className="card-img-top" alt="..."></img>  Codigo</a>
                                <button type="button" className="card-botones" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={ (e) => modal( e, pr.id) }>
                                    Ver mas +
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="m-header">
                            <h3 className="m-title" id="staticBackdropLabel"></h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <section className='modal-film'>
                                <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={`/Proyecto${indiceProyecto}/${indiceCantImg}.png`} className="d-block w-100" alt="..." id="image-principal"></img>
                                        </div> 
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" onClick={ (e) => prev (e)}></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" onClick={ (e) => next (e)}></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </section>
                            <section className='modal-text'>
                                <p id='obs'></p>
                            </section>
                            <section className='modal-tecno'>
                                {
                                    tecnologias.map((t, index)=>(
                                        <p className='card-lend' key={index}>{t}</p>
                                    ))
                                }
                            </section>  
                            <section className='modal-info'>
                                <section className='modal-info-group'>
                                    <div className='modal-enlaces'>
                                        <button className="card-botones" onClick={(e)=> redireccion(e) }>Repositorio</button>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards