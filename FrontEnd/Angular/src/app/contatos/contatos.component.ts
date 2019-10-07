import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';

class Contato {
	public Id: number;
	public Nome: string;
}

@Component({
	selector: 'app-contatos',
	templateUrl: './contatos.component.html',
	styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

	contatos: Contato[] = [];

	columns: Array<string> = ['Id', 'Nome', 'Actions'];

	constructor(private api: ApiService, private router: Router) { }

	ngOnInit() {
		this.api.get<Contato[]>('contatos/')
			.then(x => this.contatos = x);
	}

	novo() {
		this.router.navigate(['contatos/cadastro']);
	}

	mensagens(contato: Contato) {
		this.router.navigate([`contatos/${contato.Id}/mensagens`]);
	}

}


