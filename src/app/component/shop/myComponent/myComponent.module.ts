import { NgModule } from "@angular/core";
import { MyComponent } from "./myComponent.component";
import { ProductModule } from "src/app/module/components/pageModule/productModule.module";
import { CommonModule } from "@angular/common";
import { MyComponentRoutingModule } from "./myComponent-router.module";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [MyComponent],
    imports: [
        CommonModule,
        ProductModule,
        MyComponentRoutingModule
    ],
})


export class MyComponentModule{}