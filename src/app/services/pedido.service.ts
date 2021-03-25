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

  buscarPedidosPendentes() {
    return this.httpClient.get(`${environment.urlBackEnd}/pendentes`);
  }

  incluir(pedido: Pedido) {
    return this.httpClient.post(environment.urlBackEnd, pedido);
  }


}
