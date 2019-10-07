import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	@Input() title: string;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	goTo(page) {
		this.router.navigate([page]);
	}
}


