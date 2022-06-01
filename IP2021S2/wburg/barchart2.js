function drawChart2() {
    
      let data = google.visualization.arrayToDataTable([
        ['Month', 'Temp Low'],
        ['Jan',29],
        ['Feb',30],
        ['Mar',37],
        ['Apr',46],
        ['May',55],
        ['Jun',64],
        ['Jul',68],
        ['Aug',67],
        ['Sep',61],
        ['Oct',50],
        ['Nov',40],
        ['Dec',33]
      ]);
      
      let options = {
        title:'Last Years Temperture Lows'
      };
      
      let chart = new google.visualization.BarChart(document.getElementById('myChart2'));
      chart.draw(data, options);
    }
