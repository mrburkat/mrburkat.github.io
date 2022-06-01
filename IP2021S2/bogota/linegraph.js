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
      ['Size', 'High','Low'],
      ["Jan", 68,43],
      ["Feb", 68,43],
      ["March",68,45],
      ["April",67,47],
      ["May",67,49],
      ["June",66,48],
      ["July",65,47],
      ["Aug",66,46],
      ["Sept",67,46],
      ["Oct",67,47],
      ["Nov",67,47],
      ["Dec",67,45]
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
      title: 'Average Temperature in Bogotá (F)',
      hAxis: {title: 'Month'},
      vAxis: {title: 'Average Temperature (F)'},
      legend: {position: 'bottom'},
      backgroundColor: '#5499C7',
      colors: ['#b0eaf7','#f7b481'],
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

