import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPedidoComponent } from './cadastro-pedido.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('CadastroPedidoComponent', () => {
	let component: CadastroPedidoComponent;
	let fixture: ComponentFixture<CadastroPedidoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CadastroPedidoComponent ],
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
		fixture = TestBed.createComponent(CadastroPedidoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
