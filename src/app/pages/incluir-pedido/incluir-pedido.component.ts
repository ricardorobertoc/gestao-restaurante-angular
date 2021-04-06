import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedido.service';
import { SweetAlert } from 'src/app/confgs/sweet-alert.ts.service';
import { Pedido } from 'src/app/model/Pedido';

@Component({
  selector: 'app-incluir-pedido',
  templateUrl: './incluir-pedido.component.html',
  styleUrls: ['./incluir-pedido.component.css']
})
export class IncluirPedidoComponent implements OnInit {

  formulario = new FormGroup({
    nomeItem: new FormControl(''),
    valor: new FormControl(''),
    numeroMesa: new FormControl('')
  });

  get nomeItem(): any { return this.formulario.get('nomeItem') }
  get valor(): any { return this.formulario.get('valor') }
  get numeroMesa(): any { return this.formulario.get('numeroMesa') }


  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomeItem: [null, Validators.required],
      valor: [null, Validators.required],
      numeroMesa: [null, Validators.required]
    })
  }

  onSubmit() {

    if (this.formulario.valid) {

      const pedido: Pedido = new Pedido();

      pedido.nomeItem = this.nomeItem.value;
      pedido.valor = this.valor.value;
      pedido.numeroMesa = this.numeroMesa.value;
      pedido.situacao = "NOVO"

      this.pedidoService.incluir(pedido).subscribe((retorno: any) => {
        SweetAlert.exibirSucesso('Pedido ' + retorno.nomeItem + ' incluído com sucesso!')
      })

    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
    
  }

}
