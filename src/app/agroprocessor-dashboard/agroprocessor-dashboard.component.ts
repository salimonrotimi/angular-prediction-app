import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agroprocessor-dashboard',
  templateUrl: './agroprocessor-dashboard.component.html',
  styleUrls: ['./agroprocessor-dashboard.component.css']
})
export class AgroprocessorDashboardComponent implements OnInit {
  applicantServerMessage: any;
  amountServerMessage: any;
  highestAmountServerMessage: any;
  notification: any;
  salesDataByCustomer: any;
  salesDataByState: any;
  opened = false;

  constructor(private service: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.getNumberOfApplicants();
    this.getLoanAmountRequested();
    this.getHighestLoanRequest();
  }

  getNumberOfApplicants(){
    this.service.getNoOfLoanApplicants().subscribe((res) =>{
      this.applicantServerMessage = res;
      this.notification = this.applicantServerMessage;
    });
  }

  getLoanAmountRequested(){
    this.service.getTotalLoanAmountRequested().subscribe((res) =>{
      this.amountServerMessage = res;
    });
  }

  getHighestLoanRequest(){
    this.service.getHighestLoanAmountRequested().subscribe((res) =>{
      this.highestAmountServerMessage = res;
    });
  }

  logout(){
    this.service.isAuthenticated = false;
    this.service.isUserAuthenticated = false;
    this.service.isInvestorAuthenticated = false;
    this.router.navigate(['']);
  }
}
