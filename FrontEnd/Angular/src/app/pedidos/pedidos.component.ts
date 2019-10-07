import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';

class Cliente {
	public Id: number;
	public Nome: string;
}

class Produto {
	public Id: number;
	public Descricao: string;
	public Valor: string;
}

class Pedido {
	public Id: number;
	public Descricao: string;
	public Valor: string;
	public Foto: string;
	public Cliente: Cliente;
	public Produtos: Array<Produto>;
}

@Component({
	selector: 'app-pedidos',
	templateUrl: './pedidos.component.html',
	styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

	pedidos: Pedido[] = [];

	columns: Array<string> = ['Id', 'Data', 'Valor', 'Cliente', 'Desconto', 'ValorTotal'];

	constructor(private api: ApiService, private router: Router) { }

	ngOnInit() {
		this.api.get<Pedido[]>('pedidos/')
			.then(x => this.pedidos = x);
	}

	novo() {
		this.router.navigate(['pedidos/cadastro']);
	}

	formatarDinheiro(value) {
		let decPlaces = 2;
		let decSep = ',';
		let thouSep = ' ';
		// noinspection TsLint
		let i = String(parseInt(value = Math.abs(Number(value) || 0).toFixed(decPlaces)));
		let j;
		j = (j = i.length) > 3 ? j % 3 : 0;

		return (j ? i.substr(0, j) + thouSep : '') +
			i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, '$1' + thouSep) +
			(decPlaces ? decSep + Math.abs(value - Number(i)).toFixed(decPlaces).slice(2) : '');
	}
}


