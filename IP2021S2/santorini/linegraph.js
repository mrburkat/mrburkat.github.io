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
      ['January',57,49],
      ['February',57,49],
      ['March',60,51],
      ['April',65,55],
      ['May',72,61],
      ['June',81,69],
      ['July',84,73],
      ['August',84,73],
      ['September',79,68],
      ['October',72,63],
      ['November',65,56],
      ['December',59,51]
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
      backgroundColor: '#FFE5CA',
      colors: ['#3357FF' , '#B9D5EC']
      
    };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }
