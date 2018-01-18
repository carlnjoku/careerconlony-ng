import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-company-admin-update',
  templateUrl: './company-admin-update.component.html',
  styleUrls: ['./company-admin-update.component.css']
})
export class CompanyAdminUpdateComponent implements OnInit {
  selectedID
  constructor(route:ActivatedRoute) { 
    this.selectedID = route.snapshot.params['memberID'];
  }

  ngOnInit() {
  }

}
