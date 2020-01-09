import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto";
import { ProductoService } from '../../services/producto.services';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  public titulo: string;
  public productos:Array<Producto>;

  constructor(
    private _ProductoService: ProductoService
  ) {
    this.titulo = "Últimos Productos"
    this.productos = this._ProductoService.getProductos();
   }

  ngOnInit() {
    
  }

}
