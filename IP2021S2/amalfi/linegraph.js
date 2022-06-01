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
      ['Month', 'Number'],
      ['Jan',0.024],
      ['Feb',0.03],
      ['Mar',0.05],
      ['Apr',0.5],
      ['May',1],
      ['Jun',2.3],
      ['Jul',2.7],
      ['Aug', 3.1],
      ['Sep',2.1],
      ['Oct',1.1],
      ['Nov',0.09],
      ['Dec', 0.08]
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
      title: 'Tourists on the Amalfi Coast',
      hAxis: {title: 'Month'},
      vAxis: {title: 'Tourists Per Month in Millions'},
      legend: 'none'
    };
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

