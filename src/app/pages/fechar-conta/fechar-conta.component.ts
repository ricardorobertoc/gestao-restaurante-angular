import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { SweetAlert } from 'src/app/confgs/sweet-alert.ts.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-fechar-conta',
  templateUrl: './fechar-conta.component.html',
  styleUrls: ['./fechar-conta.component.css']
})
export class FecharContaComponent implements OnInit {

  pedidos: any;
  contaMesa: any;
  numeroMesa: any;
  
  constructor(
    private pedidoService: PedidoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  buscarConcluidosMesa(numeroMesa: any) {
    this.numeroMesa = numeroMesa;
    this.pedidoService.buscarPedidosConcluidosMesa(numeroMesa).subscribe(
      (data) => {
        this.contaMesa = data;
        this.pedidos = this.contaMesa.pedidos;
        if (this.pedidos == null){
          SweetAlert.exibirAtencao(this.contaMesa.mensagem)
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  fecharConcluidosMesa(numeroMesa: any) {
    this.pedidoService.fecharPedidosConcluidosMesa(numeroMesa).subscribe();
    SweetAlert.exibirSucesso("Mesa " + numeroMesa + " fechada com sucesso")
    this.router.navigate([`/listar`])
  }

}
