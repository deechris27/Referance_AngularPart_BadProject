import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment/moment';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { NavigationEnd } from '@angular/router';

declare const $: any;
declare var swal: any;

declare interface Property {
    title?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    latitude?: string;
    longitude?: string;
    about?: string;
    type?: number;
    pImage?: any;
    owner_id?: any;
    status?: any;
    landmark?: any;
    rooms?: any;
    area?: any;
    garden_area?: any;
    nearby_railway?: any;
    nearby_school?: any;
    nearby_busstop?: any;
    additional_rules?: any;
    details?: any;
    rent?: any;
    deposit?: any;
    visit_days?: any;
    visit_timings?: any;
    notice_period?: any;
    zipcode?: any;
}

@Component({
    selector: 'app-np-cmp',
    templateUrl: './np.component.html',
    styleUrls: ['./np.component.css']
})

export class NpComponent implements OnInit {

    @Input() multiple: boolean = false;
    private url: any;
    public property: Property;
    private imageId: any;
    private sub: any;
    public about: any;
    private apiPath: string;
    private propId: any;
    public status: any;
    private amenities: any[] = [];
    private active = 1;
    private amenity: any[] = [];
    public aptDate: any;
    updProperty = false;

    constructor(private http: Http,
        private el: ElementRef,
        private toastr: ToastrService,
        private router: ActivatedRoute,
        private rout: Router,
        dateAdapter: DateAdapter<NativeDateAdapter>
    ) {
        dateAdapter.setLocale('en-IN');
    }

    @ViewChild("fileinput") fileInput;
    @ViewChild("imgPreview") imgPreview;
    @ViewChild("uploadButton") uploadButton;

    ngOnInit() {
        $.material.options.autofill = true;
        $.material.init();

        this.rout.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this.property = {
            title: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zip: '',
            latitude: '',
            longitude: '',
            about: '',
            owner_id: '',
            status: ''
        }

        $('#updFooter').hide();

        // Wizard Initialization
        $('.wizard-card').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',

            onNext: function (tab: any, navigation: any, index: any) {
                const $valid = $('.wizard-card form').valid();
                if (!$valid) {
                    //$validator.focusInvalid();
                    return false;
                }
                window.scrollTo(0, 0)

            },

            onInit: function (tab: any, navigation: any, index: any) {

                // check number of tabs and fill the entire row
                const $total = navigation.find('li').length;
                let $width = 100 / $total;
                const $wizard = navigation.closest('.wizard-card');

                const $display_width = $(document).width();

                if ($display_width < 600 && $total > 3) {
                    $width = 50;
                }

                navigation.find('li').css('width', $width + '%');
                const $first_li = navigation.find('li:first-child a').html();
                const $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.wizard-card .wizard-navigation').append($moving_div);

                // this.refreshAnimation($wizard, index);
                const total_steps = $wizard.find('li').length;
                let move_distance = $wizard.width() / total_steps;
                const step_width = move_distance;
                move_distance *= index;

                const $current = index + 1;

                if ($current === 1) {
                    move_distance -= 8;
                } else if ($current === total_steps) {
                    move_distance += 8;
                }

                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

                });

