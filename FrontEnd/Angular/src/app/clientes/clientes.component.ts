import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';

class Cliente {
	public Id: number;
	public Nome: string;
	public Email: string;
}

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	clientes: Cliente[] = [];

	columns: Array<string> = ['Id', 'Nome', 'Email'];

	constructor(private api: ApiService, private router: Router) { }

	ngOnInit() {
		this.api.get<Cliente[]>('clientes/')
			.then(x => this.clientes = x);
	}

	novo() {
		this.router.navigate(['clientes/cadastro']);
	}
}


