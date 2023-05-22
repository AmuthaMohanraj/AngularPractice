import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { MyappcomponentoneComponent } from './myappcomponentone/myappcomponentone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


 
  // title = 'appPractice';
  title='seshika Arumugam';
  jsonvalues=[{empName:'Mohanraj',age:21,rollNo:211900300,mobileNo:7448462762},{empName:'poongodi',age:25,rollNo:211900400,mobileNo:9080818453}]
  city='Chennai';
  message='';
  message1='';
  message2='';
  @ViewChild(MyappcomponentoneComponent)childvalue:any;

   ngAfterViewInit(): void {
    console.log(this.message2=this.childvalue.myAppName);
    console.log(this.childvalue.json);
  }

  captureMessageFromChile(event:string){
     console.log(event);
     this.message=event;
  }

  captureMessageFromChile1(event1:string){
    console.log(event1);
    this.message1=event1;
 }

}


