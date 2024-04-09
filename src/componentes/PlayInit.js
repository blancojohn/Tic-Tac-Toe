import React from "react";

const PlayInit = ({formulario, setFormulario}) => {
    
    return (
        <>
            <div className="contenedor position-absolute top-50 start-50 translate-middle">
                <div className="entry-players" >{/* anteriormente se llamaba players */}
                    <h3>Choose your weapon</h3>
                    <input type="text" placeholder="player1" value={formulario.player1} onChange={e => {
                        setFormulario({ ...formulario, player1: e.target.value })
                    }} />
                    <input type="text" placeholder="player2" value={formulario.player2} onChange={e => {
                        setFormulario({ ...formulario, player2: e.target.value })
                    }} />
                    <button className="boton" onClick={() => {
                        setFormulario({ ...formulario, arma: 'X' })
                    }}>X</button>
                    <button className="boton" onClick={() => {
                        setFormulario({ ...formulario, arma: 'O' })
                    }}>O</button>
                </div>
            </div>
        </>
    )
}


export default PlayInit