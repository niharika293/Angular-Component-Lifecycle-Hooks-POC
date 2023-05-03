import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  color : any = 'blue';
  constructor(){
    console.log("inside parent's constructor, called before ngOnInit");
  }

  ngOnInit() {
    console.log("Inside parent's ngOnInit");
  }

  ngOnChanges(){
    console.log("Inside parent's ngOnChanges");
  }

  changeColor(color : any){
   this.color = color;
  }

  ngDoCheck(){
    console.log("Inside parent's ngDoCheck");
    // Why getting called multiple times. 
  }

  ngAfterContentInit() {
    console.log("Inside parent's ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Inside parent's ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log('Inside parent"s AfterviewInit');
  }

  ngAfterViewChecked(){
    console.log("Inside parent's ngAfterViewChecked");
  }

  
}
