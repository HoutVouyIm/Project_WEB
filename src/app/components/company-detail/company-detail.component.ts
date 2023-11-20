import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/types/company/company.model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{
    tempCompany! : Company;
    companys: Company[] = [];
    companyId: number | undefined;

    constructor(
      private router: Router,
      private _service: CompanyService,
      private activatedRouter: ActivatedRoute){}

    ngOnInit(): void {
      this.companys = this._service.getAllCompany();
      this.getCompanyIdFromUrl();
    }

    getCompanyIdFromUrl(){
      this.companyId = +this.activatedRouter.snapshot.paramMap.get('id')!;

      for(let com of this.companys){
        if(this.companyId === com.id){
          this.tempCompany = com;
          console.log(this.tempCompany)
        }
      }
    }
    
}
