import { Component, OnChanges, OnInit, Input, ChangeDetectorRef, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss']
})
export class AppChildComponent implements OnInit, OnChanges, DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked {

  @Input() color : any;
  constructor(private cd : ChangeDetectorRef) {
      console.log("Inside constructor of app-child");  
  }
  
  ngOnInit(): void {
    console.log("Inside app- child component ngOnInit, color", this.color);
  }

  ngOnChanges(sc : SimpleChanges){
    console.log("Inside app- child component ngOnChanges, color, sc", this.color, sc);
    // this.color = 'red';
    // Since, this method gets called before ngOnInit, so avoid changing any input prop here, as results may hamper. 
  }
  changeColor(color: any){
    this.color = color;
    console.log("color changed manually from view", this.color);
  }
  ngDoCheck(){
    console.log("Inside ngDoCheck");
    // Why getting called multiple times. 
  }

  ngAfterContentInit() {
    console.log("Inside ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("Inside ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log('Inside AfterviewInit');
  }

  ngAfterViewChecked(){
    console.log("inside ngAfterViewChecked");
  }
}
