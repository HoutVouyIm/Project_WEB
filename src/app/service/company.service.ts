import { Injectable } from '@angular/core';
import { Company } from '../types/company/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }
  getAllCompany(): Company[] {
    return [
      {
        id: 1,
        company: 'ABA BANK',
        image : "../../assets/image/company1.jpeg",
        description: 'Here at ABA Bank, we are always looking for talented, passionate and ambitious candidates to join our growing team. We encourage you to submit your application at any time, even if your desired position is not listed in our current job openings. If we think that your qualifications and experience match with what we are looking for, we will be contacting you immediately. If you are interested, please submit your CV with your most recent photo and cover letter.',
        
      },
      {
        id: 2,
        company: 'Z1 Cambodia Company',
        image : "../../assets/image/company2.png",
        description: 'We are an international digital studio that transforms ideas into incredible products. We are part of Tiny, a Canadian investment fund behind industry giants such as Dribbble or Metalab. We work with North American startups helping them create and launch disruptive products to the market.Z1 is not a design agency with several engineers, nor a development consultant with a handful of designers. We are a team of more than 70 designers, engineers and communication professionals that approach each project holistically.We always work as a team, both remotely (we have colleagues in New York, San Francisco, Vancouver, etc.) and in person at our main headquarters located in the center of Seville, a 700m2 space where you will feel at home. We would like to incorporate into our team people who bring their full potential and work comfortably in dynamic environments so that they can collaborate in a diverse range of projects.',
        
        
      },
      {
        id: 3,
        company: 'Cloud Net Company',
        image : "../../assets/image/company3.png",
        description: 'We have an experienced team, who are very expert on Cloud System, Mobile App/Software Development, Website Design, ERP Solution, Web Application, Information Security, IT Infrastructure, IT Products, and Provide Consultation.',
        
      },
      {
        id: 4,
        company: 'Chip Mong Cambodia',
        image : "../../assets/image/company4.png",
        description: 'At Chip Mong Bank, we strive to be your trusted financial partner, consulting and providing a comprehensive range of personal banking services to fit your desired lifestyle.',
        
      },
      {
        id: 5,
        company: 'ZENDO Company',
        image : "../../assets/image/company5.png",
        description: 'We are a retail clothing store offering various brands of original product. Located in Phnom Penh and Siem Reap, Cambodia.',
        
      },
      {
        id: 6,
        company: 'Amazon',
        image : "../../assets/image/company6.png",
        description: 'Café Amazon is a leading Thai coffeehouse chain, a part of PTT Oil and Retail Business Public Company Limited (OR). It has been established since 2002 with the goal to bring “Green Oasis” experience into everyday ',
        
      },
      {
        id: 7,
        company: 'KOSIGN',
        image : "../../assets/image/company7.jpeg",
        description: 'Name. KOSIGN (Cambodia) Investment Co., Ltd. ; Representative. Seol WookHwan ; Founded. April 2014 ; Business Domain. Global IT Outsourcing, E-Finance Solutions, ...',
        
      },
      {
        id: 8,
        company: 'KB Kookmin Bank',
        image : "../../assets/image/company8.jpg",
        description: 'KB Kookmin Bank is expanding its presence in Cambodia by merging its two affiliates there ― Prasac Microfinance Institution and Kookmin Bank Cambodia.',
        
      },
    ]
  }
}
