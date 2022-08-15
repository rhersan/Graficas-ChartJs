import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent{

  // Grafica 1
  proveedoresLabels1: string[] = ['2021', '2022','2023','2024','2025'];
  proveedoresData1: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];

  // Gráfica 2  
  proveedoresLabels2: string[] = ['2021', '2022','2023','2024','2025'];
  proveedoresData2: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];
  
  


}
