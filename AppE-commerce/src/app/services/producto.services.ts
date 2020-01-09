import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable()
export class ProductoService{

    public productos:Array<Producto>;
    
    constructor(){
        this.productos = [
            new Producto("Molinillo de Cafe Baratza Encore", 'assets/images/Encore-6-1-1.png', 'Fabricadas en Europa, las fresas cónicas de 40mm del molino Encore™, molerán cualquier tipo de café. Estas fresas cónicas producen un molido parejo que es preciso y muy fino, ideal para Espresso o cualquier otro método de obtención de café que desee. Las duras fresas de acero son duraderas y se mantendrán afiladas por años.', 1500),
            new Producto("Cafetera Fellow Duo Coffe Cool Gray", 'assets/images/Fellow-Duo-Cool-Gray.png', 'Nuestra Empresa centraliza su actividad en la importación y distribución de bebidas innovadoras en el sector Coffeeshops, siendo especialistas en este sector. Abastecemos a cafeterías, restaurantes, coctelerías, spas, bares, etc; de los más deliciosos Frappés, Smoothies, Mokas, Chai Latte, Moka Latte, Bebidas Refrescantes, Tés e Infusiones Premium. Además, somos pioneros en la incorporación de productos al mercado español, entregando la posibilidad de contar siempre con nuevas y novedosas alternativas. También, encontrarás en nuestro catálogo maquinarias para elaborar dichos productos y los más sofisticados utensilios, accesorios y herramientas para el barismo.', 2500),
            new Producto("Jarra Motta Latte Art Negra", 'assets/images/jarra-leche-lechera-dibujar-latte-art-cafe-inoxidable-motta-europa-coffeetech-negra.png', 'Jarra Motta Latte Art Negra. Ideal para emulsionar leche. Esta fantástica lechera te ayudará a decorar tus cafés de especialidad, podrás dibujar y diseñar a tu gusto.', 6500),
            new Producto("Molinillo de Cafe Baratza Encore", 'assets/images/Encore-6-1-1.png', 'Fabricadas en Europa, las fresas cónicas de 40mm del molino Encore™, molerán cualquier tipo de café. Estas fresas cónicas producen un molido parejo que es preciso y muy fino, ideal para Espresso o cualquier otro método de obtención de café que desee. Las duras fresas de acero son duraderas y se mantendrán afiladas por años.', 1500),
            new Producto("Cafetera Fellow Duo Coffe Cool Gray", 'assets/images/Fellow-Duo-Cool-Gray.png', 'Nuestra Empresa centraliza su actividad en la importación y distribución de bebidas innovadoras en el sector Coffeeshops, siendo especialistas en este sector. Abastecemos a cafeterías, restaurantes, coctelerías, spas, bares, etc; de los más deliciosos Frappés, Smoothies, Mokas, Chai Latte, Moka Latte, Bebidas Refrescantes, Tés e Infusiones Premium. Además, somos pioneros en la incorporación de productos al mercado español, entregando la posibilidad de contar siempre con nuevas y novedosas alternativas. También, encontrarás en nuestro catálogo maquinarias para elaborar dichos productos y los más sofisticados utensilios, accesorios y herramientas para el barismo.', 2500),
            new Producto("Jarra Motta Latte Art Negra", 'assets/images/jarra-leche-lechera-dibujar-latte-art-cafe-inoxidable-motta-europa-coffeetech-negra.png', 'Jarra Motta Latte Art Negra. Ideal para emulsionar leche. Esta fantástica lechera te ayudará a decorar tus cafés de especialidad, podrás dibujar y diseñar a tu gusto.', 6500),
            new Producto("Molinillo de Cafe Baratza Encore", 'assets/images/Encore-6-1-1.png', 'Fabricadas en Europa, las fresas cónicas de 40mm del molino Encore™, molerán cualquier tipo de café. Estas fresas cónicas producen un molido parejo que es preciso y muy fino, ideal para Espresso o cualquier otro método de obtención de café que desee. Las duras fresas de acero son duraderas y se mantendrán afiladas por años.', 1500),
            new Producto("Cafetera Fellow Duo Coffe Cool Gray", 'assets/images/Fellow-Duo-Cool-Gray.png', 'Nuestra Empresa centraliza su actividad en la importación y distribución de bebidas innovadoras en el sector Coffeeshops, siendo especialistas en este sector. Abastecemos a cafeterías, restaurantes, coctelerías, spas, bares, etc; de los más deliciosos Frappés, Smoothies, Mokas, Chai Latte, Moka Latte, Bebidas Refrescantes, Tés e Infusiones Premium. Además, somos pioneros en la incorporación de productos al mercado español, entregando la posibilidad de contar siempre con nuevas y novedosas alternativas. También, encontrarás en nuestro catálogo maquinarias para elaborar dichos productos y los más sofisticados utensilios, accesorios y herramientas para el barismo.', 2500),
          ];
    }

    getProductos(){
        return this.productos
    }
}