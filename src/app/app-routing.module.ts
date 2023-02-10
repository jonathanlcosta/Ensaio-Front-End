import { ExcluirEnsaioComponent } from './ensaios/excluir-ensaio/excluir-ensaio.component';
import { EditarEnsaioComponent } from './ensaios/editar-ensaio/editar-ensaio.component';
import { ListaEnsaioComponent } from './ensaios/lista-ensaio/lista-ensaio.component';
import { CriarEnsaioComponent } from './ensaios/criar-ensaio/criar-ensaio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/listarEnsaio', pathMatch: 'full'},
  {path: 'listarEnsaio', component: ListaEnsaioComponent},
  {path: 'criarEnsaio', component: CriarEnsaioComponent},
  {path: 'editarEnsaio/:id', component: EditarEnsaioComponent},
  {path: 'ensaios/excluirEnsaio/:id', component: ExcluirEnsaioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
