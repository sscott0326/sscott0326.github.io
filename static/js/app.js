function optionChanged(OTU_id) {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var OTU_id = d3.select("#selDataset").node().value;
  console.log(OTU_id);

  // clear the input value
  d3.select("#selDataset").node().value = "";

  // Build the plot with the new stock
  buildPlot(OTU_id);
}


function buildPlot(OTU_ID) {
    var data = d3.json("samples.json");

    data.then(function(data)  {

      // Grab values from the data json object to build the plots

    var trace1 = {
      x: data.samples.map(row => row[3]),
      y: data.samples.map(row => row[1]),
      text: data.samples.map(row => row[2]),
      name: "OTU",
      type: "bar",
      orientation: "h"
    };

    var chart_data = [trace1];

    Plotly.newPlot("bar", chart_data);
  });
};

buildPlot();
