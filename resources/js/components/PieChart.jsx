import { useEffect } from "react";
const PieChart = ({ chartData }) => {



  const dataPie = {
    labels: chartData?.dataLabels,
    datasets: [
      {
        label: chartData?.chartName,
        data: chartData?.data,
        backgroundColor: chartData?.colors,
        hoverOffset: 4,
      },
    ],
  };

  const configPie = {
    type: "pie",
    data: dataPie,
    options: {},
  };


  useEffect(() => {
    new Chart(document.getElementById("chartPie"), configPie);

  }, [])
  // console.log("chartData:",chartData)





  return (
    <div className="overflow-hidden">
      <canvas className="p-1  border rounded-md " id="chartPie"></canvas>
    </div>
  )
}


export default PieChart;