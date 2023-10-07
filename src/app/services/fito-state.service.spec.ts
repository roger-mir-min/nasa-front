/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FitoStateService } from './fito-state.service';

describe('Service: FitoState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FitoStateService]
    });
  });

  it('should ...', inject([FitoStateService], (service: FitoStateService) => {
    expect(service).toBeTruthy();
  }));
});
