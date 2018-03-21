import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart = undefined;// = [];
  chart2 = undefined;
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this.createChart()
    this.createChart2()
  }
  createChart2():void {
    var ctx = document.getElementById("canvas2");
    this._weather.dailyForecast()
      .subscribe(res => {
        let temp_max =  Object.values(res).map(res => res.id);
        let temp_min = Object.values(res).map(res => res.id*3);
       // let alldates = res['list'].map(res => res.wind.deg)

        let weatherDates = []
        // alldates.forEach((res) => {
        //     let jsdate = new Date(res * 1000)
        //     weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        // })
        // weatherDates =["a","b"]
        // temp_max =[99,333]
        // temp_min =[50,6]
        // console.log(weatherDates)
        this.chart2 = new Chart(ctx, {
          type: 'line',
          data: {
            labels: temp_max,
            datasets: [
              {
                data: temp_max,
                borderColor: "#3cba9f",
                fill: false
              }
              ,
              {
                data: temp_min,
                borderColor: "#ffcc00",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      })
  }

  createChart():void {
    var ctx = document.getElementById("canvas");

    //let htmlRef = this.elementRef.nativeElement.querySelector(`#yourCavasId`);
    this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

}
