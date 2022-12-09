import { TestBed } from '@angular/core/testing';

import { TvShowService } from './tvshow.service';

describe('TvShowService', () => {
  let service: TvShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
