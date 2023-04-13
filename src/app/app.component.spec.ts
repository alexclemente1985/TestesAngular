import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgxPermissionsAllowStubModule, NgxPermissionsAllowStubDirective, NgxPermissionsModule } from 'ngx-permissions';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxPermissionsModule.forRoot(), NgxPermissionsAllowStubModule, RouterModule.forRoot([])],
      declarations: [
        AppComponent,
        NgxPermissionsAllowStubDirective
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testePermissions'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testePermissions');
  });

 /*  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testePermissions app is running!');
  }); */
});
