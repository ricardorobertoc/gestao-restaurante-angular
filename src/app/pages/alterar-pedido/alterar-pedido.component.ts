import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { SweetAlert } from 'src/app/confgs/sweet-alert.ts.service';
import { Pedido } from 'src/app/model/Pedido';

@Component({
  selector: 'app-alterar-pedido',
  templateUrl: './alterar-pedido.component.html',
  styleUrls: ['./alterar-pedido.component.css']
})
export class AlterarPedidoComponent implements OnInit {
  
  idPedido: any;

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
    private pedidoService: PedidoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.idPedido = this.activatedRoute.snapshot.paramMap.get('id');

    this.pedidoService.buscarPedidoId(this.idPedido).subscribe((pedido: any) => {
      this.formulario = this.formBuilder.group({
        id: [pedido.id, Validators.required],
        nomeItem: [pedido.nomeItem, Validators.required],
        valor: [pedido.valor, Validators.required],
        numeroMesa: [pedido.numeroMesa, Validators.required]
      })
    })
    
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomeItem: [null, Validators.required],
      valor: [null, Validators.required],
      numeroMesa: [null, Validators.required]
    })
  }

  onSubmit(id: any) {

    if (this.formulario.valid) {

      const pedido: Pedido = new Pedido();

      pedido.id = id;
      pedido.nomeItem = this.nomeItem.value;
      pedido.valor = this.valor.value;
      pedido.numeroMesa = this.numeroMesa.value;

      this.pedidoService.atualizarPedido(pedido.id, pedido).subscribe((retorno: any) => {
        SweetAlert.exibirSucesso('Pedido ' + retorno.nomeItem + ' atualizado com sucesso!');
        this.router.navigate([`/pendentes`]);
      })

    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
    
  }

}
