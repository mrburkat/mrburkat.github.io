google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    //
    // This variable named data contains all the data to display in your graph.
    // The first row must contain the names of your X and Y axes.
    // All subsequent rows are the actual data points on the bar graph.
    // *** Edit the numbers below to change your graph.
    // MAKE SURE ALL ROWS EXCEPT THE LAST ROW HAVE A COMMA AFTER THE CLOSING SQUARE BRACKET
    //
      let data = google.visualization.arrayToDataTable([
        ['Country', 'Price per tour in dollars'],
        ['Arena Floor Tour',48],
        ['Colosseum Guided Tour',58],
        ['Colosseum With Underground Tour',71],
        ['Colosseum Night Tour',82],
        ['Colosseum Private Tour',200],
        ['Vatican Museum & Colosseum Tour', 102]
      ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
      let options = {
        title:'Colosseum tours and pricing',
        hAxis: { format: '$'}
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

