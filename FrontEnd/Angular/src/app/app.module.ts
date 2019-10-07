import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImports } from './MaterialImports';

import { AppComponent } from './app.component';

// templates
import { NavbarComponent } from './templates/menu/navbar.component';

// cadastro
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ContatosComponent } from './contatos/contatos.component';

// mensagens
import { MensagensComponent } from './mensagens/mensagens.component';
import { CadastroMensagemComponent } from './cadastro-mensagem/cadastro-mensagem.component';

// clientes
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';

// home
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

// pedidos
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

// produtos
import { HomeComponent } from './home/home.component';
import {ApiService} from './api.service';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
	// contatos
	{ path: 'contatos', component: ContatosComponent },
	{ path: 'contatos/cadastro', component: CadastroContatoComponent },

	// mensagens
	{ path: 'contatos/:id/mensagens', component: MensagensComponent },
	{ path: 'contatos/:id/mensagens/cadastro', component: CadastroMensagemComponent },

	// produtos
	{ path: 'produtos', component: HomeComponent },

	// clientes
	{ path: 'clientes', component: ClientesComponent },
	{ path: 'clientes/cadastro', component: CadastroClienteComponent },

	// home
	{ path: 'produtos', component: ProdutosComponent },
	{ path: 'home/cadastro', component: CadastroProdutoComponent },

	// pedidos
	{ path: 'pedidos', component: PedidosComponent },
	{ path: 'pedidos/cadastro', component: CadastroPedidoComponent },

	{ path: '', redirectTo: '/produtos', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		CadastroContatoComponent,
		ContatosComponent,
		MensagensComponent,
		CadastroMensagemComponent,
		ClientesComponent,
		CadastroClienteComponent,
		ProdutosComponent,
		CadastroProdutoComponent,
		PedidosComponent,
		CadastroPedidoComponent,
		NavbarComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialImports,
		FormsModule,
		ReactiveFormsModule,
		ApiService,
		NavbarComponent
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
