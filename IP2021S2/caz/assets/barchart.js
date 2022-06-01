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
        ['Month', 'Temp High', {role:'style'},  'Temp Low', {role:'style'}],
        ['Jan',25, 'color:#80BFFF', 19, 'color:#3366FF'],
        ['Feb',28, 'color:#80BFFF',20, 'color:#3366FF'],
        ['Mar',37, 'color:#80BFFF',26, 'color:#3366FF'],
        ['Apr',52, 'color:#80BFFF',38, 'color:#3366FF'],
        ['May',64, 'color:#80BFFF',48, 'color:#3366FF'],
        ['June',72, 'color:#80BFFF',56, 'color:#3366FF'],
        ['July',77, 'color:#80BFFF',61, 'color:#3366FF'],
        ['Aug',75, 'color:#80BFFF',59, 'color:#3366FF'],
        ['Sep',68, 'color:#80BFFF',52, 'color:#3366FF'],
        ['Oct',55, 'color:#80BFFF',43, 'color:#3366FF'],
        ['Nov',42, 'color:#80BFFF',34, 'color:#3366FF'],
        ['Dec',31, 'color:#80BFFF',25, 'color:#3366FF']
      ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
      let options = {
        title:'Highs and lows througout the months',
        hAxis: {title: 'Average Temperates (F)'},
        vAxis: {title: 'Months'},
        legend: 'none',
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

