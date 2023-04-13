import { Component, OnInit, Renderer2, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-disable-tester',
  templateUrl: './disable-tester.component.html',
  styleUrls: ['./disable-tester.component.scss']
})
export class DisableTesterComponent implements OnInit {

  isAuthorised: boolean = false;

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
  }

  /* substituído quando regras são aplicadas no app.component */

 /*  authorised = (templateRef?: TemplateRef<any>) => {
    this.renderer2.removeAttribute(templateRef?.elementRef.nativeElement.previousSibling,'disabled');
  }

  unauthorised = (templateRef?: TemplateRef<any>) => {
    this.renderer2.setAttribute(templateRef?.elementRef.nativeElement.previousSibling,'disabled', 'true');
  }*/

}
