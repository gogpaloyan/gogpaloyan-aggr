import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";


@Component({
    selector: "app-productModule",
    templateUrl: "./productModule.component.html",
    styleUrls: ["./productModule.component.scss"]
})

export class ProductModuleComponent implements OnInit {

    @Input("product") product: any
    basketShow: boolean = false
    basket: boolean = false
    auth: boolean = false



    constructor(private Data: DataService){}

    onAddBasket(){
        this.Data.Data.crud.addBasket(this.product)
        return this.upDate()
    }
    onDeleteBasket(){
        this.basket = false
        this.Data.Data.crud.deleteBasketProduct(this.product.id)
        return this.upDate()
    }

    upDate(){
        
        if(this.Data.userData !== undefined){
            this.Data.userData.userDataBase.basket.find((val: any) => {
                if(val.id == this.product.id){
                    return this.basket = true
                }else{
                    return
                }
            })
            return this.Data.userData.userDataBase.myProduct.find((val: any) => {
                if(val.id == this.product.id){
                    return this.basketShow = true
                }else{
                    return
                }
            })
        }
    }


    ngOnInit(){
        if(this.Data.userData !== undefined){
            this.auth = true
        }
            this.upDate()
            
    }
}