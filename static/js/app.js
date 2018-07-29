// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("table");

// for(i = 0; i < tableData.length; i++){
//     // Use d3 to create a bootstrap striped table
//     table.attr("class", "table table-striped");

//     // Use D3 to select the table body
//     var tbody = d3.select("tbody");

//     // Append one table row `tr` to the table body
//     var row = tbody.append("tr");

//     // Append data

    
//     row.append("td").text(tableData[i].datetime);
//     row.append("td").text(tableData[i].city);
//     row.append("td").text(tableData[i].state);
//     row.append("td").text(tableData[i].country);
//     row.append("td").text(tableData[i].shape);
//     row.append("td").text(tableData[i].durationMinutes);
//     row.append("td").text(tableData[i].comments);
// }
renderTable(tableData);
function renderTable(dataRender){
    table = d3.select("#table-area");
    var tbody = table.select("tbody");
    d3.select('tbody').html('')
    console.log(dataRender);
    console.log(dataRender.length);
    for(var i=0; i<dataRender.length; i++){
        tr = tbody.append("tr");
        tr.append("td").text(dataRender[i].datetime);
        tr.append("td").text(dataRender[i].city);
        tr.append("td").text(dataRender[i].state);
        tr.append("td").text(dataRender[i].country);
        tr.append("td").text(dataRender[i].shape);
        tr.append("td").text(dataRender[i].durationMinutes);
        tr.append("td").text(dataRender[i].comments);
    }

}

var filter = d3.select("#filter-btn");
// Use D3 `.on` to attach a click handler for the filter
filter.on("click", function() {
    d3.event.preventDefault();
    var datePicked = d3.select("#datetime").node().value;
    var cityPicked = d3.select("#city").node().value;
    var statePicked = d3.select("#state").node().value;
    var countryPicked = d3.select("#country").node().value;
    var shapePicked = d3.select("#shape").node().value;
    var finalData = [];
    if(datePicked){
        finalData =  dateChosen(datePicked);
    }
    if(cityPicked){
        finalData = cityChosen(finalData, cityPicked);
    }
    if(statePicked){
        finalData =  stateChosen(finalData, statePicked);
    }
    if(countryPicked){
        finalData = countryChosen(finalData, countryPicked);
    }
    if(shapePicked){
        finalData = shapeChosen(finalData, shapePicked);
    }
    renderTable(finalData);
});

function dateChosen(datePicked){
    console.log(datePicked);
    // Picking up Date Time
    // filter() uses the custom function as its argument
    return tableData.filter(element => element.datetime === datePicked);
}
function cityChosen(tableData, cityPicked){
    console.log(cityPicked);
    // Picking up Date Time
    // filter() uses the custom function as its argument
    return tableData.filter(element => element.city === cityPicked.toString().toLowerCase());
}
function stateChosen(tableData, statePicked){
    console.log(statePicked);
    // Picking up Date Time
    // filter() uses the custom function as its argument
    return tableData.filter(element => element.state === statePicked.toString().toLowerCase());
}
function countryChosen(tableData, countryPicked){
    console.log(countryPicked);
    // Picking up Date Time
    // filter() uses the custom function as its argument
    return tableData.filter(element => element.country === countryPicked.toString().toLowerCase());    
}
function shapeChosen(tableData, shapePicked){
    console.log(shapePicked);
    // Picking up Date Time
    // filter() uses the custom function as its argument
    return tableData.filter(element => element.shape === shapePicked.toString().toLowerCase());
}


