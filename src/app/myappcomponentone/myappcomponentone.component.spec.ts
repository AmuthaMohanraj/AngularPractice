import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappcomponentoneComponent } from './myappcomponentone.component';

describe('MyappcomponentoneComponent', () => {
  let component: MyappcomponentoneComponent;
  let fixture: ComponentFixture<MyappcomponentoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyappcomponentoneComponent]
    });
    fixture = TestBed.createComponent(MyappcomponentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
