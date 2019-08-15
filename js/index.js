/*
I  genuinly feel bad for anyone reading this code. 
It is messy and I am fully aware about it.
Did not want to spend hours on making the code look good just for a one time use.

Although it could technically be re-used,
For re-use just change the spreadsheetID to the new one (docs.google.com/spreadsheets) 
and make it public, it will then query that sheet instead, 
just make sure you follow the formatting which is:

    A       B
1   Klass   Poäng
2   Name1   Value1 
3   Name2   Value2 
4   Name3   Value3 
...

Currently limited to 40 entries due to my lazy programming.
You can easily expand it onto larger amounts by reading the docs of Chart.js
*/
var spreadsheetId = "1PPC89Ls_82E8wLzQ3fLjqtgVlM3oAdMbJnDI3RToLQA",
    url = "https://spreadsheets.google.com/feeds/list/" +
        spreadsheetId +
        "/od6/public/basic?alt=json";

const parsedData = [];
$.get({
    url: url,
    success: function (response) {
        var data = response.feed.entry,
            len = data.length,
            i = 0

        for (i = 0; i < len; i++) {
            parsedData.push({
                label: data[i].title.$t,
                value: data[i].content.$t.replace('poäng: ', '')
            });
        }

        createGraph();
    }
});

function createGraph() {
    const inputLabels = getLabels(parsedData);
    const inputValues = getValues(parsedData);

    var ctx = document.getElementById('content--graph').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: inputLabels,
            datasets: [{
                data: inputValues,
                backgroundColor: [
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(253, 177, 45, 0.2)',
                    'rgba(0, 0, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 177, 45, 1)',
                    'rgba(0, 0, 0, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    color: [
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)'
                    ],
                    align: 'center'
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: false,
            responsive: false
        }
    });
}

function getValues(obj) {
    const temp = [];
    for (let i = 0; i < obj.length; i++) {
        temp.push(obj[i].value);
    }
    return temp;
}
function getLabels(obj) {
    const temp = [];
    for (let i = 0; i < obj.length; i++) {
        temp.push(obj[i].label);
    }
    return temp;
}