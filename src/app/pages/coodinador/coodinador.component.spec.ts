import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoodinadorComponent } from './coodinador.component';

describe('CoodinadorComponent', () => {
  let component: CoodinadorComponent;
  let fixture: ComponentFixture<CoodinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoodinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoodinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
