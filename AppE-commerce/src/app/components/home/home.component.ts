import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string;
  public second_title: string;
  public subtitle: string;
  public second_subtitle: string;
  public first_paragraph: string;
  public second_paragraph: string;

  constructor() {
    this.title = "Café Fresco";
    this.subtitle = "VALE LA PENA BEBER";
    this.second_title = "Nuestra Promesa";
    this.second_subtitle = "para ti";
    this.first_paragraph = "Cada taza de nuestro café artesanal de calidad comienza con ingredientes de origen local y seleccionados a mano. Una vez que lo pruebe, nuestro café será una maravillosa adición a su rutina diaria de la mañana, ¡lo garantizamos!";
    this.second_paragraph = "Cuando ingresa a nuestra tienda para comenzar el día, nos dedicamos a brindarle un servicio amable, un ambiente acogedor y, sobre todo, excelentes productos elaborados con ingredientes de la más alta calidad. Si no está satisfecho, háganoslo saber y haremos todo lo posible para hacer las cosas bien.";
   }

  ngOnInit() {
  }

}
