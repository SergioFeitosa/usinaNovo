import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../../../views/home/home.component';
import { RouterModule } from '@angular/router';
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';
import { AgronegocioComponent } from '../../../views/agronegocio/agronegocio.component';
import { CafePageComponent } from '../../agronegocio/cafe-page/cafe-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatCommonModule,
    MatListModule,
    HomeComponent,
    ProductCrudComponent,
    AgronegocioComponent,
    CafePageComponent,
    RouterModule,
    MatExpansionModule,
    MatIconModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {

  handleClickEvent() {}

}
