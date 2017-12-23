import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoQuestionarioComponent } from './resumo-questionario.component';

describe('ResumoQuestionarioComponent', () => {
  let component: ResumoQuestionarioComponent;
  let fixture: ComponentFixture<ResumoQuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoQuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoQuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
