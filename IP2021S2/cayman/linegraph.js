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
      ['Month', 'high','low'],
      ['Jan',83,72],
      ['Feb',83,71],
      ['Mar',85,72],
      ['Apr',86,74],
      ['May',88,75],
      ['Jun',89,77],
      ['Jul',90,77],
      ['Aug',90,77],
      ['Sep',90,77],
      ['Oct',88,76],
      ['Nov',86,75],
      ['Dec',84,73]
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
      title: 'Average temperature',
      hAxis: {title: 'Adverage Temprature'},
      vAxis: {title: 'Cayman Islands'},
      legend: 'none'
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

