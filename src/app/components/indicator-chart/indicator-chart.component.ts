import { Component, Input, OnInit } from '@angular/core';
import { IIndicator } from '@domain/indicator';
import { Chart } from 'angular-highcharts';
import { Point } from 'highcharts';
import { Positioning } from 'ngx-bootstrap/positioning';

@Component({
  selector: 'app-indicator-chart',
  templateUrl: './indicator-chart.component.html',
  styleUrls: ['./indicator-chart.component.scss']
})
export class IndicatorChartComponent implements OnInit {
  chart: Chart = new Chart();
  @Input() indicator?: IIndicator;

  constructor() { }

  ngOnInit(): void {
    let serie = this.indicator?.serie?.map((e) => ({ ...e })) ?? [];
    serie = serie.reverse();

    this.chart = new Chart({
      chart: {
        type: 'line',
      },
      title: { text: '' },
      xAxis: {
        categories: serie.map(e => new Date(e.fecha).toLocaleDateString())
      },
      yAxis: { title: { text: `Valor en ${this.indicator?.unidad_medida}`} }
    });

    if (this.indicator && this.indicator.serie && this.indicator.serie.length > 0) {
        this.chart.addSeries({
          name: '',
          type: 'line',
          data: serie.map(e => e.valor)
        }, true, true);
    }
    
  }

}
