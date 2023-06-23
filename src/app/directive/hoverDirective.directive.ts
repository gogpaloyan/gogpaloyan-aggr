import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";



@Directive({
   selector: '[HoverDirective]'
})

export class HoverDirectiveDirective implements OnInit{


    constructor(private el: ElementRef, private render: Renderer2){}


    ngOnInit(){
        this.render.setStyle(this.el.nativeElement, 'border-radius', '12px')
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', '#F5F6FD')
        this.render.setStyle(this.el.nativeElement, 'cursor', 'pointer')
        this.render.setStyle(this.el.nativeElement, 'transition', '0.3s ease-in')
        this.render.setStyle(this.el.nativeElement, 'padding', '2px')
    }

    @HostListener('mouseenter')
    mouseEnter(){
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'red')
    }

    @HostListener('mouseleave')
    mouseleave(){
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', '#F5F6FD')
    }

}