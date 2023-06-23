import { NgModule } from "@angular/core";
import { ProductModuleComponent } from "./productModule.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { HoverDirectiveDirective } from "src/app/directive/hoverDirective.directive";



@NgModule({
    declarations:[ProductModuleComponent, HoverDirectiveDirective],
    imports:[CommonModule, RouterLink],
    exports:[ProductModuleComponent],

})


export class ProductModule{

}