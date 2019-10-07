import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesComponent } from './clientes.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule, MatTableModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('ClientesComponent', () => {
	let component: ClientesComponent;
	let fixture: ComponentFixture<ClientesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ClientesComponent ],
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
		fixture = TestBed.createComponent(ClientesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
