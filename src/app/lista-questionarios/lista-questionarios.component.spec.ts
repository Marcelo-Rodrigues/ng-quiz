import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQuestionariosComponent } from './lista-questionarios.component';

describe('ListaQuestionariosComponent', () => {
  let component: ListaQuestionariosComponent;
  let fixture: ComponentFixture<ListaQuestionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaQuestionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaQuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
