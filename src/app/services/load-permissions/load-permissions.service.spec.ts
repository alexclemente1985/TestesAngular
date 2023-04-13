import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LoadPermissionsService } from './load-permissions.service';

describe('LoadPermissionsService', () => {
  let service: LoadPermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LoadPermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
