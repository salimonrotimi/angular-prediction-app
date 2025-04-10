import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-investor-dashboard',
  templateUrl: './investor-dashboard.component.html',
  styleUrls: ['./investor-dashboard.component.css']
})
export class InvestorDashboardComponent implements OnInit {
  investorServerMessage: any;
  amountServerMessage: any;
  highestAmountServerMessage: any;
  notification: any;
  salesDataByCustomer: any;
  salesDataByState: any;
  opened = false;

  constructor(private service: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.getNoOfInvestors();
    this.getAmountInvested();
    this.getHighestInvestment();
  }

  getNoOfInvestors(){
    this.service.getNumberOfInvestors().subscribe((res) =>{
      this.investorServerMessage = res;
      this.notification = this.investorServerMessage;
    });
  }

  getAmountInvested(){
    this.service.getTotalAmountInvested().subscribe((res) =>{
      this.amountServerMessage = res;
    });
  }

  getHighestInvestment(){
    this.service.getHighestAmountInvested().subscribe((res) =>{
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
