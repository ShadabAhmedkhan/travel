import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';

import { ProductComponent } from './admin/product/product.component';
import {AddProductComponent} from './admin/product/add-product/add-product.component';
export const router: Routes = [


  { path: 'admin', component: AdminComponent },
  { path: 'product', component: ProductComponent },
  { path: 'add-product', component:AddProductComponent}
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
