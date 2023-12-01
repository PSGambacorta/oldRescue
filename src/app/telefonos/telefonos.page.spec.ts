import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelefonosPage } from './telefonos.page';

describe('TelefonosPage', () => {
  let component: TelefonosPage;
  let fixture: ComponentFixture<TelefonosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelefonosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
