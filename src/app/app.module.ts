import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaMenuComponent } from './pagina-menu/pagina-menu.component';
import { PaginaSobreComponent } from './pagina-sobre/pagina-sobre.component';
import { PaginaContatoComponent } from './pagina-contato/pagina-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    PaginaMenuComponent,
    PaginaSobreComponent,
    PaginaContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
