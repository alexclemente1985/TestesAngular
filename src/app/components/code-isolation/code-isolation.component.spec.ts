import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPermissionsAllowStubDirective, NgxPermissionsAllowStubModule } from 'ngx-permissions';

import { CodeIsolationComponent } from './code-isolation.component';

describe('CodeIsolationComponent', () => {
  let component: CodeIsolationComponent;
  let fixture: ComponentFixture<CodeIsolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPermissionsAllowStubModule],
      declarations: [ CodeIsolationComponent, NgxPermissionsAllowStubDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeIsolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heading "You can do it"' ,() => {
    const element = fixture.debugElement.nativeElement.querySelector('h1');
    expect(element).toBeTruthy();
    expect(element.innerHTML).toBe('You can do it')
  })
});
