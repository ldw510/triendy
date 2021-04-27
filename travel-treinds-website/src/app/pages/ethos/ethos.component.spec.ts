import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthosComponent } from '../ethos/ethos.component';

describe('EthosComponent', () => {
  let component: EthosComponent;
  let fixture: ComponentFixture<EthosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
