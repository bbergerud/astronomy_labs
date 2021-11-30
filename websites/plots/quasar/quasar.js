const w = $('body').width();
const h = 500;
let svg = d3.select('#quasarSpectrum');

svg.attr("width", w);
svg.attr("height", h);


let margin1 = {top:  20, right: 20, bottom: 110, left: 40};
let margin2 = {top: 430, right: 20, bottom:  30, left: 40};
let width   = +svg.attr('width')  - margin1.left - margin1.right;
let height1 = +svg.attr('height') - margin1.top  - margin1.bottom;
let height2 = +svg.attr('height') - margin2.top  - margin2.bottom;

let xScale1 = d3.scaleLinear().range([0, width]),
    xScale2 = d3.scaleLinear().range(xScale1.range()),
    yScale = d3.scaleLinear().range([height1, 0]),
    yScale2 = d3.scaleLinear().range([height2, 0]);

let xAxis1 = d3.axisBottom(xScale1);
    xAxis2 = d3.axisBottom(xScale2);
    yAxis  = d3.axisLeft(yScale);

let brush = d3.brushX()
    .extent([[0,0], [width,height2]])
    .on('brush end', brushed);

let zoom = d3.zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([[0,0], [width, height1]])
    .extent([[0,0], [width,height1]])
    .on('zoom', zoomed);

let line1 = d3.line()
    .x(function(d){return xScale1(+d.wavelength);})
    .y(function(d){return yScale(+d.flux);})
    .curve(d3.curveMonotoneX);

let line2 = d3.line()
    .x(function(d){return xScale2(+d.wavelength);})
    .y(function(d){return yScale2(+d.flux);})
    .curve(d3.curveMonotoneX);

let clip = svg.append('defs')
    .append('svg:clipPath')
    .attr('id', 'clip')
    .append('svg:rect')
    .attr('width', width)
    .attr('height', height1)
    .attr('x', 0)
    .attr('y', 0);

let lineChart = svg.append('g')
    .attr('class', 'focus')
    .attr('transform', `translate(${margin1.left}, ${margin1.top})`)
    .attr('clip-path', 'url(#clip)');

let focus = svg.append('g')
    .attr('class', 'focus')
    .attr('transform', `translate(${margin1.left}, ${margin1.top})`);

let context = svg.append('g')
    .attr('class', 'context')
    .attr('transform', `translate(${margin2.left}, ${margin2.top})`);



// Needs to be cleaned up? When switching to a different quasar, when changing
// the zoom factor it returns to the center. The s positioning seems off
function brushed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return;

  let s = d3.event.selection || xScale2.range();

  xScale1.domain(s.map(xScale2.invert, xScale2));

  lineChart.select('.line').attr('d', line1)
  focus.select('.axis--x').call(xAxis1);
  svg.select('.zoom')
    .call(
      zoom.transform,
      d3.zoomIdentity
        .scale(width / (s[1] - s[0]))
        .translate(-s[0], 0)
    );
}

function zoomed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') return;
  let t = d3.event.transform;
  xScale1.domain(t.rescaleX(xScale2).domain());
  lineChart.select('.line').attr('d', line1);
  focus.select('.axis--x').call(xAxis1);
  context.select('.brush').call(brush.move, xScale1.range().map(t.invertX, t));
}



function emissionLines() {
  var lines = [656.4, 486.1, 434.0, 410.2, 397.0];
  var color = ["red", "deepskyblue", "blue", "blueviolet", "purple"];
  var label = ["H\u03B1", "H\u03B2", "H\u03B3", "H\u03B4", "H\u03B5"];

  svg.selectAll(".emission").remove()
  z = +d3.select("#redshift").node().value;


  lines.forEach(function(d,i) {
    var wave = d * (1 + z);

    var g = context.append("line")
        .attr("class", "emission")
        .attr("x1", xScale2(wave))
        .attr("x2", xScale2(wave))
        .attr("y1", yScale2(yScale.domain()[1]))
        .attr("y2", yScale2(yScale.domain()[0]))
        .attr("stroke", color[i])
        .attr("stroke-width", 1);

    var t = context.append("text")
      .attr("y", height2/2)
      .attr("x", xScale2(wave+5))
      .attr("text-anchor", "middle")
      .attr("class", "emission")
      .text(label[i]);

  })
}


function quasarSpectrumBrush(data){
  svg.selectAll('path').remove();
  svg.selectAll('.axis').remove();
  svg.selectAll('.brush').remove();

  xScale1.domain(d3.extent(data, function(d){return +d.wavelength;}));
  xScale2.domain(xScale1.domain());
  yScale.domain([0, d3.max(data, function(d){return +d.flux;})]);
  yScale2.domain(yScale.domain());

  focus.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', `translate(0,${height1})`)
    .call(xAxis1);

  focus.append('g')
    .attr('class', 'axis axis--y')
    .call(yAxis);

  lineChart.append('path')
    .datum(data)
    .attr('class', 'line')
    .attr('d', line1);

  context.append('path')
    .datum(data)
    .attr('class', 'line')
    .attr('d', line2);

  context.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', `translate(0,${height2})`)
    .call(xAxis2);

  context.append('g')
    .attr('class', 'brush')
    .call(brush)
    .call(brush.move, xScale1.range());

  svg.append('rect')
    .attr('class', 'zoom')
    .attr('width', width)
    .attr('height', height1)
    .attr('transform', `translate(${margin1.left}, ${margin1.top})`)
    .call(zoom);

  emissionLines();
}



function quasarSpectrum(svg_selector, data) {
  let svg    = d3.select(svg_selector);
  let margin = {'top': 50, 'right': 50, 'bottom': 50, 'left': 50};
  let width  = +svg.attr('width');
  let height = +svg.attr('height');

  datum = data;

  xScale = d3.scaleLinear()
    .domain([
      d3.min(data, function(d){return +d.wavelength;}),
      d3.max(data, function(d){return +d.wavelength;})
    ])
    .range([margin.left, width-margin.right]);

  yScale = d3.scaleLinear()
    .domain([
      d3.min(data, function(d){return +d.flux;}),
      d3.max(data, function(d){return +d.flux;})
    ])
    .range([height - margin.bottom, margin.top]);

  let line = d3.line()
    .x(function(d){return xScale(+d.wavelength);})
    .y(function(d){return yScale(+d.flux);})
    .curve(d3.curveMonotoneX);

  svg.append('g')
    .attr('class', 'x axis quasar')
    .attr('transform', `translate(0, ${height-margin.bottom})`)
    .call(d3.axisBottom(xScale));

  svg.append('g')
    .attr('class', 'y axis quasar')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale));

  svg.append('path')
    .datum(data)
    .attr('class', 'line quasar')
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', '#ffab00')
    .attr('stroke-width', 1);
}
