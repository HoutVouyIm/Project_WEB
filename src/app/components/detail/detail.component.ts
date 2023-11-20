import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/category/category.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  tempCategory!: Category;
  cateories: Category[] = [];
  categoryId: number | undefined;
  title: string | undefined | null;

  constructor(
    private _categoryService : CategoryService,
    private activatedRouted: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.cateories = this._categoryService.getAllData();
    this.getCategoryIdFromUrl();
  }

  getCategoryIdFromUrl(){
    this.categoryId = +this.activatedRouted.snapshot.paramMap.get('id')!;

    for(let cate of this.cateories){
      if(this.categoryId === cate.id){
        this.tempCategory = cate;
        console.log(this.tempCategory)
      }
    }
  }
}
