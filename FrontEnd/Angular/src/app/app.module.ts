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

// produtos
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

// pedidos
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

// home
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	// contatos
	{ path: 'contatos', component: ContatosComponent },
	{ path: 'contatos/cadastro', component: CadastroContatoComponent },

	// mensagens
	{ path: 'contatos/:id/mensagens', component: MensagensComponent },
	{ path: 'contatos/:id/mensagens/cadastro', component: CadastroMensagemComponent },

	// produtos
	{ path: 'home', component: HomeComponent },

	// clientes
	{ path: 'clientes', component: ClientesComponent },
	{ path: 'clientes/cadastro', component: CadastroClienteComponent },

	// produtos
	{ path: 'produtos', component: ProdutosComponent },
	{ path: 'produtos/cadastro', component: CadastroProdutoComponent },

	// pedidos
	{ path: 'pedidos', component: PedidosComponent },
	{ path: 'pedidos/cadastro', component: CadastroPedidoComponent },

	{ path: '', redirectTo: '/home', pathMatch: 'full' }
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
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
