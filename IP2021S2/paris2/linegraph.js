google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    //
    // This variable named data contains all the data to display in your graph.
    // The first row must contain the names of your X and Y axes.
    // All subsequent rows are the actual data points on the line graph.
    // *** Edit the numbers below to change your graph.
    // MAKE SURE ALL ROWS EXCEPT THE LAST ROW HAVE A COMMA AFTER THE CLOSING SQUARE BRACKET
    //
    let data = google.visualization.arrayToDataTable([
      ['Year', 'Vistors'],
      ["2010",8.5],
      ["2011",8.88],
      ["2012",9.72],
      ["2013",9.3],
      ["2014",9.26],
      ["2015",8.6],
      ["2016",7.3],
      ["2017",8.1],
      ["2018",10.2],
      ["2019",9.6],
      ["2020",2.7]
    ]);
    
    // This variable contains a list of settings
    // - it sets the title
    // - it sets the horizontal axis label
    // - it sets the vertical axis label
    // - it does not display a legend
    //
    // *** Edit the labels below to change how your graph displays
    //
    let options = {
      title: 'Number of visitors to Paris from 2010 to 2020',
      hAxis: {title: 'Year'},
      
      vAxis: {title: 'Number of Vistors (In Millions)',

          textstyle: {color:'white'}
      },
      legend: 'none',
      backgroundColor:'#2874A6',
      colors: ['#F4D03F']
    }
    
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
    let chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

