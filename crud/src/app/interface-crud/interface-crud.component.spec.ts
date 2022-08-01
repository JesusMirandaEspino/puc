import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceCrudComponent } from './interface-crud.component';

describe('InterfaceCrudComponent', () => {
  let component: InterfaceCrudComponent;
  let fixture: ComponentFixture<InterfaceCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
