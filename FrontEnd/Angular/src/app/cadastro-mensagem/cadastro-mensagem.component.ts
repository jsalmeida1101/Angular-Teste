import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';

class NovaMensagem {
	public IdContato: number;
	public Descricao: string;
}

@Component({
	selector: 'app-cadastro-mensagem',
	templateUrl: './cadastro-mensagem.component.html',
	styleUrls: ['./cadastro-mensagem.component.css']
})
export class CadastroMensagemComponent implements OnInit {

	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
		this.form = this.formBuilder.group({
			descricao: ['', Validators.required]
		});
	}

	ngOnInit() {
	}

	onSubmit() {

		if (this.form.invalid) {
			return;
		}

		let idContato = this.activatedRoute.snapshot.params['id'];

		let novaMensagem = this.form.value as NovaMensagem;
		novaMensagem.IdContato = idContato;

		this.api.post('mensagens/', novaMensagem)
			.then(() => this.goBack());

	}

	goBack() {
		let idContato = this.activatedRoute.snapshot.params['id'];
		this.router.navigate(['contatos/' + idContato + '/mensagens']);
	}

}
