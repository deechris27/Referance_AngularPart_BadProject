import { ErrorHandler, Inject, Injector, NgZone, isDevMode } from "@angular/core";
import { Response } from "@angular/http";
import { ToastrService } from "ngx-toastr";

export class AppErrorHandler implements ErrorHandler {
    constructor( @Inject(NgZone) private ngZone: NgZone, @Inject(Injector) private injector: Injector) { }

    private get toastr(): ToastrService {
        return this.injector.get(ToastrService);
    }

    public handleError(error: any): void {
        console.log(error);
        if (String(error).indexOf('cancel') === -1) {

            let errorTitle = 'Error';
            let errMsg = 'An unexpected error ocurred';

            if (String(error).indexOf('409') !== -1 &&
                String(error).indexOf('addProperty') !== -1) {
                errMsg = "Property already exists";
                errorTitle = "Duplicate property";
            }else if(String(error).indexOf('422') !== -1 &&
                String(error).indexOf('Unprocessable') !== -1){
                    errMsg = "The email has already been taken";
                    errorTitle = "User already exists";
            }

            if (error instanceof Response) {
                console.log(error);
                const contentType = error.headers.get("Content-Type")
                if (contentType && contentType == "application/json") {
                    const body = error.json();
                    console.log(body);
                    //errorTitle = body.message[0] || errorTitle;
                    errorTitle = error.statusText;
                    errMsg = body.errors.message[0];
                } else {
                    errMsg = error.text();
                }
            }
            this.toastr.error(errMsg, errorTitle);
        }
    }
}