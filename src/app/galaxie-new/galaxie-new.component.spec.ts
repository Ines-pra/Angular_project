import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxieNewComponent } from './galaxie-new.component';

describe('GalaxieNewComponent', () => {
  let component: GalaxieNewComponent;
  let fixture: ComponentFixture<GalaxieNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalaxieNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxieNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
