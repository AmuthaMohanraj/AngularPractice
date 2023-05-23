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

  //Practice
  room='6 members';
  roomMembers=['perumal','mohanraj','karthi','thamu','yogesh','venky'];
  batch='(25-Members 2-leads)';
  memberNames=['roshine','saravanan','poonelen','raghulpriyan','vignesh','raju','selva','priya','rajesh','thagam','mohanraj','akash','aravind','divya','nethaji','raghul','kishore','haridha','karthikesan','ajith','singaram','gokul','muthu','saravanan','uma','mahalashmi','maruthu'];



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


