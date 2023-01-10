import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorCardComponent } from './shared/tutor-card/tutor-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewTutorsPageComponent } from './view-tutors-page/view-tutors-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { BookPageComponent } from './book-page/book-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ApplyPageComponent } from './apply-page/apply-page.component';
import { ReviewComponent } from './shared/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorCardComponent,
    HomePageComponent,
    ViewTutorsPageComponent,
    NavBarComponent,
    BookPageComponent,
    PricingPageComponent,
    ApplyPageComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
