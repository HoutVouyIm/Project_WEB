import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent {
    @Input() imgSrc: string = null ?? "../../../assets/image/category1.jpg";
    @Input() title: string = null ?? "INTERNSHIP OPPORTUNITIES";
    @Input() style: string = null ?? "";

}
