import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/service/data.service";



@Component({
    selector: "app-addProduct",
    templateUrl: "./addProduct.component.html",
    styleUrls: ["./addProduct.component.scss"]
})


export class AddProductComponent{

    add: boolean = false

    image: Array<string> =  []

    forms = new FormGroup({
        category: new FormControl("mixed"),
        title: new FormControl("", Validators.required),
        type: new FormControl("", Validators.required),
        model: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
        count: new FormControl(1),
        image: new FormControl("", Validators.required),
        price: new FormControl(1, Validators.required),
        specifications: new FormControl(""),
    })

    select(e: any){
        if(e.target.files){
            let render = new FileReader();
            render.readAsDataURL(e.target.files[0])
            render.onload = (event: any) => {
                this.image = [...this.image, event.target.result]
            } 
        }else{
            return 
        }
    }

    submit(){
        this.add = false
        this.Data.Data.crud.addProduct(this.forms.value, this.image)
        return this.forms.reset()
    }

    onDeleteImage(img: any){

        return this.image = this.image.filter((val: any) => {
            return val !== img
        })
    }

    constructor(private Data: DataService){}

}