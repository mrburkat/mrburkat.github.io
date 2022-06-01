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
      ["January",64,49],
      ["Febuary",63,50],
      ["March",64,52],
      ["April",65,54],
      ["May",66,58],
      ["June",69,61],
      ["July",72,64],
      ["August",73,65],
      ["September",73,63],
      ["October",71,59],
      ["November",68,53],
      ["December",64,49],
    ]);
    
   
    let options = {
      title: 'Highest and Lowest Monthly Temperatures - Huntington',
      hAxis: {title: 'Month'},
      vAxis: {title: 'Temperature in Fahrenheit'},
      legend: {position:'bottom'},
      colors: ['#008080', '#FDA4BA']

    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

