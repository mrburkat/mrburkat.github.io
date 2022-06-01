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
        ['Site', 'Mhl'],
        ['Huaca Pucllana',2.3],
        ['Chan Chan',3.7],
        ['Raqchi',4],
        ['Huaca del Sol y de la Luna',4.8],
        ['Pachacamac',5.1],
        ['Huascaran National Reserve',5.2],
        ['Nazca Lines',5.9],
        ['Santa Catalina Monastery',6],
        ['Titicaca National Reserve',6.1],
        ['Paracas National Reserve',7.1],
        ['Colca Valley',8.2],
        ['Machu Picchu',41.6]
      ]);
      
      
    // This variable contains a list of settings
    // - it sets the title
    // - it makes the pie graph look 3D
    //
    // *** Edit the labels below to change how your graph displays
    //
      let options = {
        title:"Top Sites by % of Peru's Tourism GDP",
        is3D:true,
        backgroundColor:'#ECE9DF'
      };
     
      
    // These two lines of code draw the chart. YOU DO NOT NEED TO EDIT ANYTHING HERE.
      let chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
