import { Component, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { MatToolbarModule } from '@angular/material/toolbar'
import { registerLocaleData } from '@angular/common'; 

import { AgronegocioComponent } from './views/agronegocio/agronegocio.component';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './components/template/layout/layout.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';



registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    AgronegocioComponent, 
    HomeComponent, 
    MatToolbarModule,
    LayoutComponent, 
    ProductCrudComponent, 
  ],
  styles: [],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})

export class AppComponent {
  nome = 'Sergio';
  sidebarActive = false;
}
