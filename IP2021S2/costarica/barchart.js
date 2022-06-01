google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart(){
    //
    // This variable named data contains all the data to display in your graph.
    // The first row must contain the names of your X and Y axes.
    // All subsequent rows are the actual data points on the bar graph.
    // *** Edit the numbers below to change your graph.
    // MAKE SURE ALL ROWS EXCEPT THE LAST ROW HAVE A COMMA AFTER THE CLOSING SQUARE BRACKET
    //
      let data = google.visualization.arrayToDataTable([
        ['Month', 'inches'],
        ['January',0.3],
        ['February',0.4],
        ['March',0.5],
        ['April',3.2],
        ['May',10.5],
        ['June', 11.0],
        ['July', 7.2],
        ['August', 10.9],
        ['September', 14.0],
        ['October', 13.0],
        ['November',5.3],
        ['December', 1.3]
        
        ]);
      
    // This variable sets the title of your barchart
    // *** Edit the label below to change how your graph displays
     
        

      let options ={
  title:'Rain in Costa Rica'
      };

    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

