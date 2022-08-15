import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {

    // Doughnut
    @Input() barChartLabels: Label[] = [ 
      // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Otros' 
    ];
  
    @Input() barChartData: ChartDataSets[] = [
      /*{ data: [ 350, 450, 100,150 ] },
        { data: [ 50, 150, 120 ] },
        { data: [ 250, 130, 70 ] }*/
    ];
    public doughnutChartType: ChartType = 'doughnut';
  
    @Input() barColors: Color[] = [
      // {
      //   backgroundColor:[
      //     '#D1F72D',
      //     '#6C36EB',
      //     '#30D6C5',
      //     '#D43726',
      //   ]
      // }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
