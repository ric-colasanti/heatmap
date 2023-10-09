console.log("main");

// set the dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 300, left: 300 },
    width = 950 - margin.left - margin.right,
    height = 3300 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Labels of row and columns
var draw = function (data) {
    console.log(data);
    const x = d3.scaleBand()
        .range([0, width])
        .domain(scopus)
        .padding(0.1);
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)

        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.25em")
        .attr("transform", "rotate(-90)");


    // Build X scales and axis:
    const y = d3.scaleBand()
        .range([height, 0])
        .domain(webOfScience)
        .padding(0.1);
    svg.append("g")
        .attr("transform", "translate(0,30")
        .call(d3.axisLeft(y))

    // Build color scale
    const myColor = d3.scaleLinear()
        .range(["white", "darkblue"])
        .domain([0, 350])

    // create a tooltip


    //Read the data
    //d3.csv("data/heat.csv").then(function (data) {

    svg.selectAll("rect")
        .data(data)//, function (d) { return d. + ':' + d.webOfScience; })
        .join()
        .append("rect")
        .attr("x", function (d) { return x(d[0]) })
        .attr("y", function (d) { return y(d[1]) })
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function (d) {return myColor(d[2]) })
        .update()
        .attr("x", function (d) { return x(d[0]) })
        .attr("y", function (d) { return y(d[1]) })
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        
    //})
}