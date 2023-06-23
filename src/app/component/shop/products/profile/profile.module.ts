import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ProfileRouterModule } from './profile-routing.module';
import { AddProductComponent } from './addProduct/addProduct.component';
import { ProductModule } from 'src/app/module/components/pageModule/productModule.module';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent
    
  ],
  imports: [
    CommonModule,
    ProfileRouterModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule

  ],

})
export class ProfileModule{ }
