import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import { PecasComponent } from './views/pecas/pecas.component';
import { ProcessoComponent } from './views/processo/processo.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent},
    { path: 'processos', component: ProcessoComponent },
    { path: 'movimentacoes', component: MovimentacoesComponent },
    { path: 'pecas', component: PecasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
