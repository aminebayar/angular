import { TestBed } from '@angular/core/testing';

import { TvShowGuard } from './tvshow.guard';

describe('TvShowGuard', () => {
  let guard: TvShowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TvShowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
