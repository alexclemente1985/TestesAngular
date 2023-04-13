import { NgxPermissionsAllowStubModule, NgxPermissionsAllowStubDirective, NgxPermissionsModule } from 'ngx-permissions';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxPermissionsModule.forRoot(), NgxPermissionsAllowStubModule],
      declarations: [NgxPermissionsAllowStubDirective]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
