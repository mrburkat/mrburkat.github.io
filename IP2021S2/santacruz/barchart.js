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
        ['Month', 'High','Low'],
        ['January',61,41],
        ['February',63,42],
        ['March',65,44],
        ['April',68,45],
        ['May',71,48],
        ['June',74,51],
        ['July',74,53],
        ['August',75,54],
        ['September',76,52],
        ['October',72,49],
        ['November',65,44],
        ['December',60,40]
        
        
      ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
      let options = {
        title:'Santa Cruz Average Temperature'
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

