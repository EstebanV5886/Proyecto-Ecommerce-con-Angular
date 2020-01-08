import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   public title: string
   public subtitle: string 
  constructor() {
    this.title = "Tu café en Línea"
    this.subtitle = "Negocio Casual"
   }

  ngOnInit() {
  }

}
