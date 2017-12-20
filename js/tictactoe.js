let grid = [];
let count = 0;

$(document).ready( function() {

  // create a 2D dynamic array
  let gridWidth = 3;
  let gridHeight = 3;
  let filler = 0;
  for( let y = 0; y < gridHeight; y++ ) {
    grid.push([]);
    for( let x = 0; x < gridWidth; x++ ) {
      grid[y].push(filler);
      filler++;
    }
  }

  let $table = $('.table');
  let columns = 3, rows = 3;

  // create a grid
  function createGrid( columns, rows ) {

    for (let i = 0; i < rows; i++) {
      let row = $('<tr>');
      $table.append(row)
      for (let j = 0; j < columns; j++) {
        let cell = $('<td>')
          cell.attr('data-row', i);
          cell.attr('data-column', j);
          row.append(cell);
      }
    }
  };

  createGrid( columns, rows );

  // square to change colour when mouse is hovering over
  const $cell = $('td');

  $cell.hover(function() {
    $(this).css( "backgroundColor", "#39CCCC" );
    }, function() {
    $(this).css( "backgroundColor", "inherit" );
  });

  const playerOne = 'X';
  const playerTwo = 'O';

  let playerOneTurn = true;

  // event listener for player clicking into cells
  $table.on('click', 'td', function () {
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
       grid[$row][$column] = playerOne;
      } else {
        // fill the box with O
       $(this).append(`<p>${playerTwo}</p>`);
       // append the 0 into the 2D array
       grid[$row][$column] = playerTwo;
      }

      // - check only after 5th click if the move just played has won the game
      if ( count >= 5 && (
          (grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) ||
          (grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) ||
          (grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) ||
          (grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) ||
          (grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) ||
          (grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) ||
          (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) ||
          (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])
        )) {
        window.alert("Congratulations, You won!");
        // - if all spaces are filled, and no winner, then declare draw
      } else if (count === 9) {
        window.alert("Congratulations, it's a draw!");
      }
      // switch players
      playerOneTurn = !playerOneTurn;
    }
  });

    // - if all items in the array are /= 0, then
});
