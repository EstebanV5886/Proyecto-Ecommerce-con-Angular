import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public paragraph: string;

  constructor() {

    this.title = "Café fuerte, Raíces fuertes";
    this.subtitle = "Sobre Nuestro Café";
    this.paragraph = "Fundado en 1987 por los hermanos Hernández, nuestro establecimiento ha estado sirviendo café rico procedente de agricultores artesanales en varias regiones de América del Sur y Central. Estamos dedicados a viajar por el mundo, encontrar el mejor café y traerlo de vuelta aquí en nuestro café.";

   }

  ngOnInit() {
  }

}
