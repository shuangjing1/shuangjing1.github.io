// set the dimensions and margins of the graph
const margin = {top: 30, right: 20, bottom: 30, left: 80},
width = 700 - margin.left - margin.right,
height = 520 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg1 = d3.select("#my_dataviz")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left},${margin.top})`);

//Read the data
d3.csv("./data/scatter-plot-data.csv").then( function(data) {

// Add X axis
const x = d3.scaleLinear()
.domain([0, 16000])
.range([ 0, width ]);
svg1.append("g")
.attr("transform", `translate(0, ${height})`)
.call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear()
.domain([0, 12000000])
.range([ height, 0]);
svg1.append("g")
.call(d3.axisLeft(y));

// Add a scale for bubble size
const z = d3.scaleLinear()
.domain([300, 130000])
.range([ 4, 40]);

// Add a scale for bubble color
const myColor = d3.scaleOrdinal()
.domain(["Allston-Brighton", "Boston", "Charlestown", "Dorchester", "East Boston", "Harbor Islands","Hyde Park",
"Jamaica Plain","Mattapan","Roslindale","Roxbury","South Boston","West Roxbury"])
.range(d3.schemeSet2);

// -1- Create a tooltip div that is hidden by default:
const tooltip = d3.select("#my_dataviz")
.append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "black")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("color", "white")

// -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
const showTooltip = function(event, d) {
tooltip
  .transition()
  .duration(200)
tooltip
  .style("opacity", 1)
  .html("neighborhood: " + d.neighborhood)
  .style("left", (event.x)/2 + "px")
  .style("top", (event.y)/2+30 + "px")
}
const moveTooltip = function(event, d) {
tooltip
  .style("left", (event.x)/2 + "px")
  .style("top", (event.y)/2+30 + "px")
}
const hideTooltip = function(event, d) {
tooltip
  .transition()
  .duration(200)
  .style("opacity", 0)
}

// Add dots
svg1.append('g')
.selectAll("dot")
.data(data)
.join("circle")
  .attr("class", "bubbles")
  .attr("cx", d => x(d.CountOfAlarm))
  .attr("cy", d => y(d.PropertyLoss))
  .attr("r", d => z(d.Population))
  .style("fill", d => myColor(d.neighborhood))
// -3- Trigger the functions
.on("mouseover", showTooltip )
.on("mousemove", moveTooltip )
.on("mouseleave", hideTooltip )

})


// ------------------------------------line chart--------------------------------------

// append the svg object to the body of the page
const svg = d3.select("#line_chart")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left},${margin.top})`);

//Read the data
d3.csv("./data/date-and-number.csv",
  function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value } 
    }). then( 
    function(data) {

    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    xAxis = svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);  
    yAxis = svg.append("g")
      .call(d3.axisLeft(y));

      // Add a clipPath: everything out of this area won't be drawn.
    const clip = svg.append("defs").append("svg:clipPath")
    .attr("id", "clip")
    .append("svg:rect")
    .attr("width", width )
    .attr("height", height )
    .attr("x", 0)
    .attr("y", 0);

// Add brushing
const brush = d3.brushX()                   // Add the brush feature using the d3.brush function
    .extent( [ [0,0], [width,height] ] )  // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
    .on("end", updateChart)               // Each time the brush selection changes, trigger the 'updateChart' function

// Create the line variable: where both the line and the brush take place
const line = svg.append('g')
  .attr("clip-path", "url(#clip)")

// Add the line
line.append("path")
  .datum(data)
  .attr("class", "line")  // I add the class line to be able to modify this line later on.
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 1.8)
  .attr("d", d3.line()
    .x(function(d) { return x(d.date) })
    .y(function(d) { return y(d.value) })
    )

// Add the brushing
line
  .append("g")
    .attr("class", "brush")
    .call(brush);

// A function that set idleTimeOut to null
let idleTimeout
function idled() { idleTimeout = null; }

