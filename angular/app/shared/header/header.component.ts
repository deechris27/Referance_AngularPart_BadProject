import { Component, ElementRef, Input, ViewChild, OnInit  } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-header-cmp',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    test: Date = new Date();
    userId : any;
    currentUser : any;
    showLogin = 0;

    constructor(){
        this.userId = localStorage.getItem("userId");
        this.currentUser = localStorage.getItem("name");
        
        if(this.currentUser !== null && this.currentUser != 'null'){
            this.showLogin = 1;
        }else{
            this.showLogin = 0;
            this.currentUser = 'Sign In';
        }    
    }

    ngOnInit() { 
        $( "#header" ).not( "#header.not-sticky" ).clone(true).addClass('cloned unsticky').insertAfter( "#header" );
        $( "#navigation.style-2" ).clone(true).addClass('cloned unsticky').insertAfter( "#navigation.style-2" );
    
        // Logo for header style 2
        $( "#logo .sticky-logo" ).clone(true).prependTo("#navigation.style-2.cloned ul#responsive");
    
    
        // sticky header script
        var headerOffset = $("#header-container").height() * 2; // height on which the sticky header will shows
    
        $(window).scroll(function(){
            if($(window).scrollTop() >= headerOffset){
                $("#header.cloned").addClass('sticky').removeClass("unsticky");
                $("#navigation.style-2.cloned").addClass('sticky').removeClass("unsticky");
            } else {
                $("#header.cloned").addClass('unsticky').removeClass("sticky");
                $("#navigation.style-2.cloned").addClass('unsticky').removeClass("sticky");
            }
        });
    }
}
