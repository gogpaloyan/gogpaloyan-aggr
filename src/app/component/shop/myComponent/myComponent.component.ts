import {Component, OnInit} from "@angular/core"
import { Title } from "@angular/platform-browser";
import { DataService } from "src/app/service/data.service";


@Component({
    selector: "app-myComponent",
    templateUrl: "./myComponent.component.html",
    styleUrls: ["./myComponent.component.scss"]
})

export class MyComponent implements OnInit{


    cars: any = []
    phones: any = []


    ngOnInit(){
        //car
        let data = this.Data.Data.getProduct("car").sort()
        for(let i = 0; i < 4; i++){
            this.cars.push(data[i])
        }
        // phone
        let phone = this.Data.Data.getProduct("phone").sort()
        for(let i = 0; i < 4; i++){
            this.phones.push(phone[i])
        }
    }

    constructor(private Data: DataService, private title: Title){
        this.title.setTitle("Aggregator | Shop all")
    }

}