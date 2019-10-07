import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContatoComponent } from './cadastro-contato.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('CadastroContatoComponent', () => {
	let component: CadastroContatoComponent;
	let fixture: ComponentFixture<CadastroContatoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CadastroContatoComponent ],
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
		fixture = TestBed.createComponent(CadastroContatoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
