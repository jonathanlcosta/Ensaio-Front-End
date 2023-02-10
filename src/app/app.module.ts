import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarEnsaioComponent } from './ensaios/criar-ensaio/criar-ensaio.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListaEnsaioComponent } from './ensaios/lista-ensaio/lista-ensaio.component';
import { EditarEnsaioComponent } from './ensaios/editar-ensaio/editar-ensaio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirEnsaioComponent } from './ensaios/excluir-ensaio/excluir-ensaio.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarEnsaioComponent,
    MenuComponent,
    FooterComponent,
    ListaEnsaioComponent,
    EditarEnsaioComponent,
    ExcluirEnsaioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
