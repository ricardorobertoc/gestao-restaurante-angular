import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { SweetAlert } from 'src/app/confgs/sweet-alert.ts.service'

@Component({
  selector: 'app-fechar-conta',
  templateUrl: './fechar-conta.component.html',
  styleUrls: ['./fechar-conta.component.css']
})
export class FecharContaComponent implements OnInit {

  pedidos: any;
  
  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
  }

  buscarConcluidosMesa(numeroMesa: any) {
    this.pedidoService.buscarPedidosConcluidosMesa(numeroMesa).subscribe(
      (data) => {
        console.log(data);
        this.pedidos = data;
        if (this.pedidos.length === 0) {
          SweetAlert.exibirAtencao('Mesa ' + numeroMesa + ' não tem pedidos concluidos')
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
