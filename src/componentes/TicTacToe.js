import React, { useState } from 'react';
import PlayInit from './PlayInit';

const TicTacToe = () => {
    const [formulario, setFormulario] = useState({
        player1: '',
        player2: '',
        arma: '',
        texto: 'Selecciona un arma',
        activo: true
    })
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
    console.log("líneas ganadoras",linesWinner)
    const [winner, setWinner] = useState(false)
    const [tablero, setTablero] = useState(new Array(9).fill(null));

    const casilla = (index) => {
        const jugada = [...tablero]
        if (jugada[index] === null) {
            jugada[index] = formulario.arma
            setTablero(jugada)
            if (formulario.arma === "X") {
                setFormulario({...formulario, arma: 'O'})
            } else {
                setFormulario({...formulario, arma: 'X'})
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
    console.log('aca estoy:',total)
    console.log(tablero)
    return (
        <>
            <div class="position-absolute top-0 start-50 translate-middle-x">
                <h1>TIC-TAC-TOE In React Js</h1>
            </div>
            {
                winner ?
                    (total % 2 === 0) ?
                        "WINS:" + formulario.player2
                        :
                        "WINS:" + formulario.player1
                    : total === 9 ?
                        "DRAW!"
                        :
                        null            
            }
            
            {   
                
                (formulario.player1 !== '' && formulario.player2 !== '' && formulario.arma) ? (
                    <div className='tablero position-absolute top-50 start-50 translate-middle'>
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
                ) :
                (
                    <PlayInit formulario={formulario} setFormulario={setFormulario}/>  
                )     
            }

        </>
            )
    }
    export default TicTacToe

    

    

            






















 
            
