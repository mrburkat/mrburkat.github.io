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
      ['Month', 'High Temperature','Low Temperature'],
      ['January',61, 41],
      ['Febuary',63, 42],
      ['March',67, 45],
      ['April',70, 49],
      ['May',76, 56],
      ['June',82, 63],
      ['July',87, 68],
      ['Augest',87, 69],
      ['September',83, 64],
      ['October',75, 56],
      ['November',67, 47],
      ['December',62, 42]
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
      hAxis: {title: 'Months'},
      vAxis: {title: 'Temperatures (C & F)'},
      legend: 'none',
      backgroundColor: '#F8EBDA',
      colors: ['#79D8E1']
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

