import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';

class NovoCliente {
	public Nome: string;
	public Email: string;
}

@Component({
	selector: 'app-cadastro-cliente',
	templateUrl: './cadastro-cliente.component.html',
	styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
		this.form = this.formBuilder.group({
			nome: ['', Validators.required],
			email: ['', [ Validators.email,  Validators.required]]
		});
	}

	ngOnInit() {
	}

	onSubmit() {
		if (this.form.invalid) { return; }

		let novoCliente = this.form.value as NovoCliente;

		this.api.post('clientes/', novoCliente)
			.then(() => this.goBack());

	}

	goBack() {
		this.router.navigate(['clientes']);
	}
}
