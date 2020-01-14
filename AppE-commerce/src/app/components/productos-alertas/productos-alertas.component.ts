import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.services';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos-alertas',
  templateUrl: './productos-alertas.component.html',
  styleUrls: ['./productos-alertas.component.css']
})
export class ProductosAlertasComponent implements OnInit {

  @Input() producto:Producto;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
