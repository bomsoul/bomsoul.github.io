var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Python', 'C', 'C++', 'Java','HTML','CSS','JavaScript','PHP'],
        datasets: [{
            label: 'My Aptitude Language',
            borderColor: 'rgb(255, 99, 132)',
            data: [3, 5, 2, 5, 4, 4, 2, 4]
        }]
    },

    // Configuration options go here
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 5,
                min: 0,
                stepSize: 1
            }
        }
    }
});