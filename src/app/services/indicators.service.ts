import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IGetAllResponse } from '@domain/get-all-response';
import { IIndicator } from '@domain/indicator';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {
  private env = environment;

  constructor(private httpClient: HttpClient) { }

  // get all indicators
  getAll(): Observable<IGetAllResponse> {
    return this.httpClient.get<IGetAllResponse>(this.env.indicatorsAPIURL);
  };

  // get indicator by code
  getByCode(code: string): Observable<IIndicator> {
    return this.httpClient.get<IIndicator>(`${this.env.indicatorsAPIURL}/${code}`);
  };

  getMeasurementUnitText(measurementUnit: string): string {
    let text: string = '';
    switch (measurementUnit) {
      case 'Pesos':
        text = '$';
        break;
      case 'Dólar':
        text = 'USD'
        break;
      case 'Porcentaje':
        text = '%';
        break;
    }
    return text;
  };

  getVariationValue(value: number, index: number, indicator?: IIndicator): number {
    let result: number = 0;
    let lastValue = value; // assign the same number as last value to get no variation at first

    if (indicator && indicator.serie && indicator.serie[index + 1])
      lastValue = indicator.serie[index + 1].valor;

    result = (value - lastValue) / lastValue;

    return result;
  };
}
