console.log('connected');

//restart game

var restart = document.querySelector("#b");

// selecting all squares
var squares = document.querySelectorAll("td");
console.log(squares.length);

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
};

restart.addEventListener('click', clearBoard);


var cellOne = document.querySelector('#one');

cellOne.addEventListener('click', function() {
    if (cellOne.textContent === '') {
        cellOne.textContent = "X";
    } else if (cellOne.textContent === 'X') {
        cellOne.textContent = '0';
    } else {
        cellOne.textContent = '';
    }
})