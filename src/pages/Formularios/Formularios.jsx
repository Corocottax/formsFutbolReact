import React, { useState } from 'react'
import Campo from '../Campo/Campo'
import "./Formularios.scss"

const EstadoInicial = {
    "nombre": "",
    "media": "",
    "foto": "",
    "posicion": "DC"
}

const Formularios = () => {

    /* const banca = []; */
    const [jugador, setJugador] = useState(EstadoInicial)
    const [equipo, setEquipo] = useState([]);

    const submitForm = (ev) => {
        ev.preventDefault();
        /* banca.push(jugador); */
        setEquipo([...equipo, jugador]);
        setJugador(EstadoInicial);
    }

    const handleInput = (evento) => {
        const { name, value } = evento.target
        setJugador({ ...jugador, [name]: value });
        /* console.log(jugador); */
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <div className='info'>
                        <label>Nombre</label>
                        <input required={true} className='input' type="text" name='nombre' value={jugador.nombre} onChange={handleInput}></input>
                    </div>
                    <div className='info'>
                        <label>Media</label>
                        <input required={true} className='input' type="number" name="media" value={jugador.media} onChange={handleInput}></input>
                    </div>
                    <div className='info'>
                        <label>Foto</label>
                        <input required={true} className='input' type="text" name="foto" value={jugador.foto} onChange={handleInput}></input>
                    </div>
                    <div className='info'>
                        <label>Posicion</label>
                        <select className='input' name='posicion' value={jugador.posicion} onChange={handleInput}>
                            {/* {jugador.posicion.length === 0 && <option>Slecciona una posición</option>} */}
                            <option>DC</option>
                            <option>MC</option>
                            <option>DFC</option>
                            <option>POR</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button>Contratar</button>
                </div>
            </form>
            <Campo equipo={equipo}></Campo>
        </div>
    )
}

export default Formularios