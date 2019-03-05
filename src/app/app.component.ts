import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Store, select } from '@ngrx/store';
import { State } from './reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
    loadingText: string;

    constructor(
        private router: Router,
        private auth: AuthService,
        private store: Store<State>
    ) {
        this.isLoggedIn$ = this.auth.getLoggedInStatus();
    }

    ngOnInit() {
        this.store.pipe(
            select('loading')
        ).subscribe(loading => {
            this.loadingText = loading;
        });
    }

    goHome() {
        this.router.navigate(['/'])
    }

    logout() {
        this.auth.logout();
    }
}
