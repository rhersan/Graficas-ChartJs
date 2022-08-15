import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartData } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { GraficasService, IData } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  
  // Doughnut
  doughnutChartLabels: Label[] = [];
 
  doughnutChartData: ChartDataSets[] = [];

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
  
  constructor(private serviceGrafica: GraficasService) { }

  ngOnInit(): void {
   this.serviceGrafica.getUsuariosRd().subscribe( (data) => {
      // const labes = Object.keys(data);
      // const values = Object.values(data);
      
      // this.barChartLabels = labes;
      // this.doughnutChartData = [
      //   {data: values}
      // ]
      this.serviceGrafica.getUsuariosData()
        .subscribe( ({labels,values}) => {

          this.doughnutChartLabels = labels;
          this.doughnutChartData = [
            {data: values}
          ];

        });

   });
  }

}
