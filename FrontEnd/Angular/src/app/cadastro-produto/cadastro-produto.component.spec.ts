import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutoComponent } from './cadastro-produto.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('CadastroProdutoComponent', () => {
	let component: CadastroProdutoComponent;
	let fixture: ComponentFixture<CadastroProdutoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CadastroProdutoComponent ],
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
		fixture = TestBed.createComponent(CadastroProdutoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
