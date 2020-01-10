//Importar modulos de Router de Angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes a los cuales les quiero hacer una pagina exclusiva

import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosDescripcionComponent } from './components/productos-descripcion/productos-descripcion.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

//Array de rutas - Configuracion de rutas que voy a crear

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos-descripcion/:id', component: ProductosDescripcionComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: '**', component: ErrorPageComponent}
];

//Exportar modulo de Rutas para poder utilizarlo en la App

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);