import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMenuComponent } from './pagina-menu.component';

describe('PaginaMenuComponent', () => {
  let component: PaginaMenuComponent;
  let fixture: ComponentFixture<PaginaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
