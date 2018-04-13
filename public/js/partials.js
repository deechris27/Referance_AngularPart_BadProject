(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/dialogs/student/student.dialog.html',
    '<md-dialog ng-controller="StudentDialogController as studentDialog">\n' +
    '    <form ng-submit="save()">\n' +
    '\n' +
    '        <md-toolbar>\n' +
    '            <div class="md-toolbar-tools">\n' +
    '                <h2>Student dialog</h2>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '\n' +
    '        <md-dialog-content>\n' +
    '            <div class="md-dialog-content">\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>First Name</label>\n' +
    '                        <input ng-model="studentDialog.student.fname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Last Name</label>\n' +
    '                        <input ng-model="studentDialog.student.lname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Roll Number</label>\n' +
    '                        <input ng-model="studentDialog.student.reg_no">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Aadhar Number</label>\n' +
    '                        <input ng-model="studentDialog.student.aadhar">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Blood group</label>\n' +
    '                        <md-select ng-model="studentDialog.student.blood_group">\n' +
    '                            <md-option ng-repeat="grp in bloodgrps" value="{{grp.value}}">\n' +
    '                                {{grp.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <md-radio-group ng-model="studentDialog.student.sex">\n' +
    '                            <md-radio-button class="md-primary fix-width" value="F" class="md-primary">Female</md-radio-button>\n' +
    '                            <md-radio-button class="md-primary fix-width" value="M">Male</md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                    </md-input-container>\n' +
    '                    <md-datepicker name="dobField" ng-model="studentDialog.student.dob" md-placeholder="Date of birth"\n' +
    '                                   required="" md-min-date="studentDialog.student.minDate" md-max-date="studentDialog.student.maxDate"\n' +
    '                                   md-date-filter="onlyWeekendsPredicate">\n' +
    '                    </md-datepicker>\n' +
    '                    <div class="validation-messages" ng-messages="studentForm.dobField.$error">\n' +
    '                        <div ng-message="valid">The entered value is not a date!</div>\n' +
    '                        <div ng-message="mindate">Date is too early!</div>\n' +
    '                        <div ng-message="maxdate">Date is too late!</div>\n' +
    '                        <div ng-message="filtered">Only weekends are allowed!</div>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                    <div layout-gt-sm="column" flex="10">\n' +
    '                        <img ng-src="//studphotos.s3.amazonaws.com/kurinji/{{image_source}}"  class="square-box">\n' +
    '                        <input ng-model="form.image" class="ng-hide" id="input-file-id" input-files="files"  type="file"  accept="image/*"\n' +
    '                               onchange="angular.element(this).scope().uploadedFile(this)"/>\n' +
    '                        <label for="input-file-id" class="md-button md-raised md-primary">Photo</label>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Class</label>\n' +
    '                        <md-select ng-model="studentDialog.student.class">\n' +
    '                            <md-option ng-repeat="kls in classes" value="{{kls.value}}">\n' +
    '                                {{kls.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Section</label>\n' +
    '                        <md-select ng-model="studentDialog.student.section">\n' +
    '                            <md-option ng-repeat="sec in sections" value="{{sec.value}}">\n' +
    '                                {{sec.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <!--                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                                            <label>Class Admitted</label>\n' +
    '                                            <md-select ng-model="studentDialog.student.admitted">\n' +
    '                                                <md-option ng-repeat="kls in classes" value="{{kls.value}}">\n' +
    '                                                    {{kls.display}}\n' +
    '                                                </md-option>\n' +
    '                                            </md-select>\n' +
    '                                        </md-input-container>-->\n' +
    '                    <md-datepicker ng-model="studentDialog.student.doa" md-placeholder="Date of Admission">\n' +
    '                    </md-datepicker>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Second Language</label>\n' +
    '                        <md-select ng-model="studentDialog.student.l2">\n' +
    '                            <md-option ng-repeat="lang in languages" value="{{lang.value}}">\n' +
    '                                {{lang.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Third Language</label>\n' +
    '                        <md-select ng-model="studentDialog.student.l3">\n' +
    '                            <md-option ng-repeat="lang in languages" value="{{lang.value}}">\n' +
    '                                {{lang.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Extra curricular</label>\n' +
    '                        <md-select ng-model="studentDialog.student.ex_curricular">\n' +
    '                            <md-option ng-repeat="excurricular in extracurriculars" value="{{excurricular.value}}">\n' +
    '                                {{excurricular.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Sports</label>\n' +
    '                        <md-select ng-model="studentDialog.student.sports">\n' +
    '                            <md-option ng-repeat="sport in sports" value="{{sport.value}}">\n' +
    '                                {{sport.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Transport</label>\n' +
    '                        <md-select ng-model="studentDialog.student.transport">\n' +
    '                            <md-option ng-repeat="transport in transportation" value="{{transport.value}}">\n' +
    '                                {{transport.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Fees Balance</label>\n' +
    '                        <input ng-model="studentDialog.student.fees">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <md-radio-group ng-model="studentDialog.student.type">\n' +
    '                            <md-radio-button class="md-primary" value="0" class="md-primary">Day scholar</md-radio-button>\n' +
    '                            <md-radio-button class="md-primary" value="1">Hosteler</md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Name</label>\n' +
    '                        <input ng-model="studentDialog.student.father">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Email Id</label>\n' +
    '                        <input ng-model="studentDialog.student.father_email" type="email">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Mobile</label>\n' +
    '                        <input ng-model="studentDialog.student.father_mobile">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother Name</label>\n' +
    '                        <input ng-model="studentDialog.student.mother">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother Email Id</label>\n' +
    '                        <input ng-model="studentDialog.student.mother_email" type="email">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother Mobile</label>\n' +
    '                        <input ng-model="studentDialog.student.mother_mobile">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>Address</label>\n' +
    '                    <input ng-model="studentDialog.student.address">\n' +
    '                </md-input-container>\n' +
    '        </md-dialog-content>\n' +
    '\n' +
    '        <md-dialog-actions>\n' +
    '            <md-button type="button" ng-click="studentDialog.cancel($event)">Cancel</md-button>\n' +
    '            <md-button class="md-primary md-raised" ng-click="studentDialog.save()" type ="submit">Save</md-button>\n' +
    '        </md-dialog-actions>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/dialogs/teacher/teacher.dialog.html',
    '<md-dialog ng-controller="TeacherDialogController as teacherDialog">\n' +
    '    <form ng-submit="save()">\n' +
    '\n' +
    '        <md-toolbar>\n' +
    '            <div class="md-toolbar-tools">\n' +
    '                <h2>Teacher dialog</h2>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '\n' +
    '        <md-dialog-content>\n' +
    '            <div class="md-dialog-content">\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>First Name</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.fname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Last Name</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.lname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>ID Number</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.id_no">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Aadhar Number</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.aadhar">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Blood group</label>\n' +
    '                        <md-select ng-model="teacherDialog.teacher.blood_group">\n' +
    '                            <md-option ng-repeat="grp in bloodgrps" value="{{grp.value}}">\n' +
    '                                {{grp.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <md-radio-group ng-model="teacherDialog.teacher.sex">\n' +
    '                            <md-radio-button class="md-primary fix-width" value="F" class="md-primary">Female</md-radio-button>\n' +
    '                            <md-radio-button class="md-primary fix-width" value="M">Male</md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                    </md-input-container>\n' +
    '                    <md-datepicker name="dobField" ng-model="teacherDialog.teacher.dob" md-placeholder="Date of birth"\n' +
    '                                   required="" md-min-date="teacherDialog.teacher.minDate" md-max-date="\n' +
    '                                   teacherDialog.teacher.maxDate"\n' +
    '                                   md-date-filter="onlyWeekendsPredicate">\n' +
    '                    </md-datepicker>\n' +
    '                    <div class="validation-messages" ng-messages="teacherForm.dobField.$error">\n' +
    '                        <div ng-message="valid">The entered value is not a date!</div>\n' +
    '                        <div ng-message="mindate">Date is too early!</div>\n' +
    '                        <div ng-message="maxdate">Date is too late!</div>\n' +
    '                        <div ng-message="filtered">Only weekends are allowed!</div>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                    <div layout-gt-sm="column" flex="10">\n' +
    '                        <img ng-src="//studphotos.s3.amazonaws.com/kurinji/{{image_source}}"  class="square-box">\n' +
    '                        <input ng-model="form.image" class="ng-hide" id="input-file-id" input-files="files"  type="file"  accept="image/*"\n' +
    '                               onchange="angular.element(this).scope().uploadedFile(this)"/>\n' +
    '                        <label for="input-file-id" class="md-button md-raised md-primary">Photo</label>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Qualification</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.qualification">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Major</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.major">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Institution</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.institution">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Name</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.father">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.mother">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Address</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.address">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Email ID</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.email">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mobile</label>\n' +
    '                        <input ng-model="teacherDialog.teacher.mobile">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '\n' +
    '                <md-dialog-actions>\n' +
    '                    <md-button type="button" ng-click="teacherDialog.cancel($event)">Cancel</md-button>\n' +
    '                    <md-button class="md-primary md-raised" ng-click="teacherDialog.save()" type ="submit">Save</md-button>\n' +
    '                </md-dialog-actions>\n' +
    '            </div>\n' +
    '    </form>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create_isms_form/create_isms_form.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '    <md-content md-theme="light-green" layout-gt-sm="column" layout-padding>\n' +
    '        <h1>SMS to Individual parent</h1>\n' +
    '        <p>SMS individual helps you to send SMS related to announcements, home works to a specific parent</p>\n' +
    '        <p>Please type the mobile number, type the message and press the Send SMS button</p>\n' +
    '    </md-content>\n' +
    '    <md-content layout-padding>\n' +
    '        <div>\n' +
    '            <form name="userForm">\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container flex="30">\n' +
    '                        <label>To</label>\n' +
    '                        <input md-maxlength="10" required md-no-asterisk name="mobile" ng-model="vm.mobile">\n' +
    '                        <div ng-messages="userForm.message.$error">\n' +
    '                            <div ng-message="required">This is required.</div>\n' +
    '                            <div ng-message="md-maxlength">The mobile number must be 10 digits.</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container flex="50">\n' +
    '                        <label>Message</label>\n' +
    '                        <input required md-no-asterisk name="message" ng-model="vm.message">\n' +
    '                        <div ng-messages="userForm.message.$error">\n' +
    '                            <div ng-message="required">Please fill the message field to proceed</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-button type="submit" class="md-primary md-raised">Send SMS</md-button>\n' +
    '                </div>\n' +
    '\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </md-content>\n' +
    '</form>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create_entry_form/create_entry_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Manual Attendance</h1>\n' +
    '</md-content>\n' +
    '<md-content layout-padding>\n' +
    '    <div>\n' +
    '        <md-tabs md-dynamic-height md-border-bottom>\n' +
    '            <md-tab label="Student entry">\n' +
    '                <md-content class="md-padding">\n' +
    '                    <form name="userForm" ng-submit="vm.submit()">\n' +
    '                        <div layout-gt-sm="column" flex="30">\n' +
    '                            <div layout-gt-sm="row">\n' +
    '                                <md-input-container class="md-block" flex-gt-sm>\n' +
    '                                    <label>Roll Number</label>\n' +
    '                                    <input ng-model="vm.regno">\n' +
    '                                </md-input-container>\n' +
    '                            </div>\n' +
    '                            <md-input-container class="md-block">\n' +
    '                                <label>Reason</label>\n' +
    '                                <input ng-model="vm.reason">\n' +
    '                            </md-input-container>\n' +
    '\n' +
    '                            <div layout-gt-sm="row">\n' +
    '                                <md-button type="submit" class="md-primary md-raised">Save & Send SMS</md-button>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </md-content>\n' +
    '            </md-tab>\n' +
    '            <md-tab label="Teacher entry">\n' +
    '                <md-content class="md-padding">\n' +
    '                    <form name="teacherForm" ng-submit="vm.teacherSubmit()">\n' +
    '                        <div layout-gt-sm="column" flex="30">\n' +
    '                            <div layout-gt-sm="row">\n' +
    '                                <md-input-container class="md-block" flex-gt-sm>\n' +
    '                                    <label>Teacher id</label>\n' +
    '                                    <input ng-model="vm.idno">\n' +
    '                                </md-input-container>\n' +
    '                            </div>\n' +
    '                            <md-input-container class="md-block">\n' +
    '                                <label>Reason for manual entry</label>\n' +
    '                                <input ng-model="vm.reason">\n' +
    '                            </md-input-container>\n' +
    '\n' +
    '                            <div layout-gt-sm="row">\n' +
    '                                <md-button type="submit" class="md-primary md-raised">Save</md-button>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </form>\n' +
    '                </md-content>\n' +
    '            </md-tab>\n' +
    '        </md-tabs>\n' +
    '</md-content>\n' +
    '</div>\n' +
    '</md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create_print_form/create_print_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Customer Bill</h1>\n' +
    '</md-content>\n' +
    '\n' +
    '<div class="center-contents">\n' +
    '    <md-content layout-padding>\n' +
    '        <div id="printThisElement">\n' +
    '            <div class="divHeader">\n' +
    '                <div layout="row">\n' +
    '                    <div layout="column" layout-sm="column" flex="30">\n' +
    '                        <img src="/img/icons/logo.jpg" class="Footer-logo"></img>\n' +
    '                    </div>\n' +
    '                    <div layout="column" layout-sm="column" flex="40"></div>\n' +
    '                    <div layout="column" layout-sm="column" flex="30">\n' +
    '                        <Label>{{vm.branch.address1}}</Label>\n' +
    '                        <Label>{{vm.branch.address2}}</Label>\n' +
    '                        <Label>{{vm.branch.city}}, {{vm.branch.state}}</Label>\n' +
    '                        <Label>{{vm.branch.phoneNumber}}</Label>\n' +
    '                        <Label>{{vm.branch.mobile}}</Label>\n' +
    '                        <Label>{{vm.branch.emailId}}</Label>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <md-divider></md-divider>\n' +
    '            </div>\n' +
    '            <div layout="row">\n' +
    '                <div layout="column" layout-sm="column" flex="70">\n' +
    '                    <md-subheader class="md-primary">Patient details</md-subheader>\n' +
    '                    <Label>{{vm.patient.name}}</Label>\n' +
    '                    <Label>{{vm.patient.address}}</Label>\n' +
    '                    <Label>{{vm.patient.mobile}}</Label>\n' +
    '                    <Label>{{vm.patient.emailId}}</Label>\n' +
    '                    <md-subheader class="md-primary">Referring Physician</md-subheader>\n' +
    '                    <Label>{{vm.doctor.name}}</Label>\n' +
    '                    <Label>{{vm.doctor.address}}</Label>\n' +
    '                    <Label>{{vm.doctor.phoneNumber}}</Label>\n' +
    '                </div>\n' +
    '                <div layout="row" layout-sm="column" flex="30" layout-align="right">\n' +
    '                    <table id="meta">\n' +
    '                        <tr>\n' +
    '                            <td class="meta-head">Invoice #</td>\n' +
    '                            <td><div id="invoice">{{vm.bill.billNo}}</div></td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '\n' +
    '                            <td class="meta-head">Date</td>\n' +
    '                            <td><div id="date">{{vm.bill.billDate}}</div></td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                            <td class="meta-head">Amount Due</td>\n' +
    '                            <td><div class="due">{{vm.bill.totalCost|currency :\'Rs.\'}}</div></td>\n' +
    '                        </tr>\n' +
    '\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <md-table-container>\n' +
    '                <table md-table  md-progress="promise">\n' +
    '                    <thead md-head md-order="query.order" md-on-reorder="getDesserts">\n' +
    '                        <tr md-row>\n' +
    '                            <th md-column md-order-by="nameToLower"><span>Tests</span></th>\n' +
    '                            <th md-column md-order-by="calories.value"><span>Description</span></th>\n' +
    '                            <th md-column>Cost (Rs.)</th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody md-body>\n' +
    '                        <tr md-row  md-select-id="name" md-auto-select ng-repeat="test in vm.billData">\n' +
    '                            <td md-cell>{{test.testName}}</td>\n' +
    '                            <td md-cell>{{test.remarks}}</td>\n' +
    '                            <td md-cell>{{test.cost|currency :\'Rs.\'}} </td>\n' +
    '                        </tr>\n' +
    '                        <tr>\n' +
    '                    <md-divider></md-divider>\n' +
    '                    <td colspan="1" class="blank"> </td>\n' +
    '                    <td colspan="1" class="total-line">Subtotal</td>\n' +
    '                    <td class="total-value"><div id="subtotal">{{vm.billTotal.subTotal|currency :\'Rs.\'}}</div></td>\n' +
    '                    </tr>\n' +
    '                    <div ng-if="vm.billTotal.discount > 0.00">\n' +
    '                        <tr>\n' +
    '                            <td colspan="1" class="blank"> </td>\n' +
    '                            <td colspan="1" class="total-line">Discount</td>\n' +
    '\n' +
    '                            <td class="total-value"><div id="paid">{{vm.billTotal.discount|currency :\'Rs.\'}}</div></td>\n' +
    '                        </tr>\n' +
    '                    </div>\n' +
    '                    <tr>\n' +
    '                        <td colspan="1" class="blank"> </td>\n' +
    '                        <td colspan="1" class="total-line balance">Total</td>\n' +
    '                        <td class="total-value balance"><div class="due">{{vm.billTotal.total|currency :\'Rs.\'}}</div></td>\n' +
    '                    </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </md-table-container>\n' +
    '        </div>\n' +
    '        <div layout-gt-sm="row">\n' +
    '            <md-button class="md-primary md-raised" ng-click="vm.print(\'printThisElement\')">\n' +
    '                Print</md-button>\n' +
    '        </div>\n' +
    '    </md-content>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create_sms_form/create_sms_form.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '    <md-content md-theme="light-green" layout-gt-sm="column" layout-padding>\n' +
    '        <h1>SMS blast</h1>\n' +
    '        <p>SMS blasts helps you to send SMS related to announcements, home works to a specific class, multiple classes or for the whole school</p>\n' +
    '        <p>Please select class, type the message (maxium of 160 characters) and press the Send SMS button</p>\n' +
    '    </md-content>\n' +
    '    <md-content layout-padding>\n' +
    '        <div>\n' +
    '            <form name="userForm">\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container flex="30">\n' +
    '                        <label>To</label>\n' +
    '                        <md-select required md-no-asterisk multiple name="to" ng-model="vm.class">\n' +
    '                            <md-option ng-repeat="kls in classes" value="{{kls.class}}">\n' +
    '                                {{kls.class}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container flex="50">\n' +
    '                        <label>Message</label>\n' +
    '                        <input md-maxlength="160" required md-no-asterisk name="message" ng-model="vm.message">\n' +
    '                        <div ng-messages="userForm.message.$error">\n' +
    '                            <div ng-message="required">This is required.</div>\n' +
    '                            <div ng-message="md-maxlength">The message must be less than 160 characters long.</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-button type="submit" class="md-primary md-raised">Send SMS</md-button>\n' +
    '                </div>\n' +
    '\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </md-content>\n' +
    '</form>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create_student_form/create_student_form.component.html',
    '<form name="studentForm" ng-submit="vm.submit()">\n' +
    '    <md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '        <h1>Register new Student</h1>\n' +
    '    </md-content>\n' +
    '    <md-content layout-padding>\n' +
    '        <div>\n' +
    '            <form name="patientForm">\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>First Name</label>\n' +
    '                        <input ng-model="vm.fname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Last Name</label>\n' +
    '                        <input ng-model="vm.lname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Roll Number</label>\n' +
    '                        <input ng-model="vm.regno">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Aadhar Number</label>\n' +
    '                        <input ng-model="vm.aadhar">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Blood group</label>\n' +
    '                        <md-select ng-model="vm.bloodgrp">\n' +
    '                            <md-option ng-repeat="grp in bloodgrps" value="{{grp.value}}">\n' +
    '                                {{grp.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <md-radio-group ng-model="vm.gender">\n' +
    '                            <md-radio-button class="md-primary fix-width" value="F" class="md-primary">Female</md-radio-button>\n' +
    '                            <md-radio-button class="md-primary fix-width" value="M">Male</md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                    </md-input-container>\n' +
    '                    <md-datepicker name="dobField" ng-model="vm.dob" md-placeholder="Date of birth"\n' +
    '                                   required="" md-min-date="vm.minDate" md-max-date="vm.maxDate"\n' +
    '                                   md-date-filter="onlyWeekendsPredicate">\n' +
    '                    </md-datepicker>\n' +
    '                    <div class="validation-messages" ng-messages="studentForm.dobField.$error">\n' +
    '                        <div ng-message="valid">The entered value is not a date!</div>\n' +
    '                        <div ng-message="mindate">Date is too early!</div>\n' +
    '                        <div ng-message="maxdate">Date is too late!</div>\n' +
    '                        <div ng-message="filtered">Only weekends are allowed!</div>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                    <div layout-gt-sm="column" flex="10">\n' +
    '                        <img ng-src="{{image_source}}"  class="square-box">\n' +
    '                        <input ng-model="form.image" class="ng-hide" id="input-file-id" input-files="files"\n' +
    '                               type="file"  accept="image/*"\n' +
    '                               onchange="angular.element(this).scope().uploadedFile(this)"/>\n' +
    '                        <label for="input-file-id" class="md-button md-raised md-primary">Upload Photo</label>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Class</label>\n' +
    '                        <md-select ng-model="vm.class">\n' +
    '                            <md-option ng-repeat="kls in classes" value="{{kls.value}}">\n' +
    '                                {{kls.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Section</label>\n' +
    '                        <md-select ng-model="vm.section">\n' +
    '                            <md-option ng-repeat="sec in sections" value="{{sec.value}}">\n' +
    '                                {{sec.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Class Admitted</label>\n' +
    '                        <md-select ng-model="vm.admitted">\n' +
    '                            <md-option ng-repeat="kls in classes" value="{{kls.value}}">\n' +
    '                                {{kls.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-datepicker ng-model="vm.doa" md-placeholder="Date of Admission">\n' +
    '                    </md-datepicker>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Second Language</label>\n' +
    '                        <md-select ng-model="vm.l2">\n' +
    '                            <md-option ng-repeat="lang in languages" value="{{lang.value}}">\n' +
    '                                {{lang.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Third Language</label>\n' +
    '                        <md-select ng-model="vm.l3">\n' +
    '                            <md-option ng-repeat="lang in languages" value="{{lang.value}}">\n' +
    '                                {{lang.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Extra curricular</label>\n' +
    '                        <md-select ng-model="vm.excurricular">\n' +
    '                            <md-option ng-repeat="excurricular in extracurriculars" value="{{excurricular.value}}">\n' +
    '                                {{excurricular.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Sports</label>\n' +
    '                        <md-select ng-model="vm.sport">\n' +
    '                            <md-option ng-repeat="sport in sports" value="{{sport.value}}">\n' +
    '                                {{sport.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Transport</label>\n' +
    '                        <md-select ng-model="vm.transport">\n' +
    '                            <md-option ng-repeat="transport in transportation" value="{{transport.value}}">\n' +
    '                                {{transport.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Fees Balance</label>\n' +
    '                        <input ng-model="vm.fees">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <md-radio-group ng-model="vm.type">\n' +
    '                            <md-radio-button class="md-primary" value="D" class="md-primary">Day scholar</md-radio-button>\n' +
    '                            <md-radio-button class="md-primary" value="H">Hosteler</md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                    </md-input-container>\n' +
    '\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Name</label>\n' +
    '                        <input ng-model="vm.father">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Email Id</label>\n' +
    '                        <input ng-model="vm.femail" type="email">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Mobile</label>\n' +
    '                        <input ng-model="vm.fmobile">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother Name</label>\n' +
    '                        <input ng-model="vm.mother">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother Email Id</label>\n' +
    '                        <input ng-model="vm.memail" type="email">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother Mobile</label>\n' +
    '                        <input ng-model="vm.mmobile">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <md-input-container class="md-block">\n' +
    '                    <label>Address</label>\n' +
    '                    <input ng-model="vm.address">\n' +
    '                </md-input-container>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-button type="submit" class="md-primary md-raised">Register</md-button>\n' +
    '                    <md-button ng-href="" class="md-primary md-raised">Clear</md-button>\n' +
    '                </div>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </md-content>\n' +
    '</form>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create_teacher_form/create_teacher_form.component.html',
    '<form name="studentForm" ng-submit="vm.submit()">\n' +
    '    <md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '        <h1>Register new Teacher</h1>\n' +
    '    </md-content>\n' +
    '    <md-content layout-padding>\n' +
    '        <div>\n' +
    '            <form name="patientForm">\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>First Name</label>\n' +
    '                        <input ng-model="vm.fname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Last Name</label>\n' +
    '                        <input ng-model="vm.lname">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>ID Number</label>\n' +
    '                        <input ng-model="vm.regno">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Aadhar Number</label>\n' +
    '                        <input ng-model="vm.aadhar">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Blood group</label>\n' +
    '                        <md-select ng-model="vm.bloodgrp">\n' +
    '                            <md-option ng-repeat="grp in bloodgrps" value="{{grp.value}}">\n' +
    '                                {{grp.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <md-radio-group ng-model="vm.gender">\n' +
    '                            <md-radio-button class="md-primary fix-width" value="F" class="md-primary">Female</md-radio-button>\n' +
    '                            <md-radio-button class="md-primary fix-width" value="M">Male</md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                    </md-input-container>\n' +
    '                    <md-datepicker name="dobField" ng-model="vm.dob" md-placeholder="Date of birth"\n' +
    '                                   required="" md-min-date="vm.minDate" md-max-date="vm.maxDate"\n' +
    '                                   md-date-filter="onlyWeekendsPredicate">\n' +
    '                    </md-datepicker>\n' +
    '                    <div class="validation-messages" ng-messages="studentForm.dobField.$error">\n' +
    '                        <div ng-message="valid">The entered value is not a date!</div>\n' +
    '                        <div ng-message="mindate">Date is too early!</div>\n' +
    '                        <div ng-message="maxdate">Date is too late!</div>\n' +
    '                        <div ng-message="filtered">Only weekends are allowed!</div>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                    <div layout-gt-sm="column" flex="10">\n' +
    '                        <img ng-src="{{image_source}}"  class="square-box">\n' +
    '                        <input ng-model="form.image" class="ng-hide" id="input-file-id" input-files="files"  type="file"  accept="image/*"\n' +
    '                               onchange="angular.element(this).scope().uploadedFile(this)"/>\n' +
    '                        <label for="input-file-id" class="md-button md-raised md-primary">Photo</label>\n' +
    '                    </div>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm></md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Qualification</label>\n' +
    '                        <input ng-model="vm.qualification">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Major</label>\n' +
    '                        <input ng-model="vm.major">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Institution</label>\n' +
    '                        <input ng-model="vm.institution">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Extracurricular </label>\n' +
    '                        <md-select ng-model="vm.excurricular">\n' +
    '                            <md-option ng-repeat="excurricular in extracurriculars" value="{{excurricular.value}}">\n' +
    '                                {{excurricular.display}}\n' +
    '                            </md-option>\n' +
    '                        </md-select>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Father Name</label>\n' +
    '                        <input ng-model="vm.father">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mother Name</label>\n' +
    '                        <input ng-model="vm.mother">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Address</label>\n' +
    '                        <input ng-model="vm.address">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Email Id</label>\n' +
    '                        <input ng-model="vm.email" type="email">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container class="md-block" flex-gt-sm>\n' +
    '                        <label>Mobile</label>\n' +
    '                        <input ng-model="vm.mobile">\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout-gt-sm="row">\n' +
    '                    <md-button type="submit" class="md-primary md-raised">Register</md-button>\n' +
    '                    <md-button ng-href="" class="md-primary md-raised">Clear</md-button>\n' +
    '                </div>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </md-content>\n' +
    '</form>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/forgot-password/forgot-password.component.html',
    '<form ng-submit="vm.submit()" class="ForgotPassword-form">\n' +
    '    <div>\n' +
    '        <md-input-container>\n' +
    '            <label>Email</label>\n' +
    '            <input type="email" ng-model="vm.email">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/landing_page/landing_page.component.html',
    '<md-content layout-padding>\n' +
    '    <md-content layout-gt-sm="row" layout-padding>\n' +
    '        <h2 class="md-display-1">Dashboard</h2>\n' +
    '    </md-content>\n' +
    '    <div layout ="row" layout-padding layout-wrap layout-fill style="padding-bottom: 32px;" ng-cloak>\n' +
    '        <md-whiteframe class="md-whiteframe-1dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout="column">\n' +
    '            <md-toolbar class="md-hue-1">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <span><md-icon class="fa fa-graduation-cap"></md-icon> Total Number of Students</span>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '\n' +
    '            <div layout="row" layout-align="center center"  style="min-height: 50px">\n' +
    '                <p class="text-center" ng-hide="scLoaded">\n' +
    '                    <i class="fa fa-spinner fa-spin"></i>\n' +
    '                </p>\n' +
    '                <p ng-show="scLoaded">\n' +
    '                <div class="md-display-1 dashboard-title text-primary">\n' +
    '                    {{studentCount}} </div> </p>\n' +
    '            </div>\n' +
    '            <p>studying in our school</p>\n' +
    '        </md-whiteframe>\n' +
    '        <md-whiteframe class="md-whiteframe-1dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout="column">\n' +
    '            <md-toolbar class="md-hue-1">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <span><md-icon class="fa fa-users"></md-icon> Total Number of Teachers</span>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <div layout="row" layout-align="center center"  style="min-height: 50px">\n' +
    '                <p class="text-center" ng-hide="tcLoaded">\n' +
    '                    <i class="fa fa-spinner fa-spin"></i>\n' +
    '                </p>\n' +
    '                <p ng-show="tcLoaded">\n' +
    '                <div class="md-display-1 dashboard-title text-primary">{{teacherCount}}</div> </p>\n' +
    '            </div>\n' +
    '            <p>working in our school</p>\n' +
    '        </md-whiteframe>\n' +
    '        <md-whiteframe class="md-whiteframe-1dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout="column">\n' +
    '            <md-toolbar class="md-hue-1">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <span><md-icon class="fa fa-minus"></md-icon> Number of Students absent today</span>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <div layout="row" layout-align="center center"  style="min-height: 50px">\n' +
    '                <p class="text-center" ng-hide="sacLoaded">\n' +
    '                    <i class="fa fa-spinner fa-spin"></i>\n' +
    '                </p>\n' +
    '                <p ng-show="sacLoaded">\n' +
    '                <div class="md-display-1 dashboard-title text-danger" >{{studAbsentCount}}</div>\n' +
    '                </p>\n' +
    '            </div>\n' +
    '            <p>Student(s) didn\'t come to school today</p>\n' +
    '        </md-whiteframe>\n' +
    '        <md-whiteframe class="md-whiteframe-1dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout="column">\n' +
    '            <md-toolbar class="md-hue-1">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <span><md-icon class="fa fa-minus"></md-icon> Number of Teachers absent today</span>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <div layout="row" layout-align="center center"  style="min-height: 50px">\n' +
    '                <p class="text-center" ng-hide="tacLoaded">\n' +
    '                    <i class="fa fa-spinner fa-spin"></i>\n' +
    '                </p>\n' +
    '                <p ng-show="tacLoaded">\n' +
    '                <div class="md-display-1 dashboard-title text-warning">{{teacherAbsentCount}}</div> </p>\n' +
    '            </div>\n' +
    '            <p>Teacher(s) on leave today</p>\n' +
    '        </md-whiteframe>\n' +
    '    </div>\n' +
    '    <div layout ="row" layout-padding layout-wrap layout-fill style="padding-bottom: 32px;" ng-cloak>\n' +
    '        <md-whiteframe class="md-whiteframe-1dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="35" layout="column">\n' +
    '            <md-toolbar class="md-hue-1">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <span><md-icon class="fa fa-minus"></md-icon>Today\'s Absentees (Classwise breakup)</span>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <canvas id="pie" class="chart chart-pie"\n' +
    '                    chart-data="docdata" chart-labels="doclabels" chart-options="options">\n' +
    '            </canvas>\n' +
    '            <p>Graphical represents the number of students absent today in every class</p>\n' +
    '        </md-whiteframe>\n' +
    '\n' +
    '        <md-whiteframe class="md-whiteframe-1dp" flex-sm="55" flex-gt-sm="35" flex-gt-md="55" layout="column">\n' +
    '            <md-toolbar class="md-hue-1">\n' +
    '                <div class="md-toolbar-tools">\n' +
    '                    <span><md-icon class="fa fa-minus"></md-icon>Long Absentees</span>\n' +
    '                </div>\n' +
    '            </md-toolbar>\n' +
    '            <div layout-fill>\n' +
    '                <md-table-container>\n' +
    '                    <table md-table md-progress="promise" width="100%">\n' +
    '                        <thead md-head md-order="query.order" md-on-reorder="getLongAbsentees">\n' +
    '                            <tr md-row>\n' +
    '                                <th md-column md-order-by="description"><span>Name</span></th>\n' +
    '                                <th md-column><span>Roll Number</span></th>\n' +
    '                                <th md-column><span>Class</span></th>\n' +
    '                                <th md-column>Section</th>\n' +
    '                                <th md-column>No of days</th>\n' +
    '                            </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody md-body>\n' +
    '                            <tr md-row md-select="tc" md-select-id="description" md-auto-select mdOnSelect="onSelect" ng-repeat="student in vm.labs">\n' +
    '                                <td md-cell>{{student.fname}} <span></span> {{student.lname}}</td>\n' +
    '                                <td md-cell>{{student.reg_no}}</td>\n' +
    '                                <td md-cell>{{student.class}}</td>\n' +
    '                                <td md-cell>{{student.section}}</td>\n' +
    '                                <td md-cell>{{student.absent}}</td>\n' +
    '                            </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                </md-table-container>\n' +
    '\n' +
    '                <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{vm.count}}" md-on-paginate="getLongAbsentees" md-page-select></md-table-pagination>\n' +
    '            </div>\n' +
    '        </md-whiteframe>\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/list_absentees_form/list_absentees_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Absentees today</h1>\n' +
    '</md-content>\n' +
    '<md-table-container>\n' +
    '    <table md-table  md-progress="promise">\n' +
    '        <thead md-head md-order="query.order" md-on-reorder="getTests">\n' +
    '            <tr md-row>\n' +
    '                <th md-column md-order-by="name"><span>Student Name</span></th>\n' +
    '                <th md-column><span>Roll Number</span></th>\n' +
    '                <th md-column><span>Class</span></th>\n' +
    '                <th md-column>Section</th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '        <tbody md-body>\n' +
    '            <tr md-row md-select="test" md-select-id="name" md-auto-select mdOnSelect="onSelect" ng-repeat="student in vm.absentees">\n' +
    '                <td md-cell>{{student.fname}} {{student.lname}} </td>\n' +
    '                <td md-cell>{{student.reg_no}}</td>\n' +
    '                <td md-cell>{{student.class}}</td>\n' +
    '                <td md-cell>{{student.section}}</td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</md-table-container>\n' +
    '\n' +
    '<md-table-pagination md-limit="query.limit" md-limit-options="[5, 20, 50, 100, 200, 500]" md-page="query.page" md-total="{{vm.count}}" md-on-paginate="getTests" md-page-select></md-table-pagination>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/list_blood_form/list_blood_form.component.html',
    '<md-content layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Blood donors</h1>\n' +
    '</md-content>\n' +
    '<md-content layout-padding>\n' +
    '    <div layout-gt-sm="row">\n' +
    '        <md-input-container class="md-block" flex="30">\n' +
    '            <label>Blood group</label>\n' +
    '            <md-select single ng-model="vm.group" ng-change="classChange()">\n' +
    '                <md-option ng-repeat="cls in vm.groups track by $index" value="{{cls}}">\n' +
    '                    {{cls}}\n' +
    '                </md-option>\n' +
    '            </md-select>\n' +
    '        </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '    <div layout-gt-sm="row">\n' +
    '        <md-button ng-click="vm.submit()" class="md-primary md-raised">Report</md-button>\n' +
    '        <!--        <md-button ng-click="vm.print(\'printThisElement\')" class="md-primary md-raised">Print</md-button>-->\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- exact table from live demo -->\n' +
    '\n' +
    '    <md-table-container>\n' +
    '        <table md-table md-row-select single ng-model="selected" md-progress="promise">\n' +
    '            <thead md-head md-order="query.order" md-on-reorder="getPatients">\n' +
    '                <tr md-row>\n' +
    '                    <th md-column><span>Blood group</span></th>\n' +
    '                    <th md-column><span>Name</span></th>\n' +
    '                    <th md-column>Roll Number</th>\n' +
    '                    <th md-column>Class</th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tfoot md-foot>\n' +
    '                <tr md-row>\n' +
    '                    <td md-cell colspan="4"></td>\n' +
    '                    <td md-cell><strong>Total: </strong></td>\n' +
    '                    <td md-cell>{{vm.total}}</td>\n' +
    '                </tr>\n' +
    '            </tfoot>\n' +
    '            <tbody md-body>\n' +
    '                <tr md-row md-select="patient" md-select-id="name" md-auto-select mdOnSelect="onSelect" ng-repeat="report in vm.students">\n' +
    '                    <td md-cell>{{report.blood_group}}</td>\n' +
    '                    <td md-cell>{{report.fname}} {{report.lname}}</td>\n' +
    '                    <td md-cell>{{report.reg_no}}</td>\n' +
    '                    <td md-cell>{{report.class}}</td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </md-table-container>\n' +
    '\n' +
    '    <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{vm.count}}" md-on-paginate="getDoctors" md-page-select></md-table-pagination>\n' +
    '</md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/list_latecomers_form/list_latecomers_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Late Comers today</h1>\n' +
    '</md-content>\n' +
    '\n' +
    '<!-- exact table from live demo -->\n' +
    '<md-table-container>\n' +
    '    <table md-table  md-progress="promise">\n' +
    '        <thead md-head md-order="query.order" md-on-reorder="getLateComers">\n' +
    '            <tr md-row>\n' +
    '                <th md-column md-order-by="name"><span>Student Name</span></th>\n' +
    '                <th md-column><span>Roll Number</span></th>\n' +
    '                <th md-column><span>Class</span></th>\n' +
    '                <th md-column>Section</th>\n' +
    '                <th md-column>Late by (minutes)</th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '        <tbody md-body>\n' +
    '            <tr md-row md-select="test" md-select-id="name" md-auto-select mdOnSelect="onSelect" ng-repeat="student in vm.latecomers">\n' +
    '                <td md-cell>{{student.fname}} {{student.lname}} </td>\n' +
    '                <td md-cell>{{student.reg_no}}</td>\n' +
    '                <td md-cell>{{student.class}}</td>\n' +
    '                <td md-cell>{{student.section}}</td>\n' +
    '                <td md-cell>{{student.minslate}}</td>\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</md-table-container>\n' +
    '\n' +
    '<md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{vm.count}}" md-on-paginate="getLateComers" md-page-select></md-table-pagination>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/list_student_form/list_student_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Student details</h1>\n' +
    '</md-content>\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '    <md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '        <md-button ng-click="edit($event)" class="md-primary md-raised">Edit Student</md-button>\n' +
    '        <md-button ng-click="delete($event, student)" class="md-raised md-warn">Remove Student</md-button>\n' +
    '    </md-content>\n' +
    '</div>\n' +
    '\n' +
    '<!-- exact table from live demo -->\n' +
    '<md-table-container>\n' +
    '    <table md-table md-row-select single ng-model="selected" md-progress="promise" width="100%">\n' +
    '        <thead md-head md-order="query.order" md-on-reorder="getStudents">\n' +
    '            <tr md-row>\n' +
    '                <th md-column>Photo</th>\n' +
    '                <th md-column md-order-by="reg_no">Roll No</th>\n' +
    '                <th md-column md-order-by="fname"><span>Name</span></th>\n' +
    '                <th md-column><span>Class</span></th>\n' +
    '                <th md-column>Date of birth</th>\n' +
    '                <th md-column><span>Blood group</span></th>\n' +
    '                <th md-column><span>Father</span></th>\n' +
    '                <th md-column><span>Father Mobile</span></th>\n' +
    '                <th md-column><span>Address</span></th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '        <tbody md-body ng-repeat="student in vm.students">\n' +
    '            <tr md-row md-select="student" md-select-id="id" md-auto-select mdOnSelect="onSelect">\n' +
    '                <td md-cell><img ng-src="//studphotos.s3.amazonaws.com/kurinji/{{student.reg_no}}.jpg"\n' +
    '                                 onerror="this.src=\'//studphotos.s3.amazonaws.com/nopreview.jpg\'"\n' +
    '                                 class="image-box"></td>\n' +
    '                <td md-cell>{{student.reg_no}}</td>\n' +
    '                <td md-cell nowrap>{{student.fname}} <span></span> {{student.lname}}</td>\n' +
    '                <td md-cell nowrap>{{student.class}}</td>\n' +
    '                <td md-cell nowrap>{{student.dob| date:\'dd/MM/yyyy\'}}</td>\n' +
    '                <td md-cell>{{student.blood_group}}</td>\n' +
    '                <td md-cell nowrap>{{student.father}}</td>\n' +
    '                <td md-cell>{{student.father_mobile}}</td>\n' +
    '                <td md-cell>{{student.address}}</td>\n' +
    '\n' +
    '                <td md-cell>\n' +
    '                    <input type=checkbox ng-model=show ng-class=\'{open:show}\'></input>\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '            <tr md-row ng-show=show>\n' +
    '                <td md-cell></td>\n' +
    '                <td md-cell><b>Gender</b> <br/>\n' +
    '                    <div ng-if="student.sex == \'F\'">Female</div>\n' +
    '                    <div ng-if="student.sex == \'M\'">Male</div>\n' +
    '                </td>\n' +
    '                <td md-cell><b>Date of Admission</b> <br/> {{student.doa}}</td>\n' +
    '                <td md-cell><b>Transport</b> <br/> {{student.transport}}</td>\n' +
    '                <td md-cell><b>Type</b> <br/>\n' +
    '                    <div ng-if="student.type == 0">Day Scholar</div>\n' +
    '                    <div ng-if="student.type == 1">Hosteler</div>\n' +
    '                </td>\n' +
    '                <td md-cell><b>Extra curricular</b> <br/> {{student.ex_curricular}}</td>\n' +
    '                <td md-cell><b>Fees</b> <br/> {{student.fees}}</td>\n' +
    '                <td md-cell><b>Sports</b> <br/> {{student.sports}}</td>\n' +
    '                <td md-cell><b>Aadhar</b> <br/> {{student.aadhar}} <br/></td>\n' +
    '                <td md-cell><b>Mother</b> <br/> {{student.mother}} <br/> {{student.mother_mobile}} {{student.mother_email}} <br/> </td>\n' +
    '            </tr>\n' +
    '            <tr md-row ng-show=show></tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</md-table-container>\n' +
    '\n' +
    '<md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{vm.count}}" md-on-paginate="getStudents" md-page-select></md-table-pagination>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/list_teacher_form/list_teacher_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Teacher details</h1>\n' +
    '</md-content>\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '    <md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '        <md-button ng-click="edit($event)" class="md-primary md-raised">Edit Teacher</md-button>\n' +
    '        <md-button ng-click="delete($event)" class="md-raised md-warn">Remove Teacher</md-button>\n' +
    '    </md-content>\n' +
    '</div>\n' +
    '\n' +
    '<!-- exact table from live demo -->\n' +
    '<md-table-container>\n' +
    '    <table md-table md-row-select single ng-model="selected" md-progress="promise">\n' +
    '        <thead md-head md-order="query.order" md-on-reorder="getTeachers">\n' +
    '            <tr md-row>\n' +
    '                <th md-column>Photo</th>\n' +
    '                <th md-column md-order-by="id">ID No</th>\n' +
    '                <th md-column md-order-by="fname"><span>Name</span></th>\n' +
    '                <th md-column>Date of birth</th>\n' +
    '                <th md-column>Blood group</th>\n' +
    '                <th md-column>Mobile</th>\n' +
    '                <th md-column><span>Aadhar</span></th>\n' +
    '                <th md-column><span>Gender</span></th>\n' +
    '                <th md-column><span>Qualification</span></th>\n' +
    '                <th md-column><span>Major</span></th>\n' +
    '                <th md-column><span>Institution</span></th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '        <tbody md-body ng-repeat="teacher in vm.teachers">\n' +
    '            <tr md-row md-select="teacher" md-select-id="id" md-auto-select mdOnSelect="onSelect">\n' +
    '                <td md-cell><img ng-src="//studphotos.s3.amazonaws.com/kurinji/{{teacher.id_no}}.jpg"\n' +
    '                                 onerror="this.src=\'//studphotos.s3.amazonaws.com/nopreview.jpg\'"class="image-box"></td>\n' +
    '                <td md-cell>{{teacher.id_no}}</td>\n' +
    '                <td md-cell>{{teacher.fname}} <span></span> {{teacher.lname}}</td>\n' +
    '                <td nowrap md-cell>{{teacher.dob| date:\'dd/MM/yyyy\'}}</td>\n' +
    '                <td md-cell>{{teacher.blood_group}}</td>\n' +
    '                <td md-cell>{{teacher.mobile}}</td>\n' +
    '                <td md-cell>{{teacher.aadhar}}</td>\n' +
    '                <td md-cell>{{teacher.sex}}</td>\n' +
    '                <td md-cell>{{teacher.qualification}}</td>\n' +
    '                <td md-cell>{{teacher.major}}</td>\n' +
    '                <td md-cell>{{teacher.institution}}</td>\n' +
    '                <td md-cell>\n' +
    '                    <input type=checkbox ng-model=show ng-class=\'{open:show}\'></input>\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '            <tr md-row ng-show=show>\n' +
    '                <td md-cell></td>\n' +
    '                <td md-cell><b>Father</b> <br/> {{teacher.father}} </td>\n' +
    '                <td md-cell><b>Mother</b> <br/> {{teacher.mother}} </td>\n' +
    '                <td md-cell><b>Email</b> <br/> {{teacher.email}} </td>\n' +
    '                <td md-cell><b>Extra curricular</b> <br/> {{teacher.ex_curricular}} </td>\n' +
    '            </tr>\n' +
    '            <tr md-row ng-show=show></tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '</md-table-container>\n' +
    '\n' +
    '<md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{vm.count}}" md-on-paginate="getTeachers" md-page-select></md-table-pagination>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/register-form/register-form.component.html',
    '<form ng-submit="vm.register()">\n' +
    '    <div>\n' +
    '        <md-input-container class="RegisterForm-inputContainer">\n' +
    '            <label>Name</label>\n' +
    '            <input type="text" ng-model="vm.name">\n' +
    '        </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <md-input-container class="RegisterForm-inputContainer">\n' +
    '            <label>Email</label>\n' +
    '            <input type="email" ng-model="vm.email">\n' +
    '        </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <md-input-container class="RegisterForm-inputContainer">\n' +
    '            <label>Password</label>\n' +
    '            <input type="password" ng-model="vm.password">\n' +
    '        </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '    <md-button type="submit" class="RegisterForm-submit md-primary md-raised">Register</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()">\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '                    <label><strong>Email</strong></label>\n' +
    '		    <input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '			<label><strong>Password</strong></label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="LoginForm-submit md-primary md-raised">Log in</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reports_form/reports_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Student Attendance Report</h1>\n' +
    '</md-content>\n' +
    '<md-content layout-padding>\n' +
    '    <md-input-container class="md-block" flex="30">\n' +
    '        <md-radio-group ng-model="vm.group">\n' +
    '            <md-radio-button ng-value="false" class="md-primary">\n' +
    '                Today\'s report\n' +
    '            </md-radio-button>\n' +
    '            <md-radio-button ng-value="true">\n' +
    '                Selected date\'s report\n' +
    '            </md-radio-button>\n' +
    '    </md-input-container>\n' +
    '</md-radio-group>\n' +
    '\n' +
    '<div layout-gt-sm="row" ng-show="vm.group">\n' +
    '    <md-datepicker ng-model="vm.from" md-placeholder="From date">\n' +
    '    </md-datepicker>\n' +
    '    <md-datepicker ng-model="vm.to" md-placeholder="To date">\n' +
    '    </md-datepicker>\n' +
    '</div>\n' +
    '<div layout-gt-sm="row">\n' +
    '    <md-input-container class="md-block" flex="30">\n' +
    '        <label>Class</label>\n' +
    '        <md-select ng-model="vm.class">\n' +
    '            <md-option ng-repeat="cls in vm.classes" value="{{cls.class}}">\n' +
    '                {{cls.class}}\n' +
    '            </md-option>\n' +
    '        </md-select>\n' +
    '    </md-input-container>\n' +
    '</div>\n' +
    '<div layout-gt-sm="row">\n' +
    '    <md-button ng-click="vm.submit()" class="md-primary md-raised">Report</md-button>\n' +
    '    <md-button ng-click="vm.print(\'printThisElement\')" class="md-primary md-raised">Print</md-button>\n' +
    '    <md-button ng-click="vm.reset()" class="md-primary md-raised">Reset</md-button>\n' +
    '</div>\n' +
    '</md-content>\n' +
    '<!-- exact table from live demo -->\n' +
    '<div id="printThisElement">\n' +
    '    <div class="divHeader">\n' +
    '        <div layout="row">\n' +
    '            <div layout="column" layout-sm="column" flex="40"></div>\n' +
    '            <div layout="column" layout-sm="column" flex="30">\n' +
    '                <Label>Student Attendance Report</Label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <md-divider></md-divider>\n' +
    '    </div>\n' +
    '    <md-content layout-padding>\n' +
    '        <md-table-container>\n' +
    '            <table md-table md-row-select single ng-model="selected" md-progress="promise">\n' +
    '                <thead md-head md-order="query.order" md-on-reorder="getPatients">\n' +
    '                    <tr md-row>\n' +
    '                        <th md-column>Date</th>\n' +
    '                        <th md-column>Roll Number</th>\n' +
    '                        <th md-column><span>Name</span></th>\n' +
    '                        <th md-column>Class</th>\n' +
    '                        <th md-column>Attendance</th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tfoot md-foot>\n' +
    '                    <tr md-row>\n' +
    '                        <td md-cell colspan="3"></td>\n' +
    '                        <td md-cell><strong>Total: </strong></td>\n' +
    '                        <td md-cell>{{vm.total}}</td>\n' +
    '                    </tr>\n' +
    '                </tfoot>\n' +
    '                <tbody md-body>\n' +
    '                    <tr md-row md-select="patient" md-select-id="name" md-auto-select mdOnSelect="onSelect" ng-repeat="report in vm.report">\n' +
    '                        <td md-cell>{{report.result_date| date:\'dd/MM/yyyy\'}}</td>\n' +
    '                        <td md-cell>{{report.reg_no}}</td>\n' +
    '                        <td md-cell>{{report.fname}} {{report.lname}}</td>\n' +
    '                        <td md-cell>{{report.class}}</td>\n' +
    '                        <td md-cell>{{report.attendance}}</td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </md-table-container>\n' +
    '</div>\n' +
    '\n' +
    '<md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{vm.report.count}}" md-on-paginate="getPatients" md-page-select></md-table-pagination>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reports_teacher_form/reports_teacher_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Teacher Attendance Report</h1>\n' +
    '</md-content>\n' +
    '<md-content layout-padding>\n' +
    '    <md-input-container class="md-block" flex="30">\n' +
    '        <md-radio-group ng-model="vm.group">\n' +
    '\n' +
    '            <md-radio-button ng-value="false" class="md-primary">\n' +
    '                Today\'s report\n' +
    '            </md-radio-button>\n' +
    '            <md-radio-button ng-value="true">\n' +
    '                Selected date\'s report\n' +
    '            </md-radio-button>\n' +
    '    </md-input-container>\n' +
    '</md-radio-group>\n' +
    '\n' +
    '<div layout-gt-sm="row" ng-show="vm.group">\n' +
    '    <md-datepicker ng-model="vm.from" md-placeholder="From date">\n' +
    '    </md-datepicker>\n' +
    '    <md-datepicker ng-model="vm.to" md-placeholder="To date">\n' +
    '    </md-datepicker>\n' +
    '</div>\n' +
    '\n' +
    '<div layout-gt-sm="row">\n' +
    '    <md-button ng-click="vm.submit()" class="md-primary md-raised">Report</md-button>\n' +
    '    <md-button ng-click="vm.print(\'printThisElement\')" class="md-primary md-raised">Print</md-button>\n' +
    '    <md-button ng-click="vm.reset()" class="md-primary md-raised">Reset</md-button>\n' +
    '</div>\n' +
    '</md-content>\n' +
    '<!-- exact table from live demo -->\n' +
    '<div id="printThisElement">\n' +
    '    <div class="divHeader">\n' +
    '        <div layout="row">\n' +
    '            <div layout="column" layout-sm="column" flex="40"></div>\n' +
    '            <div layout="column" layout-sm="column" flex="30">\n' +
    '                <Label>Teacher Attendance Report</Label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <md-divider></md-divider>\n' +
    '    </div>\n' +
    '    <md-content layout-padding>\n' +
    '        <md-table-container>\n' +
    '            <table md-table md-row-select single ng-model="selected" md-progress="promise">\n' +
    '                <thead md-head md-order="query.order" md-on-reorder="getPatients">\n' +
    '                    <tr md-row>\n' +
    '                        <th md-column>Date</th>\n' +
    '                        <th md-column>ID Number</th>\n' +
    '                        <th md-column><span>Name</span></th>\n' +
    '                        <th md-column>Department</th>\n' +
    '                        <th md-column>Attendance</th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tfoot md-foot>\n' +
    '                    <tr md-row>\n' +
    '                        <td md-cell colspan="3"></td>\n' +
    '                        <td md-cell><strong>Total: </strong></td>\n' +
    '                        <td md-cell>{{vm.total}}</td>\n' +
    '                    </tr>\n' +
    '                </tfoot>\n' +
    '                <tbody md-body>\n' +
    '                    <tr md-row md-select="patient" md-select-id="name" md-auto-select mdOnSelect="onSelect" ng-repeat="report in vm.report">\n' +
    '                        <td md-cell>{{report.result_date| date:\'dd/MM/yyyy\'}}</td>\n' +
    '                        <td md-cell>{{report.id_no}}</td>\n' +
    '                        <td md-cell>{{report.fname}} {{report.lname}}</td>\n' +
    '                        <td md-cell>{{report.department}}</td>\n' +
    '                        <td md-cell>{{report.attendance}}</td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </md-table-container>\n' +
    '</div>\n' +
    '\n' +
    '<md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{vm.report.count}}" md-on-paginate="getPatients" md-page-select></md-table-pagination>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reset-password/reset-password.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '\n' +
    '    <div ng-if="!vm.isValidToken" layout="row" layout-align="center center">\n' +
    '        <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="vm.isValidToken">\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Password</label>\n' +
    '            <input type="password" ng-model="vm.password">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Confirm Password</label>\n' +
    '            <input type="password" ng-model="vm.password_confirmation">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/results_print_form/results_print_form.component.html',
    '<md-content md-theme="light-blue" layout-gt-sm="row" layout-padding>\n' +
    '    <h1>Diagnosis Report</h1>\n' +
    '</md-content>    \n' +
    '\n' +
    '<div class="center-contents">\n' +
    '<md-content layout-padding>\n' +
    '    <div id="printThisElement">\n' +
    '        <div class="divHeader">\n' +
    '            <div layout="row">\n' +
    '                <div layout="column" layout-sm="column" flex="30">\n' +
    '                    <img src="/img/icons/logo.jpg" class="Footer-logo"></img>    \n' +
    '                </div>\n' +
    '                <div layout="column" layout-sm="column" flex="40"></div>\n' +
    '                <div layout="column" layout-sm="column" flex="30">\n' +
    '                    <Label>{{vm.branch.address1}}</Label>\n' +
    '                    <Label>{{vm.branch.address2}}</Label>\n' +
    '                    <Label>{{vm.branch.city}}, {{vm.branch.state}}</Label>\n' +
    '                    <Label>{{vm.branch.phoneNumber}}</Label>\n' +
    '                    <Label>{{vm.branch.mobile}}</Label>\n' +
    '                    <Label>{{vm.branch.emailId}}</Label>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '            <md-divider></md-divider>\n' +
    '        </div>\n' +
    '        <div layout="row">\n' +
    '            <div layout="column" layout-sm="column" flex="70">\n' +
    '                <md-subheader class="md-primary">Patient details</md-subheader>\n' +
    '                <Label>Name: {{vm.patient.name}}</Label>\n' +
    '                <Label>Dob: {{vm.patient.dob}}</Label>\n' +
    '                <Label>Mobile:{{vm.patient.mobile}}</Label>\n' +
    '                <md-subheader class="md-primary">Referring Physician</md-subheader>\n' +
    '                <Label>Name: {{vm.doctor.name}}</Label>\n' +
    '            </div>\n' +
    '            <div layout="row" layout-sm="column" flex="30" layout-align="right">\n' +
    '                <table id="meta">\n' +
    '                    <tr>\n' +
    '                        <td class="meta-head">Invoice #</td>\n' +
    '                        <td><div id="invoice">{{vm.billNo}}</div></td>\n' +
    '                    </tr>\n' +
    '                    <tr>\n' +
    '\n' +
    '                        <td class="meta-head">Report Date</td>\n' +
    '                        <td><div id="date">{{vm.billDate}}</div></td>\n' +
    '                    </tr>\n' +
    '                </table>\n' +
    '            </div>            \n' +
    '        </div>\n' +
    '        <md-table-container>\n' +
    '        <table md-table  md-progress="promise">\n' +
    '          <thead md-head md-order="query.order" md-on-reorder="getDesserts">\n' +
    '            <tr md-row>\n' +
    '              <th md-column md-order-by="nameToLower"><span>Test</span></th>\n' +
    '              <th md-column ><span>Specimen</span></th>\n' +
    '              <th md-column ><span>Method</span></th>\n' +
    '              <th md-column ><span>Result</span></th>\n' +
    '              <th md-column ><span>Unit</span></th>\n' +
    '              <th md-column><span>Normal</span></th>     \n' +
    '            </tr>\n' +
    '          </thead>\n' +
    '          <tbody md-body>\n' +
    '            <tr md-row  md-select-id="name" md-auto-select ng-repeat="result in vm.results">\n' +
    '              <td md-cell>{{result.testName}}</td>\n' +
    '              <td md-cell>{{result.specimen}}</td>\n' +
    '              <td md-cell>{{result.method}} </td>   \n' +
    '              <td md-cell>{{result.result}} </td> \n' +
    '              <td md-cell>{{result.unit}} </td> \n' +
    '              <td md-cell>{{result.threshold}} </td> \n' +
    '            </tr>     \n' +
    '          </tbody>\n' +
    '        </table>\n' +
    '      </md-table-container>   \n' +
    '      <div class="divFooter">\n' +
    '            <md-divider></md-divider>\n' +
    '            <br/>\n' +
    '            <br/>\n' +
    '            <br/>\n' +
    '            <br/>\n' +
    '            <div layout="row">\n' +
    '                <div layout="column" layout-sm="column" flex="30">\n' +
    '                    <Label>Verified by:</Label>     \n' +
    '                </div>\n' +
    '                <div layout="column" layout-sm="column" flex="40"></div> \n' +
    '                <div layout="column" layout-sm="column" flex="30">\n' +
    '                    <Label>Signature</Label> \n' +
    '                </div>    \n' +
    '            </div>\n' +
    '      </div>  \n' +
    '   </div>\n' +
    '       <div layout-gt-sm="row">\n' +
    '           <md-button class="md-primary md-raised" ng-click="vm.print(\'printThisElement\')">\n' +
    '           Print</md-button>\n' +
    '       </div>    \n' +
    '</md-content>\n' +
    '    \n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_entry/create_entry.page.html',
    '<md-content class="Page-container">\n' +
    '    <create-entry-form></create-entry-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_isms/create_isms.page.html',
    '<md-content class="Page-container">\n' +
    '    <create-isms-form></create-isms-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_print/create_print.page.html',
    '<md-content class="Page-container">\n' +
    '    <create-print-form></create-print-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_sms/create_sms.page.html',
    '<md-content class="Page-container">\n' +
    '    <create-sms-form></create-sms-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_student/create_student.page.html',
    '<md-content class="Page-container">\n' +
    '    <create-student-form></create-student-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_teacher/create_teacher.page.html',
    '<md-content class="Page-container">\n' +
    '    <create-teacher-form></create-teacher-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<md-content class="Page-Container Footer iOS-hack" layout-align="center center">\n' +
    '    <img src="//studphotos.s3.amazonaws.com/logos/kurinji-logo-cbsc.jpg" class="Footer-logo"></img>\n' +
    '    <br/>\n' +
    '    <br/>\n' +
    '    <div class="Footer-text">\n' +
    '        &copy; 2017 Shanmuga studio, Coonoor & Ulagellam Pvt Ltd, Trichy\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/forgot-password/forgot-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ForgotPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Forgot your password?</h1>\n' +
    '\n' +
    '        <forgot-password></forgot-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<div ng-controller="MainController as ctrl" layout="col-md-12">\n' +
    '    <md-sidenav md-component-id="left" md-is-open="isSidenavOpen" class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-lg\')">\n' +
    '\n' +
    '        <header class="nav-header" ss-style-color="{\'background-color\': \'primary.default\'}">\n' +
    '            <a ng-href="#/home" class="logo">\n' +
    '                <h1 class="md-heading">Attendance</h1>\n' +
    '            </a>\n' +
    '        </header>\n' +
    '\n' +
    '        <md-content flex role="navigation" ss-style-color="{\'background-color\': \'primary.default\'}">\n' +
    '            <ss-sidenav flex menu="menu"></ss-sidenav>\n' +
    '        </md-content>\n' +
    '\n' +
    '    </md-sidenav>\n' +
    '</div>\n' +
    '<div class="floating-header-div">\n' +
    '    <md-toolbar scroll style="height:85px; max-height:85px" layout="col-md-12">\n' +
    '        <div class="md-toolbar-tools" style="margin-top: 20px;">\n' +
    '            <md-button class="md-icon-button" aria-label="Settings" ng-click="openLeftMenu()">\n' +
    '                <md-icon md-svg-icon="img/icons/menu.svg"></md-icon>\n' +
    '            </md-button>\n' +
    '\n' +
    '            <nav><a class="title" href = "#/home">KURINJI CBSE Attendance</a></nav>\n' +
    '            <span flex></span>\n' +
    '            <label>Hi {{loggeduser}}!</label>\n' +
    '            <md-menu>\n' +
    '                <md-button aria-label="Sample Menu" class="md-icon-button" ng-click="$mdOpenMenu($event)">\n' +
    '                    <md-icon md-menu-origin class="material-icons md-36">account_circle</md-icon>\n' +
    '                </md-button>\n' +
    '                <md-menu-content width="1">\n' +
    '                    <md-menu-item ng-repeat="item in items">\n' +
    '                        <md-button ng-click="menuItemClick(item.id)">\n' +
    '                            <div layout="col-md-3">\n' +
    '                                <p flex>{{item.name}}</p>\n' +
    '                            </div>\n' +
    '                        </md-button>\n' +
    '                    </md-menu-item>\n' +
    '                </md-menu-content>\n' +
    '            </md-menu>\n' +
    '        </div>\n' +
    '    </md-toolbar>\n' +
    '</div>\n' +
    '<div class="DemoHeader-spacer"></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/landing/landing.page.html',
    '<div class="Page-Container Landing iOS-hack">\n' +
    '    <landing-page></landing-page>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/list_absentees/list_absentees.page.html',
    '<md-content class="Page-container">\n' +
    '    <list-absentees-form></list-absentees-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/list_blood/list_blood.page.html',
    '<md-content class="Page-container">\n' +
    '    <list-blood-form></list-blood-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/list_latecomers/list_latecomers.page.html',
    '<md-content class="Page-container">\n' +
    '    <list_latecomers_form></list_latecomers_form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/list_student/list_student.page.html',
    '<md-content class="Page-container">\n' +
    '    <list-student-form></list-student-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/list_teacher/list_teacher.page.html',
    '<md-content class="Page-container">\n' +
    '    <list-teacher-form></list-teacher-form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login/login.page.html',
    '<div class="Landing-cover">\n' +
    '    <!--    <video autoplay  id="bgvid" loop>\n' +
    '            <source src="img/class.mp4" type="video/mp4">\n' +
    '        </video>-->\n' +
    '\n' +
    '    <div class="Login-formContainer login-content" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline"><strong>Attendance Login</strong></h1>\n' +
    '\n' +
    '        <login-form></login-form>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <!--    <div class="login-content" layout="column" layout-align="center center">\n' +
    '             <img class="logo" src="img/icons/logo6.jpg"></img>\n' +
    '        </div>-->\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/register/register.page.html',
    '<md-content class="Page-container">\n' +
    '	<div flex="80" flex-offset="10">\n' +
    '		<div class="Register-formContainer" layout="column" layout-align="center center">\n' +
    '			<h1 class="md-headline">Create an account</h1>\n' +
    '\n' +
    '			<register-form></register-form>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reports/reports.page.html',
    '<md-content class="Page-container">\n' +
    '    <reports_form></reports_form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reports_teacher/reports_teacher.page.html',
    '<md-content class="Page-container">\n' +
    '    <reports_teacher_form></reports_teacher_form>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reset-password/reset-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ResetPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Reset Password</h1>\n' +
    '\n' +
    '        <reset-password></reset-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/results_print/results_print.page.html',
    '<md-content class="Page-container">\n' +
    '    <results_print_form></results_print_form>\n' +
    '</md-content>\n' +
    '');
}]);
})();
