google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ['Month', 'Temp'],
      ["Jan",57],
      ["Feb",56],
      ["Mar",56],
      ["Apr",58],
      ["May",63],
      ["Jun",69],
      ["Jul",74],
      ["Aug",75],
      ["Sep",72],
      ["Oct",67],
      ["Noc",63],
      ["Dec", 59]
    ]);
    
    let options = {
      title: 'Average Water Temperature in Nice',
      hAxis: {title: 'Month'},
      vAxis: {title: 'Average Water Temperature'},
      backgroundColor: '#7393B3',
      colors:['#FFFFFF'],
      legend:'Temperature',
    };
    
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

