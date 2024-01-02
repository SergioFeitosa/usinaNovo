import { Routes } from '@angular/router';

import { HomeComponent} from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { AgronegocioComponent } from './views/agronegocio/agronegocio.component';
import { CafePageComponent } from './components/agronegocio/cafe-page/cafe-page.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "agronegocio",
        component: AgronegocioComponent
    },
    {
        path: "cafe",
        component: CafePageComponent
    },
    {
        path: "products",
        component: ProductCrudComponent
    },
    {
        path: "products/create",
        component: ProductCreateComponent
    },
    {
        path: "products/read",
        component: ProductReadComponent
    },
    {
        path: "products/update/:id",
        component: ProductUpdateComponent
    },
    {
        path: "products/delete/:id",
        component: ProductDeleteComponent
    },

];
