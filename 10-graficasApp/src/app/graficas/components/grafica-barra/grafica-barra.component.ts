import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() inputLabels!: any[] | unknown[] | undefined;
  @Input() inputDatasets!: ChartDataset<any, any>[];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#17E005', hoverBackgroundColor: 'red' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#FF219A', hoverBackgroundColor: 'red' },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
