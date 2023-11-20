import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/types/category/category.model';

@Component({
  selector: 'app-card-read-more',
  templateUrl: './card-read-more.component.html',
  styleUrls: ['./card-read-more.component.css']
})
export class CardReadMoreComponent implements OnInit{
    categories : Category[] = [];
    constructor(private _categoryService : CategoryService,private router: Router){}
    ngOnInit(): void {
      this.categories = this._categoryService.getAllData();
    }

    setCategoryById(categoryId: number){
      for(let category of this.categories){
        if(categoryId === category.id){
          this.router.navigate(['/category', categoryId], {
            queryParams: { search: category.title },
          });
        }
      }
    }

}
