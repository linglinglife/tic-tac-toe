$(document).ready(function(){

  // creating array of '0'
  let gridWidth = 3;
  let gridHeight = 3;
  let grid = [];
  for( let y = 0; y < gridHeight; y++ ) {
    grid.push([]);
    for( let x = 0; x < gridWidth; x++ ) {
      grid[y].push(0);
    }
  }
  console.log(`grid: ${grid}`)

  let $table = $('.table');
  let columns = 3, rows = 3;

  //create grid on screen
  function createGrid(columns, rows) {

    for (let i = 0; i < rows; i++) {
      let row = $('<tr>');
      $table.append(row)
      for (let j = 0; j < columns; j++) {
        let cell = $('<td>')
          cell.attr('data-row', i);
          cell.attr('data-column', j);
          cell.attr('id', `${i}${j}`)
          row.append(cell);
      }
    }

  };

  createGrid(columns, rows);

  // const playerOne = 'X';
  // const playerTwo = 'O';

  let playerOneTurn = true;

  // event listener for player clicking into cells
  $table.on('click', 'td', function () {
    // $(this).attr('data-row');
    // console.log(`$(this).attr('data-column'): ${$(this).attr('data-column')} `);


    // check if box is already filled
    if ( $(this).children().length === 0 ) {
    // check if it's X's or O's turn
      if ( playerOneTurn === true ) {
        // fill the box
       $(this).append("<p>X</p>");
       playerOneTurn = false;
     } else {
        $(this).append("<p>O</p>");
        playerOneTurn = true;

      }
    }

    // check for a win or draw

    // display win or draw
  });









  // square to change colour when mouse is hovering over

  const $cell = $('td');

  $cell.hover(function() {
    $(this).css("backgroundColor", "#39CCCC");
    }, function() {
    $(this).css("backgroundColor", "inherit");
  });

  // on click, append alternating pictures of 'x' or 'o' into selected square. (determine if the square has already been filled?)
  //
  // let nought = "<img src='img/nought.png'>";
  // let cross = "<img src='img/cross.png'>";
  //
  // // $cell.append(nought);
//
//   $(this).on('click', function() {
//     $(this).attr(nought);
//
//   })
});

// - check if the move just played has won the game
// - if won, declare winner
// - if all spaces are filled, and no winner, then declare draw
