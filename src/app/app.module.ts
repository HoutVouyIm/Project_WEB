import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CardCategoryComponent } from './layouts/card-category/card-category.component';
import { CardCompanyComponent } from './layouts/card-company/card-company.component';
import { CardReadMoreComponent } from './layouts/card-read-more/card-read-more.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { InternshipComponent } from './components/internship/internship.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailComponent } from './components/detail/detail.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    CardCategoryComponent,
    CardCompanyComponent,
    CardReadMoreComponent,
    CategoryComponent,
    InternshipComponent,
    AboutUsComponent,
    DetailComponent,
    CompanyDetailComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
