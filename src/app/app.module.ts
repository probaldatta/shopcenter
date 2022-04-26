import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AlertComponent } from './widget/alert/alert.component';
import { tokenInterceptorProviders } from './shared/token-interceptor.service';
import { HeaderNavComponent } from './component/header-nav/header-nav.component';
import { CategoriesNavComponent } from './component/categories-nav/categories-nav.component';
import { BannerCarasoulComponent } from './component/banner-carasoul/banner-carasoul.component';
import { OfferImagesComponent } from './component/offer-images/offer-images.component';
import { FooterComponent } from './component/footer/footer.component';
import { ManageProductsComponent } from './component/manage-products/manage-products.component';
import { ManageCategoriesComponent } from './component/manage-categories/manage-categories.component';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { AddCategoriesComponent } from './component/add-categories/add-categories.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductCarasoulComponent } from './component/product-carasoul/product-carasoul.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    AlertComponent,
    HeaderNavComponent,
    CategoriesNavComponent,
    BannerCarasoulComponent,
    OfferImagesComponent,
    FooterComponent,
    ManageProductsComponent,
    ManageCategoriesComponent,
    AddProductsComponent,
    AddCategoriesComponent,
    PageNotFoundComponent,
    ProductCarasoulComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,CarouselModule
  ],
  providers: [tokenInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
