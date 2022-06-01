google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    //
    // This variable named data contains all the data to display in your graph.
    // The first row must contain the names of your X and Y axes.
    // All subsequent rows are the actual data points on the line graph.
    // *** Edit the numbers below to change your graph.
    // MAKE SURE ALL ROWS EXCEPT THE LAST ROW HAVE A COMMA AFTER THE CLOSING SQUARE BRACKET
    //
    let data = google.visualization.arrayToDataTable([
      ['Meses', 'Máximos', 'Mínimos'],
      ['Enero', 68, 43],
      ['Febrero', 68, 45],
      ['Marzo', 68, 47],
      ['Abril', 68, 48],
      ['Mayo', 67, 48],
      ['Junio', 66, 48],
      ['Julio', 66, 47],
      ['Agosto', 66, 46],
      ['Septiembre', 67, 45],
      ['Octubre', 67, 46],
      ['Noviembre', 67, 47],
      ['Diciembre', 68, 44]
    ]);
     
      
    
    // This variable contains a list of settings
    // - it sets the title
    // - it sets the horizontal axis label
    // - it sets the vertical axis label
    // - it does not display a legend
    //
    // *** Edit the labels below to change how your graph displays
    //
    let options = {
      title: 'Temperaturas promedio en Bogotá por mes',
      hAxis: {title: 'Meses'},
      vAxis: {title: 'Temperaturas promedio (°F)'},
      legend: {position: 'bottom'},
      backgroundColor: '#E9B000',
      colors: ['#E24E42', '#008F95']
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

