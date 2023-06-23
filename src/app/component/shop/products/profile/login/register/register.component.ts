import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";


@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})

export class RegisterComponent {

    formError: boolean = false
    loginError: boolean = false
    repeadPassword: boolean = false


    form = new FormGroup({
        name: new FormControl("", [Validators.required]),
        surName: new FormControl("", [Validators.required]),
        phone: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
        rpassword: new FormControl("", [Validators.required]),
    })

    submit(){
        if(this.Data.Data.autification.registerCheckLogin(this.form.value.email)){
           return this.loginError = true
        }else{
            this.loginError = false
            if(this.form.value.password === this.form.value.rpassword && this.form.valid){
                alert("registerd ok")
                this.Router.navigate(["profile/login"])
                return this.Data.Data.autification.register(this.form.value)
            }else if(this.form.invalid){
                return this.formError = true
            }else{
                this.loginError = false
                return this.repeadPassword = true
            }
             
        }
    }
    

    constructor(private Data: DataService, private Router: Router, private title: Title){
        this.title.setTitle("Register in aggregator")
    }
}