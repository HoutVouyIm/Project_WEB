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
        title: 'Internship',
        date:'Deadline: 1 Nov 2023',
        description: 'An internship is a professional learning experience that offers meaningful, practical work related to a students field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.Research opportunities are available both on- and off-campus. These experiences offer a unique way to better understand a student’s academic interests and consider how graduate school may play a role in future paths. Funding may be available for these experiences through organizations like the National Science Foundation (NSF).',
        image : "../../assets/image/internship.jpg"
      },
      {
        id: 2,
        title: 'Scholarship',
        date:'Deadline: 19 Dec 2023',
        description: 'All Permanent Secretaries are hereby advised to receive all completed application forms from qualified and interested members of their staff and those of the Line Departments. Each Institutional Training Committee should review all application forms received and subsequently submit to this Office, not more than 10 completed applications, based on the priority training needs of the Ministry and its Line Departments. These applications will be subjected to further scrutiny and shortlisting by the PMO in line with the attached selection criteria for final consideration.',
        image : "../../assets/image/scholaship.jpg"
      },
      {
        id: 3,
        title: 'Volunteers',
        date:'Deadline: 27 Oct 2023',
        description: 'Volunteers are an important part of Good Samaritan Dental. We welcome those who want to give back with open arms. We are a full service dental clinic providing all aspects of general dentistry. Therefore, we are always in need of experienced Georgia licensed dental professionals. Our greatest needs includes: dental hygienists, pediatric dentists, endodontists, periodontist or highly skilled General Dentists experienced in these procedures.',
        image : "../../assets/image/volunteer.jpeg"
      },
      {
        id: 4,
        title: 'Student Exchange',
        date:'Deadline: 7 May 2023',
        description: 'Aw Studio is a design studio are based in Hong Kong since 2009. We are work with visual communication and graphic art, provide a full range of design services including branding and logo design, corporate communication, web-site design, marketing materials, publications, video, animation and motion graphic.We believe the attention to design could give any brand the niche in any fast changing market.',
        image : "../../assets/image/student-exchange.jpg"
      },
    ]
  }
}
