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
        ['Year', 'Win',{role:'style'},'Loss', {role:'style'}],
        ['2021',7,'color:#FFD700', 10, 'color:#800020'],
        ['2020',7, 'color:#FFD700', 9, 'color:#800020'],
        ['2019',3,'color:#FFD700', 13, 'color:#800020'],
        ['2018',7,'color:#FFD700', 9, 'color:#800020'],
        ['2017',7,'color:#FFD700', 9, 'color:#800020'],
        ['2016',8,'color:#FFD700', 7, 'color:#800020'],
        ['2015',9,'color:#FFD700', 7, 'color:#800020'],
        ['2014',4,'color:#FFD700', 12, 'color:#800020'],
        ['2013',3,'color:#FFD700', 13, 'color:#800020'],
        ['2012',10,'color:#FFD700', 6, 'color:#800020'],
      ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
      let options = {
        title:'Washington Commanders Results Per Year (Wins and Losses)',
        legend:'none'
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

