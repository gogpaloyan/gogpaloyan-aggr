import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";


@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
    animations: [
        trigger('animation', [
          transition('on => visible', [
            style({transform: 'scale(0.5)'}),
            animate('150ms', style({transform: 'scale(1)'}))
          ]),
        ]),

      ]
})


export class ProfileComponent implements OnInit {

    auth: boolean = false
    userData: any
    logOutshow: boolean = false



    logOut() {
        localStorage.clear()
        this.Data.userData = undefined
        return this.Router.navigate([""])
    }
    ngOnInit() {
        this.userData = this.Data.userData
        this.auth = this.Data.Data.autification.checkToken()
        this.title.setTitle("My profile | aggregator")
    } 

    onActivate(event: any) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }


    onDeleteProduct(id: any) {
        return this.Data.Data.crud.onDeleteProduct(id)
    }

    onDeleteBasketProduct(id: any){
        return this.Data.Data.crud.deleteBasketProduct(id)
    }

    constructor(private Data: DataService, private Router: Router, private title: Title) { }
}