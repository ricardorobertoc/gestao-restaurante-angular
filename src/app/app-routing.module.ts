import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPedidos } from './pages/listar-pedidos/listar-pedidos.component'
import { IncluirPedidoComponent } from './pages/incluir-pedido/incluir-pedido.component'
import { PedidosPendentesComponent } from './pages/pedidos-pendentes/pedidos-pendentes.component';
import { AlterarPedidoComponent } from './pages/alterar-pedido/alterar-pedido.component';
import { DetalharPedidoComponent } from './pages/detalhar-pedido/detalhar-pedido.component';
import { FecharContaComponent } from './pages/fechar-conta/fechar-conta.component';

const routes: Routes = [
  {
    path: '',
    component: ListarPedidos,
  },
  {
    path: 'listar',
    component: ListarPedidos,
  },
  {
    path: 'incluir',
    component: IncluirPedidoComponent,
  },
  {
    path: 'pendentes',
    component: PedidosPendentesComponent,
  },
  {
    path: 'alterar/:id',
    component: AlterarPedidoComponent,
  },
  {
    path: 'detalhar',
    component: DetalharPedidoComponent,
  },
  {
    path: 'fechar-conta',
    component: FecharContaComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
