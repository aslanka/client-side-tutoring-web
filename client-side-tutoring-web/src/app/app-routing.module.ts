import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ViewTutorsPageComponent } from './view-tutors-page/view-tutors-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { ApplyPageComponent } from './apply-page/apply-page.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


const routes: Routes = [{path: 'tutor', component: ViewTutorsPageComponent },
{path: '', component: HomePageComponent},
{path: 'home', component: HomePageComponent},
{path: 'book', component: BookPageComponent},
{path: 'pricing', component: PricingPageComponent},
{path: 'apply', component: ApplyPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
