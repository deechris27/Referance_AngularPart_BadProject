import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

declare const $: any;

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

    items: any;
    rClicks = 0;
    rShow = true;
    ownerItems: any;
    tenantItems: any;

    currentUser : any;
    showReg = 0;

    mainSlideConfig = {
        fade: true,
        arrows: false,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    }

    ownerSlideConfig = {
        "slidesToShow": 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }

        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }]
    };

    tenantSlideConfig = {
        "slidesToShow": 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }

        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }]
    };    

    slideConfig = {
        "slidesToShow": 3, "slidesToScroll": 1,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    };


    afterChange(e) {
        console.log('afterChange');
    }

    constructor(private router: Router, private http: Http) {
        this.currentUser = localStorage.getItem("name");
        
        if(this.currentUser !== null && this.currentUser != 'null'){
            this.showReg = 1;
        }else{
            this.showReg = 0;
        } 

        console.log(this.showReg);

        this.http.get('/api/property/')
            .toPromise()
            .then(result => {
                this.items = result.json().data.result;
            });

        this.ownerItems = [{
            imgSrc: "http://studphotos.s3.amazonaws.com/images/properties.jpg",
            text: "Collect Rent Online"
        }, {
            imgSrc: "http://studphotos.s3.amazonaws.com/images/agreement.jpg",
            text: "Property Management"
        }, {
            imgSrc: "http://studphotos.s3.amazonaws.com/images/rental.jpg",
            text: "Verified Tenants"
        }];

        this.tenantItems = [{
            imgSrc: "http://studphotos.s3.amazonaws.com/images/properties.jpg",
            text: "Manage Monthly Rentals"
        }, {
            imgSrc: "http://studphotos.s3.amazonaws.com/images/agreement.jpg",
            text: "Upload once Use Forever"
        }, {
            imgSrc: "http://studphotos.s3.amazonaws.com/images/rental.jpg",
            text: "Enable Transparency"
        }];        
    }

    ngOnInit() {
        let $tabsNav = $('.tabs-nav');
        let $tabsNavLis = $tabsNav.children('li');
        $tabsNav.each(function () {
            var $this = $(this);

            $this.next().children('.tab-content').stop(true, true).hide()
                .first().show();

            $this.children('li').first().addClass('active').stop(true, true).show();
        });

        $tabsNavLis.on('click', function (e) {
            var $this = $(this);

            $this.siblings().removeClass('active').end()
                .addClass('active');

            $this.parent().next().children('.tab-content').stop(true, true).hide()
                .siblings($this.find('a').attr('href')).fadeIn();

            e.preventDefault();
        });

        var hash = window.location.hash;
        var anchor = $('.tabs-nav a[href="' + hash + '"]');
        if (anchor.length === 0) {
            $(".tabs-nav li:first").addClass("active").show(); //Activate first tab
            $(".tab-content:first").show(); //Show first tab content
        } else {
            anchor.parent('li').click();
        }
    }

    onLeft() {
        this.rClicks = this.rClicks - 2;
        if (this.rClicks < this.items.length) {
            this.rShow = true;
        }
    }

    onRight() {
        this.rClicks = this.rClicks + 2;
        if (this.rClicks >= this.items.length) {
            this.rShow = false;
        }
    }

    ngAfterViewInit() {
        $('[rel="tooltip"]').tooltip();
    }
}

