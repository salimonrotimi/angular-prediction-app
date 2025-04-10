import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})

export class HomeNavComponent implements OnInit {

  constructor(private service:ProjectService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.isAuthenticated = false;
    this.service.isUserAuthenticated = false;
    this.service.isInvestorAuthenticated = false;
    this.router.navigate(['']);
  }
}
