google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    // This variable named data contains all the data to display in your graph.
    // The first row must contain the names of your pie category names and values
    // All subsequent rows are the actual data points on the pie graph.
    // *** Edit the numbers below to change your graph.
    // MAKE SURE ALL ROWS EXCEPT THE LAST ROW HAVE A COMMA AFTER THE CLOSING SQUARE BRACKET
    //
      let data = google.visualization.arrayToDataTable([
        ['Town', 'Population'],
        ['Quebec City',5.2,],
        ['Laval',4.2,],
        ['Gatineau',2.8,],
        ['Longueuil',2.8,],
        ['Sherbrooke',1.6,]
      ]);
      
    // This variable contains a list of settings
    // - it sets the title
    // - it makes the pie graph look 3D
    //
    // *** Edit the labels below to change how your graph displays
    //
      let options = {
        title:'Population of Towns In Quebec',
        hAxis: {format:'population'},
        backgroundColor: 'purple',
        is3D:true
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
