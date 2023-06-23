import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: "imagePipe"
})


export class ImagePipe implements PipeTransform{
    transform(value: any) {
        if(value.length > 1){
            return value 
        }
        else{
            return
        }
        
    }
}