import { Component, DoCheck } from '@angular/core';
import { DataService } from './service/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  onActivate(event: any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0,
     })
}


  constructor(private Data: DataService, private title: Title){
  this.title.setTitle("Aggregator in Armenian | admin.armconstructor.am")
    return this.Data.Data.autification.auth()
  }


  ngDoCheck() {
    
  }
}
