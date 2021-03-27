import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { SweetAlert } from 'src/app/confgs/sweet-alert.ts.service'
import { Pedido } from 'src/app/model/Pedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-pendentes',
  templateUrl: './pedidos-pendentes.component.html',
  styleUrls: ['./pedidos-pendentes.component.css']
})
export class PedidosPendentesComponent implements OnInit {

  pedidos: any;
  public listaPedidos: Array<Pedido> = new Array<Pedido>();

  constructor(
    private pedidoService: PedidoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pedidoService.buscarPedidosPendentes().subscribe(
      (data) => {
        console.log(data);
        this.pedidos = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  cancelar(pedido: Pedido) {
    pedido.situacao = "CANCELADO";
    this.atualizar(pedido);
  }

  finalizar(pedido: Pedido) {
    pedido.situacao = "CONCLUIDO";
    this.atualizar(pedido);
  }

  atualizar(pedido: Pedido) {
    this.pedidoService.atualizarPedido(pedido.id, pedido).subscribe((retorno: any) => {
      SweetAlert.exibirSucesso('Pedido ' + retorno.nomeItem + ' alterado com sucesso!').then(() => {
        this.ngOnInit();
      })
    })
  }

  alterarPedido(id: any) {
    this.router.navigate([`/alterar/${id}`])
  }

}
