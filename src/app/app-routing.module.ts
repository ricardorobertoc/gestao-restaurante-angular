import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPedidos } from './pages/listar-pedidos/listar-pedidos.component'
import { IncluirPedidoComponent } from './pages/incluir-pedido/incluir-pedido.component'
import { PedidosPendentesComponent } from './pages/pedidos-pendentes/pedidos-pendentes.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
