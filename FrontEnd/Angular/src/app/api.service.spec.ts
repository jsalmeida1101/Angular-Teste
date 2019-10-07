import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {NavbarComponent} from './templates/menu/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialImports} from './MaterialImports';

describe('ApiService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		declarations: [ NavbarComponent ],
		imports: [ MaterialImports, HttpClientModule ]
	}));

	it('should be created', () => {
		const service: ApiService = TestBed.get(ApiService);
		expect(service).toBeTruthy();
	});
});
