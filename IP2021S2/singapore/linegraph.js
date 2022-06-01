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
      ['Month', 'High Temperature', 'Low Temperature'],
      ['January',87,75],
      ['February',89,76],
      ['March',90,76],
      ['April',90,77],
      ['June',90,77],
      ['July',89,77],
      ['August',88,77],
      ['September',88,76],
      ['October',89,76],
      ['November',88,75],
      ['December',87,75]
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
      title: 'Average Monthly Temperatures',
      hAxis: {title: 'Month'},
      vAxis: {title: 'Temperature'},
      legend: 'none',
      backgroundColor: '#FAFAFA',
      colors: ['#A45EE9','#87CEFB']
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }
    
