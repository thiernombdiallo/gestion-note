import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatiereComponent } from './add-matiere.component';

describe('AddMatiereComponent', () => {
  let component: AddMatiereComponent;
  let fixture: ComponentFixture<AddMatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMatiereComponent]
    });
    fixture = TestBed.createComponent(AddMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
