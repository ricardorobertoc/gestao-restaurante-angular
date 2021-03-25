import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { SweetAlert } from 'src/app/confgs/sweet-alert.ts.service'
import { Pedido } from 'src/app/model/Pedido';

@Component({
  selector: 'app-pedidos-pendentes',
  templateUrl: './pedidos-pendentes.component.html',
  styleUrls: ['./pedidos-pendentes.component.css']
})
export class PedidosPendentesComponent implements OnInit {

  pedidos: any;
  public listaPedidos: Array<Pedido> = new Array<Pedido>();

  constructor(
    private pedidoService: PedidoService
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

  cancelar(id: any) {
   
  }

}
