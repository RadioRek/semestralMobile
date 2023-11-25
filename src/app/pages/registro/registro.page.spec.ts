import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { HelperService } from 'src/app/services/helper.service';

describe('registro', () => {
  let service: HelperService;
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should create an acount', () => {
    
  });

  it('should create an alert with the correct message', async () => {
    const testMessage = 'Test message';
    const alert = await service.mostrarAlerta(testMessage);
    expect(alert.message).toBe(testMessage);
  });

});
