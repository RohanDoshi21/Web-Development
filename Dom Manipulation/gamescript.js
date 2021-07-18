console.log('connected');

//restart game

var restart = document.querySelector("#b");

// selecting all squares
var squares = document.querySelectorAll("td");

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
};

restart.addEventListener('click', clearBoard);

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', ChangeText);
}

function ChangeText() {
    if (this.textContent === '') {
        this.textContent = "X";
    } else if (this.textContent === 'X') {
        this.textContent = '0';
    } else {
        this.textContent = '';
    }
}