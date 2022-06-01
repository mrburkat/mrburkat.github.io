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
      ['Years', 'Amount'],
      ['2010',2.05],
      ['2011',2.24],
      ['2012',2.38],
      ['2013',2.50],
      ['2014',2.68],
      ['2015',3.02],
      ['2016',3.40],
      ['2017',3.99],
      ['2018',4.43],
      ['2019',4.70],
      ['2020',1.22]
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
      title: 'Tourism Over the Years',
      hAxis: {title: 'Years'},
      vAxis: {title: 'Amount of Tourists (by millions)'},
      legend: 'none'
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

