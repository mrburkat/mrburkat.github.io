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
      ['Number of tourists in millions','year'],
        ['2011',4.2],
        ['2012',5.6],
        ['2013',6.8],
        ['2014',8.9],
        ['2015',11.9],
        ['2016',13.1],
        ['2017',13.7],
        ['2018',14.24],
        ['2019',15.18],
        ['2020',2.52]
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
      title: 'Oversees Tourists to Tokyo per Year',
      hAxis: {title: 'Year'},
      vAxis: {title: '# of Tourists in Millions'},
      legend: 'none',
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

