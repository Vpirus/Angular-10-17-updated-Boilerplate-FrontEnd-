import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommandModule } from '@angular/common';

import { AccountRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommandModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent
    ]
})
export class AccountsModule { }