// A function that update the chart for given boundaries
function updateChart(event,d) {

  // What are the selected boundaries?
  extent = event.selection

  // If no selection, back to initial coordinate. Otherwise, update X axis domain
  if(!extent){
    if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
    x.domain([ 4,8])
  }else{
    x.domain([ x.invert(extent[0]), x.invert(extent[1]) ])
    line.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
  }

  // Update axis and line position
  xAxis.transition().duration(1000).call(d3.axisBottom(x))
  line
      .select('.line')
      .transition()
      .duration(1000)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
      )
}

// If user double click, reinitialize the chart
svg.on("dblclick",function(){
  x.domain(d3.extent(data, function(d) { return d.date; }))
  xAxis.transition().call(d3.axisBottom(x))
  line
    .select('.line')
    .transition()
    .attr("d", d3.line()
      .x(function(d) { return x(d.date) })
      .y(function(d) { return y(d.value) })
  )
});

})

//----------------------------------time--------------------------------------------

const data1 = [
  {group: "Jan", value: 8092},
  {group: "Feb", value: 10844},
  {group: "Mar", value: 8230},
  {group: "Apr", value: 7770},
  {group: "May", value: 9304},
  {group: "Jun", value: 9244},
  {group: "Jul", value: 10268},
  {group: "Aug", value: 10498},
  {group: "Sep", value: 9844},
  {group: "Oct", value: 9984},
  {group: "Nov", value: 8976},
  {group: "Dec", value: 8858}
];

const data2 = [
  {group: "00:00-00:59", value: 3284},
  {group: "01:00-01:59", value: 3050},
  {group: "02:00-02:59", value: 2436},
  {group: "03:00-03:59", value: 2200},
  {group: "04:00-04:59", value: 2002},
  {group: "05:00-05:59", value: 2154},
  {group: "06:00-06:59", value: 2524},
  {group: "07:00-07:59", value: 3466},
  {group: "08:00-08:59", value: 4574},
  {group: "09:00-09:59", value: 5930},
  {group: "10:00-10:59", value: 6582},
  {group: "11:00-11:59", value: 7054},
  {group: "12:00-12:59", value: 6492},
  {group: "13:00-13:59", value: 6294},
  {group: "14:00-14:59", value: 6076},
  {group: "15:00-15:59", value: 5944},
  {group: "16:00-16:59", value: 6010},
  {group: "17:00-17:59", value: 6072},
  {group: "18:00-18:59", value: 5840},
  {group: "19:00-19:59", value: 5820},
  {group: "20:00-20:59", value: 5070},
  {group: "21:00-21:59", value: 4780},
  {group: "22:00-22:59", value: 4346},
  {group: "23:00-23:59", value: 3912}
];

// append the svg object to the body of the page
const svg2 = d3.select("#time")
 .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
 .append("g")
   .attr("transform", `translate(${margin.left},${margin.top})`);

// Initialize the X axis
const x = d3.scaleBand()
 .range([ 0, width ])
 .padding(0.2);
const xAxis2 = svg2.append("g")
 .attr("transform", `translate(0,${height})`)

// Initialize the Y axis
const y = d3.scaleLinear()
 .range([ height, 0]);
const yAxis2 = svg2.append("g")
 .attr("class", "myYaxis")


// A function that create / update the plot for a given variable:
function update(data) {

 // Update the X axis
 x.domain(data.map(d => d.group))
 xAxis2.call(d3.axisBottom(x))

 // Update the Y axis
 y.domain([0, d3.max(data, d => d.value) ]);
 yAxis2.transition().duration(1000).call(d3.axisLeft(y));

 // Create the u variable
 var u = svg2.selectAll("rect")
   .data(data)

 u
   .join("rect") // Add a new rect for each new elements
   .transition()
   .duration(1000)
     .attr("x", d => x(d.group))
     .attr("y", d => y(d.value))
     .attr("width", x.bandwidth())
     .attr("height", d => height - y(d.value))
     .attr("fill", "#69b3a2")
}

// Initialize the plot with the first dataset
update(data1)