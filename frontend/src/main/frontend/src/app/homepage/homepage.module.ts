import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HomepageComponent],
    exports: [HomepageComponent]
})

export class HomepageModule { }
