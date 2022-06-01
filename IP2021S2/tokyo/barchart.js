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
        ['Number of tourists in millions','year'],
        ['2011',4.2],
        ['2012',5.6],
        ['2013',6.8],
        ['2014',8.9],
        ['2015',11.9],
        ['2016',13.1],
        ['2017',13.7],
        ['2018',14.24],
        ['2019',15.18],
        ['2020',2.52]
      ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
      let options = {
        title:'Number of tourists per year in Tokyo',
        backgroundColor: '#fae9d5'
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

      
