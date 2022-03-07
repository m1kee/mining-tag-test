import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IndicatorsService } from './indicators.service';

describe('IndicatorsService', () => {
  let service: IndicatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IndicatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be USD measurement unit text', () => {
    expect(service.getMeasurementUnitText('Dólar')).toBe('USD');
  })

  it('should be $ measurement unit text', () => {
    expect(service.getMeasurementUnitText('Pesos')).toBe('$');
  })

  it('should be % measurement unit text', () => {
    expect(service.getMeasurementUnitText('Porcentaje')).toBe('%');
  })
});
