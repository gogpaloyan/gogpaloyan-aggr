import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";



@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"],
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    product: any
    id: any
    image: number = 0
    images: number = 0
    footer: any
    basket: boolean = false
    baskets: any
    myProd: boolean = false
    myProduct: any
    url: any 




    constructor(private Data: DataService, private Router: Router, private ActivatedRoute: ActivatedRoute, private title: Title, private meta: Meta) {     
    }


    onAddBasket(product: any){
        this.basket = true
        return this.Data.Data.crud.addBasket(product)
    }
    onDeleteBasket(id: number){
        this.basket = false
        return this.Data.Data.crud.deleteBasketProduct(id)
    } 


    upDate(){
        this.url = this.ActivatedRoute.url

        this.ActivatedRoute.paramMap.subscribe((data) => {
            this.id = data.get('id')
        })
        this.product = this.Data.Data.products().find((val: any) => {
             return val.id == this.id
         })
         if(this.Data.userData !== undefined){
            this.baskets = this.Data.userData.userDataBase.basket.filter((val: any) => {
                if(val.id == this.product.id){
                    return this.basket = true
                }else{
                    return this.basket = false
                }
            })
            this.myProduct = this.Data.userData.userDataBase.myProduct.find((val: any) => {
                if(val.id === this.product.id){
                    return this.myProd = true
                }else{
                    return this.myProd = false
                }
            })
         }else{
            this.myProd = true
         }

        this.images = this.product.image.length - 1
        this.footer = this.Data.Data.products().filter((val: any) => {
                return val.category == this.product.category
        })
         this.footer = this.footer.filter((val: any, i: number) => {
            if(i <= 7){
                return val
            }else{
                return 
            }
        })
        return this.title.setTitle(this.product.title)
    }

    ngOnInit(){
        
        this.upDate()
        
    }

    ngDoCheck() {
        this.upDate()
    }


    ngOnDestroy() {
        this.meta.removeTag("name = title")
    }
}