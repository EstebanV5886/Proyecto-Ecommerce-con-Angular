import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-productos-descripcion',
  templateUrl: './productos-descripcion.component.html',
  styleUrls: ['./productos-descripcion.component.css'],
  providers: [ProductoService]
})
export class ProductosDescripcionComponent implements OnInit {

  public titulo: string;
  public producto:Producto;
  public url: string;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router    
  ) { 
    this.titulo = "Descripción";
    this.url = Global.url;
  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      let id = params['id']

      this._productoService.getProducto(id).subscribe(
        response => {
          if(response.product){
            this.producto = response.product;
          }else{
            this._router.navigate(['/productos']);
          }
          
        },
        error => {
          console.log(error);
        }
      )

    });
  }

}
