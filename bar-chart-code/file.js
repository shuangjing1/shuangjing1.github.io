var ctx = document.getElementById('myChart').getContext('2d');


var data = {
    labels: ["Mediation", "Comparison Group"],
    datasets: [{
        data: [19, 28],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
    }]
};

var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
