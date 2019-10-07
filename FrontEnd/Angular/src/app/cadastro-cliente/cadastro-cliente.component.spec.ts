import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteComponent } from './cadastro-cliente.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('CadastroClienteComponent', () => {
	let component: CadastroClienteComponent;
	let fixture: ComponentFixture<CadastroClienteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CadastroClienteComponent ],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				HttpClientModule,
				MatSnackBarModule,
				RouterTestingModule
			],
			schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CadastroClienteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
