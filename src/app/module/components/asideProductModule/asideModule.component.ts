import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";




@Component({
    selector: "app-asideModule",
    templateUrl: "./asideModule.component.html",
    styleUrls: ["./asideModule.component.scss"]
})


export class AsideModuleComponent implements OnInit {

    @Input("products") products: any



    @Output('upDate') upDate: EventEmitter<any> = new EventEmitter<any>()


    UpDate() {
            // window.scroll(0,0);
 
    window.scroll({ 
        top: 0, 
        left: 0,
 })
        return this.upDate.emit(this.products)
    }
    constructor() {

    }

    ngOnInit() {
    }
}