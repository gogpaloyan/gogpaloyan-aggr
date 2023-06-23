import { Component, DoCheck, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";


@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.scss"]
})


export class NavigationComponent implements OnInit, DoCheck{

    name: any = "Profile"



    ngOnInit() {
        this.upDateName()
    }
    ngDoCheck() {
       return this.upDateName()
    }


    upDateName(){
        if(this.Data.userData !== undefined){
            return this.name = localStorage.getItem("fullName")
        }else{
            return this.name = "Profile"
        }
    }

    constructor(private Data: DataService){}






}