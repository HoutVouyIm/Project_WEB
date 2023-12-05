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
        image : "../../assets/image/ABA.png",
        description: 'Here at ABA Bank, we are always looking for talented, passionate and ambitious candidates to join our growing team. We encourage you to submit your application at any time, even if your desired position is not listed in our current job openings. If we think that your qualifications and experience match with what we are looking for, we will be contacting you immediately. If you are interested, please submit your CV with your most recent photo and cover letter. Welcome to ABA Bank, Cambodia premier private financial institution. Established in 1996 as the Advanced Bank of Asia Limited, we have become Cambodia largest commercial bank by assets, deposits, loans, and profitability, according to the Annual Supervision Report 2021 and 2022 of the National Bank of Cambodia.With 27 years in the banking industry, ABA has significantly strengthened its position in the market to offer a comprehensive range of services to customer segments, including SMEs, micro-businesses, and individuals. Our wide-reaching footprint covers 87 branches, 1,500+ self-banking machines, and advanced online and mobile banking platforms, providing our customers with the convenience of modern financial services wherever they are.',
        
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
        description: 'Cloud Net Cambodia is a deep industry-specific solution for professional services, software,web services, ecommerce, security system and wholesale distribution. Cloud Net has proven its expertise in encompassing low cost and yet high quality and reliable software solutions and flexible deployment options that give customers a choice to run their businesses in the cloud, on-site, or both.We have an experienced team, who are very expert on Cloud System, Mobile App/Software Development, Website Design, ERP Solution, Web Application, Information Security, IT Infrastructure, IT Products, and Provide Consultation.To earn global admiration and respect as the most trusted name in the realm of software development outsourcing and Electronic supplies and create an excellent network among our partners, stakeholders, alliances, clients and employees. ',
        
      },
      {
        id: 4,
        company: 'Chip Mong Cambodia',
        image : "../../assets/image/company4.png",
        description: 'At Chip Mong Bank, we strive to be your trusted financial partner, consulting and providing a comprehensive range of personal banking services to fit your desired lifestyle.The Internal Control & Audit team at Chip Mong plays a central role in day-to-day management and administration of the company. The team shoulders a responsibility for ensuring that business operations are efficient and profitable, as well as the fact that information can be trusted. The team not only supports the Chip Mong board of directors in directing business operations, but also evaluates, manages risk and produces reliable information and recommendations to enhance transparency and efficiency. The Internal Control & Audit team is there to observe and inspect the processes of business operations and financial. ',
        
      },
      {
        id: 5,
        company: 'ZENDO Company',
        image : "../../assets/image/company5.png",
        description: 'We are a retail clothing store offering various brands of original product. Located in Phnom Penh and Siem Reap, Cambodia.Zendo Technology Pte Ltd was incorporated in Singapore specialising in analytic services in quantitative solution platform. We strive to be a very focusing company in providing IT and analytic services in investment management leveraging heavily on big data and advanced analytics.Zendo Technology Pte Ltd was incorporated in Singapore specialising in analytic services in quantitative solution platform. We strive to be a very focusing company in providing IT and analytic services in investment management leveraging heavily on big data and advanced analytics. Our service are across the globe with unique emphasis in Asia. We also offer professional IT solutions to our VIPs for fund managements.',
        
      },
      {
        id: 6,
        company: 'Amazon',
        image : "../../assets/image/company6.png",
        description: 'Café Amazon is a leading Thai coffeehouse chain, a part of PTT Oil and Retail Business Public Company Limited (OR). It has been established since 2002 with the goal to bring “Green Oasis” experience into everyday. Café Amazon is renowned for its uniquely rich flavor of its own signature blend that win the heart of million customers. It has carefully sourced coffee beans from selected coffee farms across Thailand and meticulously roasted in its own proprietary roasting plant at the Amazon Inspiring Campus.Café Amazon is fully committed to grow a sustainable business with all stakeholders, by focusing not only on profitability but also on creating value to people and planet. For instance, the Community Coffee Sourcing project which it educates local farmers to grow quality coffee beans and purchases at fair price. It also provides career opportunities and creates equality of living through Café Amazon for Chance program in order to support the disadvantaged such as elderly and deaf person to become barista. The Circular Living concept store that it promotes environmental awareness by using biodegradable and upcycling materials in the stores. ',
        
      },
      {
        id: 7,
        company: 'KOSIGN',
        image : "../../assets/image/company7.jpeg",
        description: 'Name. KOSIGN (Cambodia) Investment Co., Ltd. ; Representative. Seol WookHwan ; Founded. April 2014 ; Business Domain. Global IT Outsourcing, E-Finance Solutions, Korea Software Innovation Global Network (KOSIGN Investment Co., Ltd.) is a software corporation founded by Webcash and other 8 associated software solution companies headquartered in Seoul, South Korea. KOSIGN operates three main business fields including B2B Fin-Tech, e-Finance, and Global IT Outsourcing in Cambodia. Besides businesses, as a CSR, we provide at Korea Software HRD Center 12-month training scholarships including basic and advanced courses in IT fields for both undergraduate and graduate students in Cambodia and provide the opportunities to work at the partnering companies in South Korea. ',
        
      },
      {
        id: 8,
        company: 'KB Kookmin Bank',
        image : "../../assets/image/KB.jpeg",
        description: 'KB Kookmin Bank is expanding its presence in Cambodia by merging its two affiliates there ― Prasac Microfinance Institution and Kookmin Bank Cambodia.In 2021, in line with the Cambodian Government’s initiatives to overcome the COVID-19 pandemic, we did our best to implement the special support packages such as the restructuring program. Despite various uncertainties surrounding the business environment caused by such an unprecedented event, all key financial performance indicators such as the total assets, loan assets and net profit, show remarkable growth. I wish to take this opportunity to thank all the employees and management of KDSB for overcoming the difficult situation with a great result.Even though KDSB is a latecomer in Cambodia with only our third year of full operation, KDSB became one of the leading banks in the Cambodian auto finance market which was achieved by rapid growth.',
        
      },
    ]
  }
}
