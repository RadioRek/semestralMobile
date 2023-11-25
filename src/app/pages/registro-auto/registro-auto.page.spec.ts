import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAutoPage } from './registro-auto.page';

describe('RegistroAutoPage', () => {
  let component: RegistroAutoPage;
  let fixture: ComponentFixture<RegistroAutoPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(RegistroAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
