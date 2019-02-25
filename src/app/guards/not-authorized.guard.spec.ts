import { TestBed, async, inject } from '@angular/core/testing';

import { NotAuthorizedGuard } from './not-authorized.guard';

describe('NotAuthorizedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotAuthorizedGuard]
    });
  });

  it('should ...', inject([NotAuthorizedGuard], (guard: NotAuthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
