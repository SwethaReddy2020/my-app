import { TestBed } from '@angular/core/testing';

import { UsernotifiyService } from './usernotifiy.service';

describe('UsernotifiyService', () => {
  let service: UsernotifiyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernotifiyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
