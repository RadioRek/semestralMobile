import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReestablecerPassPage } from './reestablecer-pass.page';

describe('ReestablecerPassPage', () => {
  let component: ReestablecerPassPage;
  let fixture: ComponentFixture<ReestablecerPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReestablecerPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
