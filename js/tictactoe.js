let gameArray = [];
let count = 0;

$(document).ready( function() {

  // create a 2D dynamic array
  const createArray = function ( gridHeight, gridWidth ) {
    for( let y = 0; y < gridHeight; y++ ) {
      gameArray.push([]);
      for( let x = 0; x < gridWidth; x++ ) {
        gameArray[y].push(null);
      }
    }
  };

  let columns = 3, rows = 3;

  createArray( columns, rows );

  let $table = $( '.table' );

  // create a grid
  const createGrid = function ( columns, rows ) {

    for ( let i = 0; i < rows; i++ ) {
      let row = $( '<tr>' );
      $table.append( row );
      for ( let j = 0; j < columns; j++ ) {
        let cell = $( '<td>' );
        cell.attr( 'data-row', i );
        cell.attr( 'data-column', j );
        row.append( cell );
      }
    }
  };

  createGrid( columns, rows );

  // square to change colour when mouse is hovering over
  const $cell = $( 'td' );

  $cell.hover(function() {
    $(this).css( "backgroundColor", "#39CCCC" );
    }, function() {
    $(this).css( "backgroundColor", "inherit" );
  });

  const playerOne = 'X';
  const playerTwo = 'O';

  let playerOneTurn = true;
  let winX = 0;
  let winO = 0;
  let drawCounter = 0;
  let won = false;
  let winnerMessage;

  // event listener for player clicking into cells
  $cell.click( function () {
    if (won === true){
      return;
    };

    let $row = $(this).attr('data-row');
    let $column = $(this).attr('data-column');

    // check if box is already filled
    if ( $(this).children().length === 0 ) {
      // start tallying up click counts
      count++;
      // assume playerOne starts the game
      if ( playerOneTurn === true ) {
        // fill the box with X
       $(this).append(`<p>${playerOne}</p>`);
        // append the X into the 2D array
       gameArray[$row][$column] = playerOne;
       playerWin = 'XXX';
       winnerMessage = "X is the best!";
      } else {
        // fill the box with O
       $(this).append(`<p>${playerTwo}</p>`);
       // append the 0 into the 2D array
       gameArray[$row][$column] = playerTwo;
       playerWin = 'OOO';
       winnerMessage = "O is a hero";
      }

      // - check only after 5th click if the move just played has won the game
      if ( count >= 5 && (
          gameArray[0][0] + gameArray[0][1] + gameArray[0][2] === playerWin ||
          gameArray[1][0] + gameArray[1][1] + gameArray[1][2] === playerWin ||
          gameArray[2][0] + gameArray[2][1] + gameArray[2][2] === playerWin ||
          gameArray[0][0] + gameArray[1][0] + gameArray[2][0] === playerWin ||
          gameArray[0][1] + gameArray[1][1] + gameArray[2][1] === playerWin ||
          gameArray[0][2] + gameArray[1][2] + gameArray[2][2] === playerWin ||
          gameArray[0][0] + gameArray[1][1] + gameArray[2][2] === playerWin ||
          gameArray[0][2] + gameArray[1][1] + gameArray[2][0] === playerWin
        )) {
        $('body').append(`<div id="endMessage">${winnerMessage}</div>`);
        won = true;
        // - if all spaces are filled, and no winner, then declare draw
      } else if (count === 9) {
        $('body').append("<div id='endMessage'>Congratulations, it's a draw!</div>");
        drawCounter++;
      }
      // switch players
      playerOneTurn = !playerOneTurn;
    }
  });

  let $button = $('button');

  $button.click( function () {

    gameArray = [];
    count = 0;
    createArray( columns, rows );
    $("p").remove();
    $("#endMessage").remove();
    won = false;
  });

});
