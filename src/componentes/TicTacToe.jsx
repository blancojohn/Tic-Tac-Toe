import React, { useState } from 'react';


const TicTacToe = () => {

    const [jugador1, setJugador1] = useState("");
    const [jugador2, setJugador2] = useState("");
    const [arma, setArma] = useState("");
    const [ocultarFormulario, setOcultarFormulario]= useState(false)
    const [winner, setWinner] = useState(false)
    const [linesWinner] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ])
    //const [tablero, setTablero] = useState(Array.from({ length: 9 }, () => null))
    const [tablero, setTablero] = useState(new Array(9).fill(null));
    const casilla = (index) => {
        const jugada = [...tablero]
        if (jugada[index] === null) {
            jugada[index] = arma
            setTablero(jugada)
            if (arma === "X") {
                setArma("O")
            } else {
                setArma("X")
            }

            obtenerwinner(index, jugada)
        }
    }

    const obtenerwinner = (index, jugada) => {
        let opciones = linesWinner.filter((opcion) => {
            return opcion.includes(index)
        })

        for (let i = 0; i < opciones.length; i++) {
            const [a, b, c] = opciones[i]
            if (jugada[a] === jugada[b] && jugada[b] === jugada[c]) {
                setWinner(true);
            }
        }
    }
    let total = tablero.reduce((i, valor) => valor !== null ? i + 1 : i + 0, 0)
    console.log(total)
    return (
        <>
            {
                winner ?
                    (total % 2 === 0) ?
                        "WINS:" + jugador2
                        :
                        "WINS:" + jugador1
                    : null
            }
            <div className='titulo'>
                <h1>Tic Tac Toe in React.js</h1>
            </div>
            <div className='juego'>
                <div className="players" >
                    <h3>Choose your weapon</h3>
                    <input type="text" placeholder="player1" value={jugador1} onChange={(e) => { setJugador1(e.target.value); }} />
                    <input type="text" placeholder="player2" value={jugador2} onChange={(e) => { setJugador2(e.target.value); }} />
                    <button className="boton" onClick={() => setArma("X")}>X</button>
                    <button className="boton" onClick={() => setArma("O")}>O</button>
                </div>
            </div>



            {
                (arma !== '' && jugador1 !== '' && jugador2 !== '') && (
                    <div className='tablero'>
                        <div className='row'>
                            <div className='col-3 posicion1' onClick={() => casilla(0)}>{tablero[0]}</div>
                            <div className='col-3 posicion2' onClick={() => casilla(1)}>{tablero[1]}</div>
                            <div className='col-3 posicion3' onClick={() => casilla(2)}>{tablero[2]}</div>
                        </div>
                        <div className='row'>
                            <div className='col-3 posicion4' onClick={() => casilla(3)}>{tablero[3]}</div>
                            <div className='col-3 posicion5' onClick={() => casilla(4)}>{tablero[4]}</div>
                            <div className='col-3 posicion6' onClick={() => casilla(5)}>{tablero[5]}</div>
                        </div>
                        <div className='row'>
                            <div className='col-3 posicion7' onClick={() => casilla(6)}>{tablero[6]}</div>
                            <div className='col-3 posicion8' onClick={() => casilla(7)}>{tablero[7]}</div>
                            <div className='col-3 posicion9' onClick={() => casilla(8)}>{tablero[8]}</div>
                        </div>
                    </div>
                )
            }

        </>
    )
}
export default TicTacToe

















