import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
import {MatSnackBar} from '@angular/material';

class NovoProduto {
	public Nome: string;
	public Email: string;
	public Foto: string;
}

@Component({
	selector: 'app-cadastro-produto',
	templateUrl: './cadastro-produto.component.html',
	styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private snackBar: MatSnackBar) {
		this.form = this.formBuilder.group({
			descricao: ['', Validators.required],
			valor: [0.00, [ Validators.pattern(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/) ]],
			foto: [null]
		});
	}

	ngOnInit() {
	}

	onSubmit() {
		if (this.form.invalid) { return; }

		let novoProduto = this.form.value as NovoProduto;

		this.api.post('produtos/', novoProduto)
			.then(() => this.goBack());
	}

	onChange(e) {
		if (e.target.files.length > 0) {
			if (e.target.files[0].size > 1000000) {
				this.snackBar.open('Arquivo muito grande', 'OK', {duration: 2500});
				this.form.controls.foto.setValue(null);
				return;
			};
			this.toBase64(e.target.files[0]).then((value) => {
				this.form.controls.foto.setValue(value);
			});
		} else {
			this.form.controls.foto.setValue(null);
		}
	}

	goBack() {
		this.router.navigate(['produtos']);
	}

	toBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}
}
