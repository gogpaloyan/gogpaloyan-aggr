import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/service/data.service";



@Component({
    selector: "app-guest",
    templateUrl: "./guest.component.html",
    styleUrls: ["./guest.component.scss"]
})



export class GuestComponent implements OnInit{

    id: any
    profileProduct: any
    
    constructor(private Data: DataService, private ActivatedRouter: ActivatedRoute){}

    ngOnInit(){
        this.ActivatedRouter.paramMap.subscribe((data) => this.id = data.get("id"))
        return this.profileProduct = this.Data.Data.crud.onGetGuestProfile(this.id)
    }

}