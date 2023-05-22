import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit,AfterContentChecked,AfterContentInit, OnDestroy,Input,Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-myappcomponentone',
   templateUrl: './myappcomponentone.component.html',
   styleUrls: ['./myappcomponentone.component.scss']
})
export class MyappcomponentoneComponent implements OnInit, OnChanges, AfterViewInit,AfterContentChecked,AfterContentInit,OnDestroy{

   myAppName: string = 'mohanraj';
   isDisable: boolean = false;
   show: boolean = false;
   arr: string[] = ['html', 'css', 'js'];
   v: string = '';
   str: string = '';
   tamil: any = '';
   english: any = '';
   maths: any = '';
   science: any = '';
   social: any = '';

   obj: any = ['mohanraj', 'seshika', 'megha', 'poongodi']


   obj1: any = {
      name: 'mohanraj',
      rollno: 211900300,
      age: 21,
      totalSubject: 5,
      subjectCode: 'pca201',
   }



   arrOfObject = [{
      name: 'mohanraj',
      rollno: 211900300,
      age: 21,
      totalSubject: 5,
      subjectCode: 'pca201',
   },

   {
      name: 'chandrasekar',
      rollno: 211900300,
      age: 21,
      totalSubject: 5,
      subjectCode: 'pca201',
   },

   {
      name: 'komthi',
      rollno: 211900300,
      age: 21,
      totalSubject: 5,
      subjectCode: 'pca201',
   },

   {
      name: 'poongodi',
      rollno: 211900300,
      age: 21,
      totalSubject: 5,
      subjectCode: 'pca201',
   },

   ]



   @Input() public property:any;
   @Input() public json:any;
   @Input("cityName") public city:any;
   @Output() public giveValue=new EventEmitter();
   @Output() public giveValueNgOnInit=new EventEmitter();
   

   constructor() {
      console.log('inside the constructor')
   }


   ngOnInit(): void {
      this.giveValueNgOnInit.emit('seshika')
      console.log('inside the oninit')
   }

   ngOnChanges(changes: SimpleChanges): void {
      // throw new Error('Method not implemented.');
      console.log('inside the onchanges')
   }
   ngAfterViewInit(): void {
      // throw new Error('Method not implemented.');
      console.log('inside the viewinit')
   }
   ngAfterContentInit(): void {
      // throw new Error('Method not implemented.');
      console.log('inside the AfterContentInit')
   }
   ngAfterContentChecked(): void {
      // throw new Error('Method not implemented.');
      console.log('inside the AfterContentChecked');
   }
   ngOnDestroy(): void {
      // throw new Error('Method not implemented.');
      console.log('inside the onDestroy')
   }



   fun() {
      this.myAppName = 'seshika';
      this.isDisable = !this.isDisable;
   }

   fun1(e: any) {
      console.log(e)
      this.arr.push(this.myAppName)
   }


   eventEmitterFunction(){
      this.giveValue.emit('megha');
   }

}
