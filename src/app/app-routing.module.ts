// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaMenuComponent } from './pagina-menu/pagina-menu.component';
import { PaginaSobreComponent } from './pagina-sobre/pagina-sobre.component';
import { PaginaContatoComponent } from './pagina-contato/pagina-contato.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent }, // Página principal
  { path: 'menu', component: PaginaMenuComponent },
  { path: 'sobre', component: PaginaSobreComponent },
  { path: 'contato', component: PaginaContatoComponent },
  { path: '**', redirectTo: '' } // Redireciona para a página principal se a rota não for encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
