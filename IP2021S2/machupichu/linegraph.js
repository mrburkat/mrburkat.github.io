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
      ['Size', 'Price'],
      ['2004',1650000],
      ['2005',1938000],
      ['2006',2227000],
      ['2007',2451000],
      ['2008',2581000],
      ['2009',2681000],
      ['2010',2948000],
      ['2011',3299000],
      ['2012',3642000],
      ['2013',4010000],
      ['2014',4062000],
      ['2015',4381000],
      ['2016',4718000],
      ['2017',4992000],
      ['2018',5384000],
      ['2019',5275000],
      ['2020',1119000]
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
      title: 'Tourism to Peru per Year',
      hAxis: {title: '# Tourists'},
      vAxis: {title: 'Year'},
      legend: 'none',
      backgroundColor:'#ECE9DF',
      interval: 2
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

