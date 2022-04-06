import React, {useEffect, useState} from 'react';
import Square from "../SquareIndex/Square";
import './Game.css';

const initialState = ["", "", "", "", "", "", "", "", "", ""];

function Game() {
    const [gameState, updateGameState] = useState(initialState)
    const [isOChance, updateIsOChance] = useState(true);

    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = isOChance ? "O" : "X";  // checking the chance of which player
        updateIsOChance(!isOChance)
        updateGameState(strings)
    }

    const resetGame = () => {
        updateGameState(initialState)
    }
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            resetGame();
            alert(`Hurray ! ${winner} won the Game !`)
        }
    }, [gameState])

    const checkWinner = () => {
        const winnerCoordinates = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winnerCoordinates.length; i++) {
            const [a, b, c] = winnerCoordinates[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    return (
        <div className="app-header">
            <p className="heading-text">Tic Tac Toe</p>
            <p>Note: First chance is of O</p>
            <button className="reset-button" onClick={resetGame}>Reset Game</button>
            <div className="row grid-center">
                <Square className="b-bottom-right b-left b-top" onClick={() => onUserClicked(0)} state={gameState[0]}/>
                <Square className="b-bottom-right b-top" onClick={() => onUserClicked(1)} state={gameState[1]}/>
                <Square className="b-bottom-right b-top" onClick={() => onUserClicked(2)} state={gameState[2]}/>
            </div>
            <div className="row grid-center">
                <Square className="b-bottom-right b-left" onClick={() => onUserClicked(3)} state={gameState[3]}/>
                <Square className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]}/>
                <Square className="b-bottom-right" onClick={() => onUserClicked(5)} state={gameState[5]}/>
            </div>
            <div className="row grid-center">
                <Square className="b-bottom-right b-left" onClick={() => onUserClicked(6)} state={gameState[6]}/>
                <Square className="b-bottom-right" onClick={() => onUserClicked(7)} state={gameState[7]}/>
                <Square className="b-bottom-right" onClick={() => onUserClicked(8)} state={gameState[8]}/>
            </div>
        </div>
    );
};

export default Game;