import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ListarPedidos } from './pages/listar-pedidos/listar-pedidos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IncluirPedidoComponent } from './pages/incluir-pedido/incluir-pedido.component';
import { PedidosPendentesComponent } from './pages/pedidos-pendentes/pedidos-pendentes.component';
import { FecharContaComponent } from './pages/fechar-conta/fechar-conta.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorInterceptor } from './confgs/http-error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ListarPedidos,
    IncluirPedidoComponent,
    PedidosPendentesComponent,
    FecharContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
