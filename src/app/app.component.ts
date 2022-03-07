import { Component, OnInit } from '@angular/core';
import { IGetAllResponse } from '@domain/get-all-response';
import { IIndicator } from '@domain/indicator';
import { IndicatorsService } from '@services/indicators.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dailyIndicators: IIndicator[] = [];

  constructor(private indicatorService: IndicatorsService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.dailyIndicators = [];
    this.indicatorService.getAll().subscribe({
      next: (response: IGetAllResponse) => {
        this.dailyIndicators.push(response.uf);
        this.dailyIndicators.push(response.ivp);
        this.dailyIndicators.push(response.dolar);
        this.dailyIndicators.push(response.dolar_intercambio);
        this.dailyIndicators.push(response.euro);
        this.dailyIndicators.push(response.ipc);
        this.dailyIndicators.push(response.utm);
        this.dailyIndicators.push(response.imacec);
        this.dailyIndicators.push(response.tpm);
        this.dailyIndicators.push(response.libra_cobre);
        this.dailyIndicators.push(response.tasa_desempleo);
        this.dailyIndicators.push(response.bitcoin);
      },
      error: (e) => this.toastrService.error('Ocurrió un problema al obtener los indicadores.')
    });
  };
}
