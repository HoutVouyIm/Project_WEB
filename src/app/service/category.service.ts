import { Injectable } from '@angular/core';
import { Category } from '../types/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getAllData(): Category[] {
    return [
      {
        id: 1,
        title: 'The modern JavaScript',
        date:'Deadline: 19 Oct 2023',
        description: 'The Royal University of Phnom Penh is a national research university of Cambodia, located in the Phnom Penh capital. Established in 1960, it is the country largest university. It hosts around 20,000 students in undergraduate and postgraduate programmes',
        image : "../../assets/image/category1.jpg"
      },
      {
        id: 2,
        title: 'The modern JavaScript',
        date:'Deadline: 19 Oct 2023',
        description: 'The Royal University of Phnom Penh is a national research university of Cambodia, located in the Phnom Penh capital. Established in 1960, it is the country largest university. It hosts around 20,000 students in undergraduate and postgraduate programmes',
        image : "../../assets/image/category1.jpg"
      },
      {
        id: 3,
        title: 'The modern JavaScript',
        date:'Deadline: 19 Oct 2023',
        description: 'The Royal University of Phnom Penh is a national research university of Cambodia, located in the Phnom Penh capital. Established in 1960, it is the country largest university. It hosts around 20,000 students in undergraduate and postgraduate programmes',
        image : "../../assets/image/category1.jpg"
      },
      {
        id: 4,
        title: 'The modern JavaScript',
        date:'Deadline: 19 Oct 2023',
        description: 'The Royal University of Phnom Penh is a national research university of Cambodia, located in the Phnom Penh capital. Established in 1960, it is the country largest university. It hosts around 20,000 students in undergraduate and postgraduate programmes',
        image : "../../assets/image/category1.jpg"
      },
    ]
  }
}
