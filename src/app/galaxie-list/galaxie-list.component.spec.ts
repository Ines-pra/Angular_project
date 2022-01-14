import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxieListComponent } from './galaxie-list.component';

describe('GalaxieListComponent', () => {
  let component: GalaxieListComponent;
  let fixture: ComponentFixture<GalaxieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaxieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
