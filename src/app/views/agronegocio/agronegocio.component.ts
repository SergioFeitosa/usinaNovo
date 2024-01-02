import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ForDirective } from '../../directives/for.directive';
import { HeaderService } from '../../components/template/header/header.service';
import { AgronegocioPageComponent } from '../../components/agronegocio/agronegocio-page/agronegocio-page.component';

@Component({
  selector: 'app-agronegocio',
  standalone: true,
  imports: [
    MatCardModule, 
    ForDirective, 
    AgronegocioPageComponent,
  ],
  templateUrl: './agronegocio.component.html',
  styleUrl: './agronegocio.component.css',
  
})
export class AgronegocioComponent implements OnInit{
  
  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'Agro Negócio',
      icon: 'home',
      routeUrl: ''
    }    
  }
  ngOnInit(): void {
  }

}

