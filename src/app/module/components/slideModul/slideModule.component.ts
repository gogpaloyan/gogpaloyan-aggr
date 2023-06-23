import { Component, Input, OnInit } from "@angular/core";



@Component({
    selector: "app-slideModule",
    templateUrl: "./slideModule.component.html",
    styleUrls: ["./slideModule.component.scss"]
})


export class SlideModuleComponent implements OnInit{
    @Input("images") images: Array<string> = []
    image: number = 0;
    showArrow: boolean = true
    

    imagePrev(){
        if(this.image == 0){
            return this.image = this.images.length -1
        }else{
            return this.image = this.image - 1
        }
    }
    imageNext(){
        if(this.image === this.images.length-1){
            return this.image =  0
        }else{
            return this.image = this.image + 1
        }
    }

    checkImage(value: number){

        return this.image = value
    }

    ngOnInit(){
        if(this.images.length <= 1){
            this.showArrow = false
        }
    }
}