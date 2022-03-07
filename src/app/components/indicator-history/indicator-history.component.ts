import { Component, OnInit } from '@angular/core';
import { IDateValue, IIndicator } from '@domain/indicator';
import { IndicatorsService } from '@services/indicators.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faAngleDoubleDown, faAngleDoubleUp, faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-indicator-history',
  templateUrl: './indicator-history.component.html',
  styleUrls: ['./indicator-history.component.scss']
})
export class IndicatorHistoryComponent implements OnInit {
  code: string = '';
  name: string = '';
  indicatorHistory?: IIndicator;
  faAngleDoubleUp: IconDefinition = faAngleDoubleUp;
  faAngleDoubleDown: IconDefinition = faAngleDoubleDown;
  faMinus: IconDefinition = faMinus;

  constructor(private modalRef: BsModalRef,
    private indicatorService: IndicatorsService
  ) { }

  ngOnInit(): void {
    this.processSeries();
  }

  getIcon(item: IDateValue): IconDefinition {
    if (item && item.variacion) {
      return (item.variacion > 0) ? this.faAngleDoubleUp : this.faAngleDoubleDown;
    }
    else {
      return this.faMinus;
    }
  }

  // process entire series to calculate variation instead of doing every time 
  processSeries(): void {
    if (this.indicatorHistory && this.indicatorHistory.serie && this.indicatorHistory.serie.length > 0)
    {
      for (let index = 0; index < this.indicatorHistory.serie.length; index++) {
        const element = this.indicatorHistory.serie[index];
        element.variacion = this.getVariationValue(element.valor, index);
      }
    }
  };

  getMeasurementUnitText(measurementUnit: string): string {
    return this.indicatorService.getMeasurementUnitText(measurementUnit);
  };

  getVariationValue(value: number, index: number): number {
    return this.indicatorService.getVariationValue(value, index, this.indicatorHistory);
  }

  close(): void {
    this.modalRef.hide();
  };
}
