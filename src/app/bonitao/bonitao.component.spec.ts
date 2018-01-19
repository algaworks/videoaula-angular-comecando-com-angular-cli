import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonitaoComponent } from './bonitao.component';

describe('BonitaoComponent', () => {
  let component: BonitaoComponent;
  let fixture: ComponentFixture<BonitaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonitaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonitaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
