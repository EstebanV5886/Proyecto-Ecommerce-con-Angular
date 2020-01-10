import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Global } from './global';

@Injectable()
export class ProductoService{

    public url: string;
    public productos:Array<Producto>;
    
    constructor(
        private _http: HttpClient
    ){

        this.url = Global.url;

        this.productos = [
            new Producto("1", 'assets/images/Encore-6-1-1.png',"Molinillo de Cafe Baratza Encore",'Fabricadas en Europa, las fresas cónicas de 40mm del molino Encore™, molerán cualquier tipo de café. Estas fresas cónicas producen un molido parejo que es preciso y muy fino, ideal para Espresso o cualquier otro método de obtención de café que desee. Las duras fresas de acero son duraderas y se mantendrán afiladas por años.', 1500),
            new Producto("2", 'assets/images/Fellow-Duo-Cool-Gray.png', "Cafetera Fellow Duo Coffe Cool Gray", 'Nuestra Empresa centraliza su actividad en la importación y distribución de bebidas innovadoras en el sector Coffeeshops, siendo especialistas en este sector. Abastecemos a cafeterías, restaurantes, coctelerías, spas, bares, etc; de los más deliciosos Frappés, Smoothies, Mokas, Chai Latte, Moka Latte, Bebidas Refrescantes, Tés e Infusiones Premium. Además, somos pioneros en la incorporación de productos al mercado español, entregando la posibilidad de contar siempre con nuevas y novedosas alternativas. También, encontrarás en nuestro catálogo maquinarias para elaborar dichos productos y los más sofisticados utensilios, accesorios y herramientas para el barismo.', 2500),
            new Producto("3", 'assets/images/jarra-leche-lechera-dibujar-latte-art-cafe-inoxidable-motta-europa-coffeetech-negra.png', "Jarra Motta Latte Art Negra", 'Jarra Motta Latte Art Negra. Ideal para emulsionar leche. Esta fantástica lechera te ayudará a decorar tus cafés de especialidad, podrás dibujar y diseñar a tu gusto.', 6500),
            new Producto("4", 'assets/images/Encore-6-1-1.png', "Molinillo de Cafe Baratza Encore", 'Fabricadas en Europa, las fresas cónicas de 40mm del molino Encore™, molerán cualquier tipo de café. Estas fresas cónicas producen un molido parejo que es preciso y muy fino, ideal para Espresso o cualquier otro método de obtención de café que desee. Las duras fresas de acero son duraderas y se mantendrán afiladas por años.', 1500),
            new Producto("5", 'assets/images/Fellow-Duo-Cool-Gray.png', "Cafetera Fellow Duo Coffe Cool Gray", 'Nuestra Empresa centraliza su actividad en la importación y distribución de bebidas innovadoras en el sector Coffeeshops, siendo especialistas en este sector. Abastecemos a cafeterías, restaurantes, coctelerías, spas, bares, etc; de los más deliciosos Frappés, Smoothies, Mokas, Chai Latte, Moka Latte, Bebidas Refrescantes, Tés e Infusiones Premium. Además, somos pioneros en la incorporación de productos al mercado español, entregando la posibilidad de contar siempre con nuevas y novedosas alternativas. También, encontrarás en nuestro catálogo maquinarias para elaborar dichos productos y los más sofisticados utensilios, accesorios y herramientas para el barismo.', 2500),
            new Producto("6", 'assets/images/jarra-leche-lechera-dibujar-latte-art-cafe-inoxidable-motta-europa-coffeetech-negra.png', "Jarra Motta Latte Art Negra", 'Jarra Motta Latte Art Negra. Ideal para emulsionar leche. Esta fantástica lechera te ayudará a decorar tus cafés de especialidad, podrás dibujar y diseñar a tu gusto.', 6500),
            new Producto("7", 'assets/images/Encore-6-1-1.png', "Molinillo de Cafe Baratza Encore", 'Fabricadas en Europa, las fresas cónicas de 40mm del molino Encore™, molerán cualquier tipo de café. Estas fresas cónicas producen un molido parejo que es preciso y muy fino, ideal para Espresso o cualquier otro método de obtención de café que desee. Las duras fresas de acero son duraderas y se mantendrán afiladas por años.', 1500),
            new Producto("8", 'assets/images/Fellow-Duo-Cool-Gray.png', "Cafetera Fellow Duo Coffe Cool Gray", 'Nuestra Empresa centraliza su actividad en la importación y distribución de bebidas innovadoras en el sector Coffeeshops, siendo especialistas en este sector. Abastecemos a cafeterías, restaurantes, coctelerías, spas, bares, etc; de los más deliciosos Frappés, Smoothies, Mokas, Chai Latte, Moka Latte, Bebidas Refrescantes, Tés e Infusiones Premium. Además, somos pioneros en la incorporación de productos al mercado español, entregando la posibilidad de contar siempre con nuevas y novedosas alternativas. También, encontrarás en nuestro catálogo maquinarias para elaborar dichos productos y los más sofisticados utensilios, accesorios y herramientas para el barismo.', 2500),
          ];
    }

    getProductos(){
        return this.productos
    }

    getProducto(productoId):Observable<any>{
        return this._http.get(this.url + 'producto/' + productoId)
    }    
}