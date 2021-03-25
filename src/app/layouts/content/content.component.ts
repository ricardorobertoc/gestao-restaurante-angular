import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/model/pedido';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  //public listaPedidos: Array<Pedido> = new Array<Pedido>();

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

  // ngOnInit(): void {
  //   this.pedidoService.buscarPedidos().subscribe((pedidos: Array<Pedido>) => {
  //     this.listaPedidos = pedidos;
  //   })
  // }

}
