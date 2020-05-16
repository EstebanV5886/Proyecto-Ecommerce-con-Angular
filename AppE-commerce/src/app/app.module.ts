import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { from } from 'rxjs';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductosDescripcionComponent } from './components/productos-descripcion/productos-descripcion.component';
import { ProductosAlertasComponent } from './components/productos-alertas/productos-alertas.component';
import { ValuesPipe } from './pipes/values.pipe';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    TiendaComponent,
    CarritoComponent,
    ErrorPageComponent,
    ProductosDescripcionComponent,
    ProductosAlertasComponent,
    ValuesPipe,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
