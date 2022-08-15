import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [
    //'2022', '2023', '2024', '2025', '2026', '2027'
  ];
  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#F7C659', hoverBackgroundColor: '#F7C659' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#D4594C', hoverBackgroundColor: '#D4594C' },
    // { data: [15, 55, 21, 13, 54, 18, 60], label: 'Series C', backgroundColor: '#4CA3D4', hoverBackgroundColor: '#4CA3D4' },
  ] ;
  

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  constructor() { 
  }

  ngOnInit(): void {
    if( this.horizontal ){
      this.barChartType = 'horizontalBar'
    }
    
  }

}
