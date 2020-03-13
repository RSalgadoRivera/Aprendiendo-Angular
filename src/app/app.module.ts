import { TenisService } from './services/tenis.service';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenisComponent } from './tenis/tenis.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.routing';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component'

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    TenisComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    TenisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
