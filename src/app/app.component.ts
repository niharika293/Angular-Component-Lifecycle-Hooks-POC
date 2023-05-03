import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  color : any = 'blue';
  constructor(){
    // console.log("inside app component constructor, called before ngOnInit");
  }

  ngOnInit() {
    // console.log("Inside app- component ngOnInit");
  }

  ngOnChanges(){
    // console.log("Inside app- component ngOnChanges");
  }

  changeColor(color : any){
   this.color = color;
  }

  title = 'angular-components-lifecyele-poc';
}
