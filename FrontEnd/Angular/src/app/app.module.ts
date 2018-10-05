import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImports } from './MaterialImports';

import { AppComponent } from './app.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ContatosComponent } from './contatos/contatos.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { CadastroMensagemComponent } from './cadastro-mensagem/cadastro-mensagem.component';



const appRoutes: Routes = [
	{ path: 'contatos', component: ContatosComponent },
	{ path: 'contatos/cadastro', component: CadastroContatoComponent },
	{ path: 'contatos/:id/mensagens', component: MensagensComponent },
	{ path: 'contatos/:id/mensagens/cadastro', component: CadastroMensagemComponent },

	{ path: '', redirectTo: '/contatos', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		CadastroContatoComponent,
		ContatosComponent,
		MensagensComponent,
		CadastroMensagemComponent
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
	bootstrap: [AppComponent]
})
export class AppModule { }
