import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    constructor(private element: ElementRef, private authService: AuthService, private router: Router) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }
    
    isMobileMenu() {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };

    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    onSignin(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authService.login(email, password)
            .subscribe(result => {
                console.log(result);
                if (result === true) {
                    // login successful
                    this.router.navigate(['/dashboard']);
                } else {
                    // login failed
                    console.log("login failed");
                    //this.error = 'Username or password is incorrect';
                    //this.loading = false;
                }
            });
    }

}
