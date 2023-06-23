import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './component/shop/products/category/category.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductComponent } from './module/components/productModule/product.component';

const routes: Routes = [
  {path: "", loadChildren: () => import("./component/shop/myComponent/myComponent.module").then((m) => m.MyComponentModule)},
  {path: "category", loadChildren: () => import("./component/shop/myComponent/myComponent.module").then((m) => m.MyComponentModule)},
  {path: "category/:id", component: CategoryComponent},
  {path: "product/:id", component: ProductComponent},
  {path: "profile",  canActivate: [AuthGuard], loadChildren: () => import("./component/shop/products/profile/profile.module").then((m) => m.ProfileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
