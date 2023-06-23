import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: "numberNegative"
})


export class NumberNegative implements PipeTransform{
    transform(value: any) {
        if(value > 0){
            return value 
        }
        else{
            return value = "is over"
        }
        
    }
}