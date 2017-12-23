import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoRespostasComponent } from './resumo-respostas.component';

describe('ResumoRespostasComponent', () => {
  let component: ResumoRespostasComponent;
  let fixture: ComponentFixture<ResumoRespostasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoRespostasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoRespostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
