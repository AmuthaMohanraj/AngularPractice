import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit,AfterContentChecked,AfterContentInit, OnDestroy,DoCheck} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})

export class LifeCycleHooksComponent  implements OnInit, OnChanges, AfterViewInit,AfterContentChecked,AfterContentInit,OnDestroy,DoCheck{
  constructor() {
    console.log('inside the constructor')
 }
 
 ngOnInit(): void {
    // throw new Error('Method not implemented.');
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
 ngDoCheck(): void {
  // throw new Error('Method not implemented.');
  console.log('inside the doCheck')
} 

}
