import React from 'react'
import "./Campo.scss";

const Campo = ({equipo}) => {

    return (
        <div className='campo'>
            {equipo && equipo.map((jugador) => {
                return (
                    <div className='cartaJugador' key={jugador.nombre}>
                        <h2>{jugador.nombre}</h2>
                        <img className='imagen' src={jugador.foto} alt={jugador.nombre} />
                        <h4>{jugador.posicion}</h4>
                        <h4>{jugador.media}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Campo