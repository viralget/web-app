
const PieChart  = ({ chartData }) => {

const dataPie = {
        labels: chartData.dataLabels,
        datasets: [
          {
            label: chartData.chartName,
            data: chartData.data,
            backgroundColor: chartData.colors,
            hoverOffset: 4,
          },
        ],
      };
    
      const configPie = {
        type: "pie",
        data: dataPie,
        options: {},
      };
    
    new Chart(document.getElementById("chartPie"), configPie);


    return(
            <div class="overflow-hidden">
                <canvas class="p-1  border rounded-md " id="chartPie"></canvas>
            </div>
    )
}


export default PieChart;