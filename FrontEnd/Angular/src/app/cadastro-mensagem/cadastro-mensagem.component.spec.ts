import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMensagemComponent } from './cadastro-mensagem.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('CadastroMensagemComponent', () => {
	let component: CadastroMensagemComponent;
	let fixture: ComponentFixture<CadastroMensagemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CadastroMensagemComponent ],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				HttpClientModule,
				MatSnackBarModule,
				RouterTestingModule
			],
			schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CadastroMensagemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
