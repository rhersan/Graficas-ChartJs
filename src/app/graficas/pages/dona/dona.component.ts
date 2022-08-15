import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  // Doughnut
  barChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Otros' ];

 
  barChartData: ChartDataSets[] = [
    { data: [ 350, 450, 100,150 ] }
  ];

  colors: Color[] = [
    {
      backgroundColor:[
        '#D1F72D',
        '#6C36EB',
        '#30D6C5',
        '#D43726',
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
