import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesNavegacaoComponent } from './botoes-navegacao.component';

describe('BotoesNavegacaoComponent', () => {
  let component: BotoesNavegacaoComponent;
  let fixture: ComponentFixture<BotoesNavegacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoesNavegacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
