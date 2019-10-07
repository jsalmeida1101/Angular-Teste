import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';

class NovoContato {
	public Nome: string;
}

@Component({
	selector: 'app-cadastro-contato',
	templateUrl: './cadastro-contato.component.html',
	styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {

	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
		this.form = this.formBuilder.group({
			nome: ['', Validators.required]
		});
	}

	ngOnInit() {
	}

	goBack() {
		this.router.navigate(['contatos']);
	}

	onSubmit() {

		if (this.form.invalid) {
			return;
		}

		let novoContato = this.form.value as NovoContato;

		this.api.post('contatos/', novoContato)
			.then(() => {
				this.router.navigate(['contatos']);
			});

	}
}
