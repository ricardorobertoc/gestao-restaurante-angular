import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) { }

  buscarPedidos() {
    return this.httpClient.get(`${environment.urlBackEnd}`);
  }

  buscarPedidoId(id: any) {
    return this.httpClient.get(`${environment.urlBackEnd}/${id}`);
  }

  buscarPedidosPendentes() {
    return this.httpClient.get(`${environment.urlBackEnd}/pendentes`);
  }

  incluir(pedido: Pedido) {
    return this.httpClient.post(environment.urlBackEnd, pedido);
  }

  atualizarPedido(id: any, pedido: Pedido) {
    return this.httpClient.put(`${environment.urlBackEnd}/${id}`, pedido)
  }

}