                $('.moving-tab').css('transition', 'transform 0s');
            },

            onTabClick: function (tab: any, navigation: any, index: any) {

                const $valid = $('.wizard-card form').valid();

                if (!$valid) {
                    return false;
                } else {
                    return true;
                }
            },

            onTabShow: function (tab: any, navigation: any, index: any) {
                const $total = navigation.find('li').length;
                let $current = index + 1;

                const $wizard = navigation.closest('.wizard-card');

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                } else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }

                const button_text = navigation.find('li:nth-child(' + $current + ') a').html();

                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);

                const checkbox = $('.footer-checkbox');

                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                } else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }

                // this.refreshAnimation($wizard, index);
                const total_steps = $wizard.find('li').length;
                let move_distance = $wizard.width() / total_steps;
                const step_width = move_distance;
                move_distance *= index;

                $current = index + 1;

                if ($current === 1) {
                    move_distance -= 8;
                } else if ($current === total_steps) {
                    move_distance += 8;
                }

                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });


        let amenitiesFun = this;

        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
                let removeItem = amenitiesFun.amenities.indexOf($(this).find('[type="checkbox"]').attr('value'));
                amenitiesFun.amenities.splice(removeItem, 1);
                amenitiesFun.amenity = [];
                for (let a of amenitiesFun.amenities) {
                    let obj = {};
                    obj[a] = 1;
                    amenitiesFun.amenity.push(obj);
                }
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
                amenitiesFun.amenities.push($(this).find('[type="checkbox"]').attr('value'));
                amenitiesFun.amenity = [];
                for (let a of amenitiesFun.amenities) {
                    let obj = {};
                    obj[a] = 1;
                    amenitiesFun.amenity.push(obj);
                }
            }
        });

        $('[data-toggle="toggle"]').click(function () {
            if ($(this).prop('checked')) {
                amenitiesFun.active = 1;
            } else {
                amenitiesFun.active = 0;
            }
        });

        $('.set-full-height').css('height', 'auto');

        this.apiPath = '/api/addProperty';
        let imgPrv = this.imgPreview.nativeElement;

        this.sub = this.router.params.subscribe(params => {
            if (params['id'] !== undefined && params['title'] !== undefined) {
                this.property.title = params['title'];
                this.property.address = params['address'] === 'null' ? '' : params['address'];
                this.property.city = params['city'] === 'null' ? '' : params['city'];
                this.property.state = params['state'] === 'null' ? '' : params['state'];
                this.property.country = params['country'] === 'null' ? '' : params['country'];
                this.property.zip = params['zipcode'] === 'null' ? '' : params['zipcode'];
                this.property.latitude = params['latitude'] === 'null' ? '' : params['latitude'];
                this.property.longitude = params['longitude'] === 'null' ? '' : params['longitude'];
                this.about = params['details'] === 'null' ? '' : params['details'];
                this.property.status = params['status'] === 'null' ? '' : params['status'];
                this.property.type = params['type'] === 'null' ? '' : params['type'];
                this.property.rooms =params['rooms'] === 'null' ? '' : params['rooms'];
                this.property.area = params['area'] === 'null' ? '' : params['area'];
                this.property.garden_area = params['garden_area'] === 'null' ? '' : params['garden_area'];
                this.property.landmark = params['landmark'] === 'null' ? '' : params['landmark'];
                this.property.nearby_school = params['nearby_school'] === 'null' ? '' : params['nearby_school'];
                this.property.nearby_busstop = params['nearby_busstop'] === 'null' ? '' : params['nearby_busstop'];
                this.property.nearby_railway = params['nearby_railway'] === 'null' ? '' : params['nearby_railway'];
                //this.property.kyc = params['kyc_check'] === 'null' ? '' : params['kyc_check'];
                //this.property.profile_picture_needed = params['profile_picture_needed'] === 'null' ? '' : params['profile_picture_needed'];
                //this.property.bank_details_needed = params['bank_details_needed'] === 'null' ? '' : params['bank_details_needed'];
                //this.property.smoking = params['smoking'] === 'null' ? '' : params['smoking'];
                //this.property.allow_pets = params['allow_pets'] === 'null' ? '' : params['allow_pets'];
                //this.property.allow_parties = params['allow_parties'] === 'null' ? '' : params['allow_parties'];
                this.property.additional_rules = params['additional_rules'] === 'null' ? '' : params['additional_rules'];
                //this.property.move_in = params['move_in'] === 'null' ? '' : params['move_in'];
                this.property.deposit = params['deposit'] === 'null' ? '' : params['deposit'];
                this.property.visit_days = params['visit_days'] === 'null' ? '' : params['visit_days'];
                this.property.visit_timings = params['visit_timings'] === 'null' ? '' : params['visit_timings'];
                this.property.notice_period = params['notice_period'] === 'null' ? '' : params['notice_period'];
                //this.property.params['active'] === 'null' ? '' : params['active'];


                imgPrv.src = "http://studphotos.s3.amazonaws.com/" + params['owner_id'] + "_" + params['id'] + ".jpg";

                this.apiPath = "/api/updateProperty/" + params['id'];
                this.propId = params['id'];

            } else if (params['id'] !== undefined) {
                this.http.get('/api/propDetails/' + params['id'])
                    .toPromise()
                    .then(result => {
                        this.property = result.json().data.results;
                        imgPrv.src = "http://studphotos.s3.amazonaws.com/" + this.property.owner_id + "_" + params['id'] + ".jpg";

                        $('#addFooter').hide();
                        $('#updFooter').show();

                        this.propId = params['id'];

                        let prop = result.json().data.results;
                        //this.aptDate = new Date(prop.move_in);

                        this.aptDate = new Date(moment(prop.move_in).format('YYYY-MM-DD'));


                        if (prop.kyc_check == 1) {
                            $('#kyc_check').addClass('active');
                            $('#kyc_check').find('[type="checkbox"]').attr('checked', 'true');
                        }

                        if (prop.profile_picture_needed == 1) {
                            $('#profile_picture_needed').addClass('active');
                            $('#profile_picture_needed').find('[type="checkbox"]').attr('checked', 'true');
                        }

                        if (prop.bank_details_needed == 1) {
                            $('#bank_details_needed').addClass('active');
                            $('#bank_details_needed').find('[type="checkbox"]').attr('checked', 'true');
                        }

                        if (prop.smoking == 1) {
                            $('#smoking').addClass('active');
                            $('#smoking').find('[type="checkbox"]').attr('checked', 'true');
                        }

                        if (prop.allow_pets == 1) {
                            $('#allow_pets').addClass('active');
                            $('#allow_pets').find('[type="checkbox"]').attr('checked', 'true');
                        }

                        if (prop.allow_parties == 1) {
                            $('#allow_parties').addClass('active');
                            $('#allow_parties').find('[type="checkbox"]').attr('checked', 'true');
                        }

                        let amenities = result.json().data.results.amenities[0];
                        for (let k in amenities) {
                            if (amenities[k] == 1) {
                                $('#' + k).addClass('active');
                                $('#' + k).find('[type="checkbox"]').attr('checked', 'true');
                            }
                        }

                        this.updProperty = true;

                    });
            }
        });
    }

    readUrl(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event: any) => {
                let imgPrv = this.imgPreview.nativeElement;
                imgPrv.src = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    upload(form: NgForm) {

        var data = {
            title: form.value.title,
            ownerId: localStorage.getItem("userId"),
            address: form.value.address,
            city: form.value.city,
            state: form.value.state,
            country: form.value.country,
            zipcode: form.value.zip,
            latitude: form.value.latitude,
            longtitude: form.value.longtitude,
            details: form.value.about,
            landmark: form.value.landmark,
            active: this.active,
            type: this.property.type,
            rooms: form.value.rooms,
            area: form.value.area,
            garden: form.value.garden_area,
            schools: form.value.schools,
            busstop: form.value.busstop,
            station: form.value.station,
            facility: this.amenity,
            movein: form.value.aptDate,
            rent: form.value.rent,
            deposit: form.value.deposit,
            visitdays: form.value.visitdays,
            visittime: form.value.visittime,
            notice: form.value.notice,
            additional_rules: form.value.additional_rules
        }

        this.http.post(this.apiPath, data)
            .toPromise()
            .then(result => {
                var self = this;
                swal({
                    title: 'Are you sure?',
                    text: 'You want to submit this property?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    confirmButtonText: 'Yes, Submit it!',
                    buttonsStyling: false
                }).then(function () {
                    swal({
                        title: 'Property Submitted!',
                        text: 'Your property is under validation, it will published within 24 hrs after Flarow team verification.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    });
                });

                this.imageId = result.json().data.data;

                if (this.imageId === undefined) {
                    this.imageId = this.propId;
                }

                if (!result.json().errors) {

                    //this.toastr.success('Property details updated', 'Flarow!');

                    this.imageId = data.ownerId + "_" + this.imageId;
                    let fileBrowser = this.fileInput.nativeElement;

                    if (fileBrowser.files.length === 0) { return; };

                    let files: FileList = fileBrowser.files;

                    const formData = new FormData();
                    for (let i = 0; i < files.length; i++) {
                        formData.append("image", files[i]);
                        formData.append("name", this.imageId);
                    }

                    this.http
                        .post('/api/s3upload', formData)
                        .subscribe(result => {
                            let imgPrv = this.imgPreview.nativeElement;
                            imgPrv.src = "http://studphotos.s3.amazonaws.com/img/800x500.jpg";
                        });

                    this.rout.navigate(['/dashboard']);
                }
            });

    }

    ngAfterViewInit() {
        $('.wizard-card').each(function () {

            const $wizard = $(this);
            const index = $wizard.bootstrapWizard('currentIndex');
            // this.refreshAnimation($wizard, index);

            const total_steps = $wizard.find('li').length;
            let move_distance = $wizard.width() / total_steps;
            const step_width = move_distance;
            move_distance *= index;

            const $current = index + 1;

            if ($current === 1) {
                move_distance -= 8;
            } else if ($current === total_steps) {
                move_distance += 8;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

            });

            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
        });
    }

    updatePropStatus() {
        var data = {
            status: this.property.status
        };

        this.http.post('/api/updPropStatus/' + this.propId, data)
            .toPromise()
            .then(result => {
                this.toastr.success('Property status updated', 'Flarow!');
            });
    }

    onTypeChange(typ) {
        this.property.type = typ;
    }

    onStatusChange(stat) {
        this.property.status = stat;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
