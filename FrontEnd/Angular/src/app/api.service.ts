import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	url: string = environment.api_url;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(
		private http: HttpClient, private snackBar: MatSnackBar
	) {}

	get<T>(uri: string): Promise<any> {
		return new Promise(resolve => {
			this.http.get(this.url + uri)
				.subscribe(response => {
						resolve(response);
					}, error => {
						this.onError(error);
					}
				);
		});
	}

	post(uri: string, data: object): Promise<any> {
		return new Promise(resolve => {
			this.http.post(this.url + uri, JSON.stringify(data), this.httpOptions)
				.subscribe(response => {
						resolve(response);
					}, error => {
						this.onError(error);
					}
				);
		});
	}

	onError(error: any) {
		console.warn('Error', error);
		const message = typeof error.error === 'string' ? error.error : error.message;
		this.snackBar.open(message, 'OK', {duration: 2500});
	}
}
