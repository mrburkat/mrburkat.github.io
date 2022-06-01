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
        ['Month', 'Temp High', 'Temp Low'],
        ['Jan',49,29],
        ['Feb',52,30],
        ['Mar',60,37],
        ['Apr',71,46],
        ['May',78,55],
        ['Jun',85,64],
        ['Jul',89,68],
        ['Aug',87,67],
        ['Sep',81,61],
        ['Oct',71,50],
        ['Nov',62,40],
        ['Dec',53,33]
      ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
      let options = {
        title:'Last Year\'s Temperture Highs'
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }
