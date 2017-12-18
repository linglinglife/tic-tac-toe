$(document).ready(function(){


  let gridWidth = 3;
  let gridHeight = 3;
  let grid = [];
  for(let y = 0; y < gridHeight; y++)
  {
    grid.push([]);
    for(let x = 0; x < gridWidth; x++)
    {
      grid[y].push(0);
    }
  }

  $('.table').on('click', 'td', function () {
    console.log($(this).attr('data-row'));
    console.log($(this).attr('data-column'));
  })

  let columns = 3, rows = 3

  function createGrid(columns, rows) {
    let table = $('.table');

    for (let i = 0; i < rows; i++) {
        let row = $('<tr>');
        table.append(row)
        for (let j = 0; j < columns; j++) {
            let cell = $('<td>')
            cell.attr('data-row', i);
            cell.attr('data-column', j)
            row.append(cell);
        }
    }
}
createGrid(columns, rows);


});
