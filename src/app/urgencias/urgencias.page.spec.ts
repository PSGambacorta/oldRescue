import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UrgenciasPage } from './urgencias.page';

describe('UrgenciasPage', () => {
  let component: UrgenciasPage;
  let fixture: ComponentFixture<UrgenciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UrgenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
