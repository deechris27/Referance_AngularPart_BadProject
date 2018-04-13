import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropertylistComponent } from './propertylist.component';
import { PropertylistRoutes } from './propertylist.routing';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PropertylistRoutes),
        FormsModule,
        Ng2CarouselamosModule
    ],
    declarations: [PropertylistComponent]
})

export class PropertylistModule {}
