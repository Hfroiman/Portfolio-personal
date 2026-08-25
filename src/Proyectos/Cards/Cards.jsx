import { href } from 'react-router-dom';
import './Cards.css'
import { useState } from 'react';


const Cards = ({ Creados }) => {

    function redireccion(e, enlacegit) {
        e.preventDefault();
        window.open(enlacegit, "_blank", "noopener,noreferrer");
    }
    return (
        <div className='group-cards'>
            {
                Creados.map((pr) => (
                    <div className="card" key={pr.id}>
                        <img src={`/Proyecto${pr.id}/1.png`} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <div className="card-title">
                                <h5> {pr.title} </h5>
                            </div>
                            <section className='card-tecnologias'>
                                {
                                    pr.tecnologias.map((te, index) => (
                                        <p className='card-leng' key={index}>{te}</p>
                                    ))
                                }
                            </section>
                            <div className='card-botonera'>
                                <button type="button" className="card-botones" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(e) => redireccion(e, pr.enlacegit)}>
                                    Ver mas +
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards