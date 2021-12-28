import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseListItemComponent } from './house-list-item.component';

describe('HouseListItemComponent', () => {
  let component: HouseListItemComponent;
  let fixture: ComponentFixture<HouseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
