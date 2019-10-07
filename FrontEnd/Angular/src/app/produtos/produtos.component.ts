import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';

class Produto {
	public Id: number;
	public Descricao: string;
	public Valor: string;
	public Foto: string;
}

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	produtos: Produto[] = [];

	columns: Array<string> = ['Id', 'Descricao', 'Valor', 'Foto'];

	constructor(private api: ApiService, private router: Router) { }

	ngOnInit() {
		this.api.get<Produto[]>('produtos/')
			.then(x => this.produtos = x);
	}

	novo() {
		this.router.navigate(['produtos/cadastro']);
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


