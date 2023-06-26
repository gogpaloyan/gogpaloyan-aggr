import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DataService } from './service/data.service';
import { ProfileModule } from './component/shop/products/profile/profile.module';
import { MyComponent } from './component/shop/myComponent/myComponent.component';
import { ProductComponent } from './module/components/productModule/product.component';
import { SlideModuleComponent } from './module/components/slideModul/slideModule.component';
import { AsideModuleComponent } from './module/components/asideProductModule/asideModule.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './component/shop/products/category/category.component';
import { ErrorComponent } from './module/components/404/error.component';
import { ProductModule } from './module/components/pageModule/productModule.module';
import { NumberNegative } from './pipe/numberNegative/numberNegative.pipe';
import { ImagePipe } from './pipe/numberNegative/imagepipe.pipe';
import { GuestComponent } from './component/shop/guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    SlideModuleComponent,
    AsideModuleComponent,
    CategoryComponent,
    GuestComponent,
    ErrorComponent,
    NumberNegative,
    ImagePipe
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    FormsModule,
    ProductModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
