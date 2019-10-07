import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from '../api.service';

class Mensagem {
	public Descricao: string;
	public DataHora: Date;
}

class Contato {
	public Nome: string;
}

@Component({
	selector: 'app-mensagens',
	templateUrl: './mensagens.component.html',
	styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

	mensagens: Mensagem[] = [];

	contato: Contato = new Contato();

	idContato: number;

	constructor(private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
		this.idContato = this.activatedRoute.snapshot.params['id'];
	}

	ngOnInit() {

		this.api.get<Contato>('contatos/' + this.idContato)
			.then(x => this.contato = x);

		this.api.get<Mensagem[]>('contatos/' + this.idContato + '/mensagens')
			.then(x => this.mensagens = x);
	}

	novaMensagem() {
		this.router.navigate(['contatos/' + this.idContato + '/mensagens/cadastro']);
	}

	contatos() {
		this.router.navigate(['contatos']);
	}
}


