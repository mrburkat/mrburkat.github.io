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
      ['Month', 'High','Low'],
      ["January",59,47],
      ["February",61,48],
      ["March",65,51],
      ["April",68,53],
      ["May",72,57],
      ["June",78,57],
      ["July",82,64],
      ["August",83,65],
      ["September",80,63],
      ["October",73,59],
      ["Novemeber",64,53],
      ["December",59,49]
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
      title: 'Average Monthly Temperature: Lisbon, Portugal ',
      hAxis: {title: 'Months'},
      vAxis: {title: 'Temperature (F)'},
      legend: 'high',
      colors:['#046A38', '#DA291C']
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

