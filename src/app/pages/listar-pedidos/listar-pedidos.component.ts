import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-content',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidos implements OnInit {

  pedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.pedidoService.buscarPedidos().subscribe(
      (data) => {
        console.log(data);
        this.pedidos = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
