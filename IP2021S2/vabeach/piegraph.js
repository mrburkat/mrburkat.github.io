google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    //
    // This variable named data contains all the data to display in your graph.
    // The first row must contain the names of your pie category names and values
    // All subsequent rows are the actual data points on the pie graph.
    // *** Edit the numbers below to change your graph.
    // MAKE SURE ALL ROWS EXCEPT THE LAST ROW HAVE A COMMA AFTER THE CLOSING SQUARE BRACKET
    //
      let data = google.visualization.arrayToDataTable([
        ['Visior Population', 'Mhl'],
        ['Day Visitors',46.8],
        ['Overnight Visitors',38.9],
        ['Night Visitors',14.2]
      ]);
      
    // This variable contains a list of settings
    // - it sets the title
    // - it makes the pie graph look 3D
    //
    // *** Edit the labels below to change how your graph displays
    //
      let options = {
        title:'Visitor Population',
        is3D:true
      };
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
    
