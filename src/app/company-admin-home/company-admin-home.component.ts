import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndustryService } from '../services/industry.service';
import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-company-admin-home',
  templateUrl: './company-admin-home.component.html',
  styleUrls: ['./company-admin-home.component.css']
})
export class CompanyAdminHomeComponent implements OnInit {
  selectedID ;

  private industrylist:any = [];
  private countries:any =[];

  constructor(private route:ActivatedRoute, private industryService:IndustryService, private countryService:CountryService) { 
    this.selectedID = route.snapshot.params['memberID'];
  }

  ngOnInit() {
    const industries$ = this.industryService.getAllIndustry();
      industries$.subscribe(industry => {this.industrylist = industry})
  
    this.countryService.getFields()
    .subscribe(country => {this.countries = country
      console.log(this.countries)
    })
  }

}
