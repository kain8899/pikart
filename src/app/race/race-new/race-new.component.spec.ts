import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceNewComponent } from './race-new.component';

describe('RaceNewComponent', () => {
  let component: RaceNewComponent;
  let fixture: ComponentFixture<RaceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
