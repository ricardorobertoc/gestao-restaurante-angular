import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecharContaComponent } from './fechar-conta.component';

describe('FecharContaComponent', () => {
  let component: FecharContaComponent;
  let fixture: ComponentFixture<FecharContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FecharContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FecharContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
