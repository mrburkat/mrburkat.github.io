google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
   
      let data = google.visualization.arrayToDataTable([
        ['Month', 'Tourist Average'],
        ['January',55],
        ['February',15],
        ['March',49],
        ['April',44],
        ['May',44],
        ['June',44],
        ['July',44],
        ['August',44],
        ['September',44],
        ['October',44],
        ['Novmeber',44],
        ['December',44],
      ]);
      
      let options = {
        title:'Average Monthly Visits',
      backgroundColor: '#7393B3',
      colors:['#FFFFFF'],
      };
      
      let chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);
    }

