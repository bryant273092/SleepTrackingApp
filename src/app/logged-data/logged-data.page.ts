import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Chart } from 'chart.js';
import { blue } from 'color-name';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-logged-data',
  templateUrl: './logged-data.page.html',
  styleUrls: ['./logged-data.page.scss'],
})
export class LoggedDataPage implements OnInit {
  @ViewChild('sleepCanvas', {static: true}) sleepCanvas: ElementRef;
  @ViewChild('expCanvas', {static: true}) expCanvas: ElementRef;
  keys;
  private sleepChart: Chart;
  private expChart: Chart;
  constructor(
    public storage: Storage,
  ) { }

  ngOnInit() {
    //get keys
    this.storage.get('overnight').then((data) => {
      data = JSON.parse(data)
      console.log(data)
      var dates = Object.keys(data).map(function(key){
        var g = new Date (data[key].loggedAt)
        return g.toLocaleDateString() +'   ' + g.toLocaleTimeString()

      })

      var values = Object.keys(data).map(function(key){
        var startTime = new Date (data[key].sleepStart)
        var endTime = new Date (data[key].sleepEnd)
        var difference = endTime.getHours() - startTime.getHours()
        var minuteDifference = endTime.getMinutes()-startTime.getMinutes()
        return (difference * 60 )+ minuteDifference
      })

      this.sleepChart = new Chart(this.sleepCanvas.nativeElement, {
        type: "bar",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Minutes of Sleep",
              data: values,
              backgroundColor: '#ff1149'
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      
    })
    this.storage.get('experience').then((data) => {
      data = JSON.parse(data)
      var expDates = Object.keys(data).map(function(key){
        var g = new Date (data[key].loggedAt)
        return g.toLocaleDateString() +'  ' + g.toLocaleTimeString()
  
      })
      var expValues = Object.keys(data).map(function(key){
        return data[key].loggedValue
  
      })
      this.expChart = new Chart(this.expCanvas.nativeElement, {
        type: "bar",
        data: {
          labels: expDates,
          datasets: [
            {
              label: "Rated Experience (1-7)",
              data: expValues,
              backgroundColor: '#ff9984',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });

    })
      
  }
}
