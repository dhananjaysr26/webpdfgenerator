var xValues = ["AGRICULTURE", "ARTS", "COMMERCE", "FINE ARTS", "HEALTH/LIFE SCIENCES","TECHNICAL","UNIFORMED SERVICES"];
var yValues = [30, 60, 80, 5, 60,95,50];
var barColors = ["green", "pink","blue","voilet","orange","DarkSlateBlue","SeaGreen"];
// for aptitude bar
var xV = ["VERBAL APTITUDE","LOGICAL APTITUDE","SPATIAL APTITUDE","NUMERICAL APTITUDE"];
var yV = [01, 25, 01, 25,100];
var barcolors = ["red", "green","yellow","blue"];

new Chart("interest", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    }
  }
});
new Chart("aptitude", {
    type: "bar",
    data: {
      labels: xV,
      datasets: [{
        backgroundColor: barcolors,
        data: yV
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
      }
    }
  });

//   Pdf Download
function Download(){
    window.alert("Thanks for Download!")
}