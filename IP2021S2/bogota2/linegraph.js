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
      ['Months', 'Maximums', 'Minimums'],
      ['January', 68, 43],
      ['February', 68, 45],
      ['March', 68, 47],
      ['April', 68, 48],
      ['May', 67, 48],
      ['June', 66, 48],
      ['July', 66, 47],
      ['August', 66, 46],
      ['September', 67, 45],
      ['October', 67, 46],
      ['November', 67, 47],
      ['December', 68, 44]
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
      title: 'Average Temperatures in Bogotá by Month',
      hAxis: {title: 'Months'},
      vAxis: {title: 'Average Temperatures (°F)'},
      legend: {position: 'bottom'},
      backgroundColor: '#E9B000',
      colors: ['#E24E42', '#008F95']
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

