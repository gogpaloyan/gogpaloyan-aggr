import { Component, DoCheck, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";



@Component({
    selector: "app-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"]
})

export class CategoryComponent implements OnInit, DoCheck{

    products: any = []
    url: any

    ngOnInit() {
       this.upDate()
    }

    ngDoCheck() {
        return this.upDate()
    }
    
    upDate(){
        this.url = this.ActivatedRoute.url
        this.title.setTitle("Buy " + this.url._value[1].path +  " in Armenia")
        if(this.url._value[1].path == "mixed"){
            return this.products = this.Data.Data.products()
        }else{
            return this.products = this.Data.Data.products().filter((val: any) => val.category == this.url._value[1].path)
        }
        
        

    }


    constructor(private Data: DataService, private ActivatedRoute: ActivatedRoute, private title: Title,){
        
    }
}