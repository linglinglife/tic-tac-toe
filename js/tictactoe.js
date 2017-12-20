let grid = [];
let count = 0;

$(document).ready( function() {

  // creating array of '0'
  let gridWidth = 3;
  let gridHeight = 3;
  for( let y = 0; y < gridHeight; y++ ) {
    grid.push([]);
    for( let x = 0; x < gridWidth; x++ ) {
      grid[y].push(null);
    }
  }
  console.log(`grid: ${grid}`)

  let $table = $('.table');
  let columns = 3, rows = 3;

  //create grid on screen
  function createGrid( columns, rows ) {

    for (let i = 0; i < rows; i++) {
      let row = $('<tr>');
      $table.append(row)
      for (let j = 0; j < columns; j++) {
        let cell = $('<td>')
          cell.attr('data-row', i);
          cell.attr('data-column', j);
          // cell.attr('id', `${i}${j}`)
          row.append(cell);
      }
    }
    // let coordinates = grid${i}${j};
  };

  createGrid( columns, rows );


  // console.log(`row: ${$row} col: ${$column}`)

  // let coordinates = grid[$row][$column];


  // square to change colour when mouse is hovering over
  const $cell = $('td');

  $cell.hover(function() {
    $(this).css( "backgroundColor", "#39CCCC" );
    }, function() {
    $(this).css( "backgroundColor", "inherit" );
  });

  // on click, append alternating pictures of 'x' or 'o' into selected square. (determine if the square has already been filled?)
  //
  // let nought = "<img src='img/nought.png'>";
  // let cross = "<img src='img/cross.png'>";
  //
  // // $cell.append(nought);

  const playerOne = 'X';
  const playerTwo = 'O';

  let playerOneTurn = true;

  // event listener for player clicking into cells
  $table.on('click', 'td', function () {


    console.log(count);

    let $row = $(this).attr('data-row');
    let $column = $(this).attr('data-column');


    // check if box is already filled
    if ( $(this).children().length === 0 ) {
        count++;
    // check if it's X's or O's turn
      if ( playerOneTurn === true ) {
        // fill the box
       $(this).append(`<p>${playerOne}</p>`);
        // - append the x or o into the 2D array
       grid[$row][$column] = playerOne;
       playerOneTurn = false;
      } else {
       $(this).append(`<p>${playerTwo}</p>`);
       grid[$row][$column] = playerTwo;
        playerOneTurn = true;
      }
    }

    // - check for 5th-9th click if the move just played has won the game




      if ( count >= 5 && (grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2])) {
        window.alert("You won!");
      }



  });



      //   (grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2])
      //   (grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2])
      //   (grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0])
      //   (grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1])
      //   (grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2])
      //   (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2])
      //   (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0])





    // - if won, declare winner

    // - if all spaces are filled, and no winner, then declare draw
    // - if all items in the array are /= 0, then















});
