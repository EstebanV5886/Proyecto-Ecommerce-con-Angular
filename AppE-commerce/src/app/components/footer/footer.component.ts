import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DoCheck {
  
    public footer_date: number;

  constructor() {

    this.footer_date = new Date().getFullYear()

   }

  ngOnInit() {
  }

  ngDoCheck(){

  }


}
