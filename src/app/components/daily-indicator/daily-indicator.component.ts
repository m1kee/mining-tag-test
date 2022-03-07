import { Component, Input, OnInit } from '@angular/core';
import { IndicatorHistoryComponent } from '@components/indicator-history/indicator-history.component';
import { IIndicator } from '@domain/indicator';
import { faHistory, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IndicatorsService } from '@services/indicators.service';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-daily-indicator',
  templateUrl: './daily-indicator.component.html',
  styleUrls: ['./daily-indicator.component.scss']
})
export class DailyIndicatorComponent implements OnInit {
  isLoading: boolean = true;
  faHistory: IconDefinition = faHistory;

  @Input() indicator?: IIndicator;
  indicatorHistory?: IIndicator;

  constructor(private modalService: BsModalService, private indicatorService: IndicatorsService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getIndicator();
  }

  getIndicator() {
    this.isLoading = true;
    if (this.indicator){
      this.indicatorService.getByCode(this.indicator.codigo).subscribe({
        next: (response: IIndicator) => {
          this.indicatorHistory = response;
        },
        error: (e) => this.toastrService.error('Ocurrió un error al obtener el indicador: ' + this.indicator?.nombre),
        complete: () => setTimeout(() => this.isLoading = false, 250)
      });
    }
  };

  showLastMonth(): void {
    const initialState: ModalOptions = {
      initialState: {
        code: this.indicator?.codigo,
        name: this.indicator?.nombre,
        indicatorHistory: this.indicatorHistory
      },
      class: 'modal-lg'
    };
    this.modalService.show(IndicatorHistoryComponent, initialState);
  };

  getMeasurementUnitText(measurementUnit: string): string {
    return this.indicatorService.getMeasurementUnitText(measurementUnit);
  };
}
