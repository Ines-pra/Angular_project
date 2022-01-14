import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxieUpdateComponent } from './galaxie-update.component';

describe('GalaxieUpdateComponent', () => {
  let component: GalaxieUpdateComponent;
  let fixture: ComponentFixture<GalaxieUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaxieUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
