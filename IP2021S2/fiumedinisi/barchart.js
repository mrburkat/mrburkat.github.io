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
      var data = google.visualization.arrayToDataTable([
        ['Country', '%', {role: 'style'}],
        ['Italy',83, 'color: teal'],
        ['France',80, 'color: teal'],
        ['UK',72, 'color: teal'],
        ['USA',62, 'color: teal'],
        ['Germany',61, 'color: teal'],
        ['Japan',35, 'color: teal'],
        ['India',29, 'color: teal'],
        ['China',16, 'color: teal']
        ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
      let options = {
        title:"Percent of Population's Pasta Consumption Rate (%)",
        legend:'none'
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

