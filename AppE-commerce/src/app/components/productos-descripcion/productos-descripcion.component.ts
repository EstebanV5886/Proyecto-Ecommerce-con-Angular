import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.services';
import { CarritoService } from '../../services/carrito.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-productos-descripcion',
  templateUrl: './productos-descripcion.component.html',
  styleUrls: ['./productos-descripcion.component.css'],
  providers: [ProductoService, CarritoService]
})
export class ProductosDescripcionComponent implements OnInit {
  
  public titulo: string;
  public producto:Producto;
  public cart: Cart;
  public items: Array<Producto>;
  public url: string;
  public price: number;
  public totalPrice: number;
  public qty: number;
  public totalQty: number;
  private carts: Cart[] = [];
  private total = 0;

  @Output() productAddded = new EventEmitter<Cart>();
  
  constructor(
    private _productoService: ProductoService,
    private _carritoService: CarritoService,
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

  addProduct(producto: Producto){
    window.alert('Your product has been added to the cart!');
    this._carritoService.addToCart(producto);
  }

}
