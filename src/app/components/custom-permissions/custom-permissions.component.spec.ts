import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPermissionsComponent } from './custom-permissions.component';

describe('CustomPermissionsComponent', () => {
  let component: CustomPermissionsComponent;
  let fixture: ComponentFixture<CustomPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
