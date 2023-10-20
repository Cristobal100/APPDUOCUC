import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule si lo estás usando en InicioPage
import { InicioPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [InicioPage],
      imports: [IonicModule.forRoot()], // Asegúrate de importar IonicModule aquí
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
