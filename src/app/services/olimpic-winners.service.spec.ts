import { TestBed } from '@angular/core/testing';

import { OlimpicWinnersService } from './olimpic-winners.service';

describe('OlimpicWinnersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OlimpicWinnersService = TestBed.get(OlimpicWinnersService);
    expect(service).toBeTruthy();
  });
});
