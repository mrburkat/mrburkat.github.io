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
      ["Hotel Artemide",367],
      ["The Hoxton Rome",279],
      ["NH Collection Roma Fori Imperiali",475],
      ["Hotel Colosseum",142],
      ["Hotel Savoy Roma",423],
      ["Marcella Royal Hotel",215],
      ["River Palace Hotel",170],
      ["Rome Cavalieri, A Waldorf Astoria Hotel",221],
      ["The Independent Hotel",140],
      ["The Hive Hotel",323],
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
      title: 'Prices of top 10 hotels',
      hAxis: {title: 'Hotel'},
      vAxis: {title: 'Price $'},
      legend: 'none'
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

