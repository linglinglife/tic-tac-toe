$(document).ready(function(){


  let gridWidth = 3;
  let gridHeight = 3;
  let grid = [];
  for( let y = 0; y < gridHeight; y++ ) {
    grid.push([]);
    for( let x = 0; x < gridWidth; x++ ) {
      grid[y].push(0);
    }
  }

  let $table = $('.table');

  $table.on('click', 'td', function () {
    console.log(`$(this).attr('data-row'): ${$(this).attr('data-row')}`);
    console.log(`$(this).attr('data-column'): ${$(this).attr('data-column')} `);
  })

  let columns = 3, rows = 3;

  function createGrid(columns, rows) {

    for (let i = 0; i < rows; i++) {
      let row = $('<tr>');
      $table.append(row)
      for (let j = 0; j < columns; j++) {
        let cell = $('<td>')
          cell.attr('data-row', i);
          cell.attr('data-column', j)
          row.append(cell);
      }
    }

  };

  createGrid(columns, rows);

  // square to change colour when mouse is hovering over

  const $cell = $('td');

  $cell.on('mouseenter', function() {
    $(this).css("backgroundColor", "#39CCCC")
  });

  $cell.on('mouseleave', function() {
    $(this).css("backgroundColor", "inherit")
  });

  // .mouseleave(function(){
  //   $(this).remove('backgroundColor');
  // });


  // on click, append alternating pictures of 'x' or 'o' into selected square. (determine if the square has already been filled?)

  $cell.on('click', function() {

  })


});

// - check if the move just played has won the game
// - if won, declare winner
// - if all spaces are filled, and no winner, then declare draw
