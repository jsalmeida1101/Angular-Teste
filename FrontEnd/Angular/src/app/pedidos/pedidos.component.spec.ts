import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosComponent } from './pedidos.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule, MatTableModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('PedidosComponent', () => {
	let component: PedidosComponent;
	let fixture: ComponentFixture<PedidosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PedidosComponent ],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				HttpClientModule,
				MatSnackBarModule,
				RouterTestingModule,
				MatTableModule
			],
			schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PedidosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
