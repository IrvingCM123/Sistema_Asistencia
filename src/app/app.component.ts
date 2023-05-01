import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response$: any ;
  datos: any;
  responseID$: any ;
  title = 'Sistema';

  constructor (){};
  ngOnInit(): void {}
}
