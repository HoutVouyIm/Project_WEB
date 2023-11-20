import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryComponent } from './components/category/category.component';
import { InternshipComponent } from './components/internship/internship.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailComponent } from './components/detail/detail.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

const routes: Routes = [
  {path:'' , component: HomePageComponent},
  {path:'category', component: CategoryComponent},
  {path:'internship',component: InternshipComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'category/:id', component: DetailComponent},
  {path:'internship/:id', component: CompanyDetailComponent},
  {path:'sub-category',component: SubCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
