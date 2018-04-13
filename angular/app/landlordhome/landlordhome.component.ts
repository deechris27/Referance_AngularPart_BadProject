import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

declare const $: any;

@Component({
    selector: 'landlordhome',
    templateUrl: 'landlordhome.component.html',
    styleUrls:['landlordhome.component.css']
})

export class LandlordHomeComponent implements OnInit, AfterViewInit {

    items : any;

    slideConfig = {
        arrows: false,
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

    constructor(private router: Router, private http: Http) {
        this.items = [{
            imgSrc: "http://studphotos.s3.amazonaws.com/images/properties.jpg",
            text: "Manage Unlimited Rented Properties"
        }, {
            imgSrc: "http://studphotos.s3.amazonaws.com/images/agreement.jpg",
            text: "Get Verified Tenants"
        }, {
            imgSrc: "http://studphotos.s3.amazonaws.com/images/rental.jpg",
            text: "Hassle Free Rental Collection"
        }];     
    } 

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();
        
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

    ngAfterViewInit() {
        $('[rel="tooltip"]').tooltip();
    }
}

