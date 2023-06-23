import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";


@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent {

    error: boolean = false

    form = new FormGroup({
        userName: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required])
    })


    submit(){
    if(this.Data.Data.autification.login(this.form.value)){
        this.error = false
        return this.Router.navigate(["/profile"])
        // return window.location.reload()
    }else{
        return this.error = true
    }
    }

    constructor(private Data: DataService, private Router: Router, private title: Title) { 
        this.title.setTitle("Login in aggregator")
       }
}