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
      ['Month', 'Average Temperature'],
      ['January',41],
      ['February',43],
      ['March',50],
      ['April',58],
      ['May',67],
      ['June',74],
      ['July',80],
      ['August',78],
      ['Spetember',73],
      ['October',62],
      ['November',53],
      ['December',45]
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
      title: 'Average Temperature(F) vs. Month',
      hAxis: {title: 'Month'},
      vAxis: {title: 'Average Temperature(F)'},
      legend:{position: 'bottom'},
      backgroundColor: '#ffffcc',
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

