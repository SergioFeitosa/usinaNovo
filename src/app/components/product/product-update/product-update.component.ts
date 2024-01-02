import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})


export class ProductUpdateComponent implements OnInit {

   product: Product = {name: '', price: 0};
  id:number = 0;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,


  ) { }

  ngOnInit(): void {
   this.id =  parseInt(this.route.snapshot.paramMap.get('id')!);
  
    this.productService.readById(this.id).subscribe(product => {
      this.product = product;
    });
  }
  updateProduct(): void {
    this.productService.update(this.product!).subscribe(() => {
      this.productService.showMessage('Produto atualizado')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}

