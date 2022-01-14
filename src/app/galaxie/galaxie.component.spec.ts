import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxieComponent } from './galaxie.component';

describe('GalaxieComponent', () => {
  let component: GalaxieComponent;
  let fixture: ComponentFixture<GalaxieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaxieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
