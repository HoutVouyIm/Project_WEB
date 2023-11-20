import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/types/company/company.model';

@Component({
  selector: 'app-card-company',
  templateUrl: './card-company.component.html',
  styleUrls: ['./card-company.component.css']
})
export class CardCompanyComponent implements OnInit{
    
    companys: Company[] = [];

    constructor(private router: Router, 
      private _service: CompanyService){}

    ngOnInit(): void {
      this.companys = this._service.getAllCompany();
    }

    setCompanyId(companyId: number){
      for(let com of this.companys){
        if(companyId === com.id){
          this.router.navigate(['internship', companyId]);
        }
      }
    }

 
}
