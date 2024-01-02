import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: '/src/app/components/template/footer/footer.component.html',
  styleUrl: '/src/app/components/template/footer/footer.component.css'
})
export class FooterComponent {

}
