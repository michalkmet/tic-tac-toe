"use strict";

let playerBoard = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
let alreadyPicked = [];
let winners = [];
let winner = '';

for (let i=1;i<=9;i++){
    let playerPick = getRandomNumber(alreadyPicked);

    if(i%2 === 0){
        playerBoard[playerPick] = 'x';
    } else {
        playerBoard[playerPick] = 'o';
    }

    if(i>4){
        winners = checkWhoWin(playerBoard);
        if(winners[0] === 'x' || winners[0] === 'o'){
            console.log(playerBoard);
            console.log('We have winner!: ', winners[0]);
            break;
        };
    }

    if(i === 9 & winner === ''){
        console.log('End of game, no winner');
        console.log(playerBoard);
    }

}

function getRandomNumber(alreadyPicked){
    let randomNumber = Math.floor(Math.random() * 9);
    if(alreadyPicked.includes(randomNumber)){
        return getRandomNumber(alreadyPicked);
    }
    alreadyPicked.push(randomNumber)
    return randomNumber;
}

function checkWhoWin(playerBoard){
    let winners = [];
   
    ['x','o'].forEach(player => {
        if(
            (
                (playerBoard[0] === player && playerBoard[1] === player && playerBoard[2] === player) ||
                (playerBoard[3] === player && playerBoard[4] === player && playerBoard[5] === player) ||
                (playerBoard[6] === player && playerBoard[7] === player && playerBoard[8] === player)
            ) ||
            (
                (playerBoard[0] === player && playerBoard[3] === player && playerBoard[6] === player) ||
                (playerBoard[1] === player && playerBoard[4] === player && playerBoard[7] === player) ||
                (playerBoard[2] === player && playerBoard[5] === player && playerBoard[8] === player)
            ) ||
            (
                (playerBoard[0] === player && playerBoard[4] === player && playerBoard[8] === player) ||
                (playerBoard[2] === player && playerBoard[4] === player && playerBoard[6] === player)
            )
        ){
            winners.push(player);
        }
    });
    return winners;
}