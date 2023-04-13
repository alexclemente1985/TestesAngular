import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPermissionsAllowStubModule, NgxPermissionsAllowStubDirective } from 'ngx-permissions';

import { DisableTesterComponent } from './disable-tester.component';

describe('DisableTesterComponent', () => {
  let component: DisableTesterComponent;
  let fixture: ComponentFixture<DisableTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPermissionsAllowStubModule],
      declarations: [ DisableTesterComponent, NgxPermissionsAllowStubDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
