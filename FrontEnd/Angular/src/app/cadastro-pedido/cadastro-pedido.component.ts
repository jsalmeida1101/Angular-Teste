import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {ApiService} from '../api.service';

class NovoPedido {
	public Produtos: Array<Produto>;
	public ProdutosId: Array<number>;
	public ClienteId: number;
	public Cliente: string;
	public Desconto: number;
	public ValorTotal: number;
}

class Cliente {
	public Id: number;
	public Nome: string;
}

class Produto {
	public Id: number;
	public Descricao: string;
	public Valor: string;
}

@Component({
	selector: 'app-cadastro-pedido',
	templateUrl: './cadastro-pedido.component.html',
	styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {

	form: FormGroup;
	produto: Produto;
	clientes: Array<Cliente>;
	produtos: Array<Produto>;
	produtosCarrinho: Array<Produto> = [];
	clienteId: any = null;

	constructor(
		private formBuilder: FormBuilder, private api: ApiService, private router: Router, private snackBar: MatSnackBar
	) {
		this.form = this.formBuilder.group({
			clienteId: [null],
			desconto: [0, [ Validators.pattern(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/)]],
			produto: [null],
			produtos: [[], [ Validators.required]],
			produtosId: [[]],
			valorTotal: [0],
		});
	}

	ngOnInit() {
		this.api.get('clientes/')
			.then(data => this.clientes = data);

		this.api.get('produtos/')
			.then(data => this.produtos = data);
	}

	onSubmit() {
		if (this.form.controls.produtos.hasError('required')) {
			this.showMessage('Adicione ao menos um produto');
		}
		// tive que colocar isso pois a validação na tag não estava funcionando :/
		if (! this.clienteId) {
			this.showMessage('Informe o cliente');
			return;
		}

		if (this.form.invalid) { return; }

		let novoPedido = this.form.value as NovoPedido;
		novoPedido.ClienteId = this.clienteId;
		this.api.post('pedidos/', novoPedido)
			.then(() => this.goBack());

	}

	goBack() {
		this.router.navigate(['pedidos']);
	}

	changeProduto(value) {
		this.produto = value;
	}

	changeCliente(value) {
		this.clienteId = value ? value : null;
	}

	addProduto() {
		if (! this.produto) {
			this.showMessage('Informe o produto');
			return;
		}
		let produtos = this.form.controls.produtos.value;
		let produtosId = this.form.controls.produtosId.value;
		produtos = Array.isArray(produtos) ? produtos : [];
		if (produtos.some((i: Produto) => i.Id === this.produto.Id)) {
			this.showMessage('Produto já adicionado');
		} else {
			produtos.push(this.produto);
			produtosId.push(this.produto.Id);
			this.produtosCarrinho = produtos;
		}
		this.form.controls.produtos.setValue(produtos);
		this.form.controls.produtosId.setValue(produtosId);
		this.calcularTotal();
	}

	changeDesconto() {
		if (this.getValorCarrinho() <= this.getDesconto()) {
			this.showMessage('O desconto deve ser menor que o valor dos produtos');
			this.form.controls.desconto.setValue(0);
			return;
		}
		this.calcularTotal();
	}

	calcularTotal() {
		this.form.controls.valorTotal.setValue(this.getValorCarrinho() - this.getDesconto());
	}

	getValorCarrinho(): number {
		let valorTotal = 0;
		const produtos = this.form.controls.produtos.value;
		for (let i = 0; i < produtos.length; i++) {
			valorTotal += produtos[i].Valor;
		}
		return valorTotal;
	}

	getDesconto(): number {
		let desconto = 0;
		if (! isNaN(parseFloat(this.form.controls.desconto.value))) {
			desconto = this.form.controls.desconto.value;
		}
		return desconto;
	}

	showMessage(message: string) {
		this.snackBar.open(message, 'OK', {duration: 2500});
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
