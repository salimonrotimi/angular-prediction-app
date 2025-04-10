import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ImageSlidesComponent } from './image-slides/image-slides.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticatorGuard } from './authenticator.guard';
import { InvestorAuthenticatorGuard } from './investor-authenticator.guard';
import { InvestorLoginComponent } from './investor-login/investor-login.component';
import { InvestorRegisterComponent } from './investor-register/investor-register.component';
import { ForgotInvestorPasswordComponent } from './forgot-investor-password/forgot-investor-password.component';
import { ApplyForInvestmentComponent } from './apply-for-investment/apply-for-investment.component';
import { UserAuthenticatorGuard } from './user-authenticator.guard';
import { AgroprocessorDashboardComponent } from './agroprocessor-dashboard/agroprocessor-dashboard.component';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';
import { ShowPredictionComponent } from './show-prediction/show-prediction.component';

const routes: Routes = [
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path: 'index', component: IndexComponent},
  {path: 'imageslides', component: ImageSlidesComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthenticatorGuard]},
  //{path: 'home', component: HomeComponent},
  {path: 'agro-dashboard', component: AgroprocessorDashboardComponent},
  {path: 'investor-dashboard', component: InvestorDashboardComponent},
  {path: 'apply', component: ApplyForInvestmentComponent, canActivate: [UserAuthenticatorGuard]},
  {path: 'show-prediction', component: ShowPredictionComponent, canActivate: [InvestorAuthenticatorGuard]},
  //{path: 'apply', component: ApplyForInvestmentComponent},
  //{path: 'show-prediction', component: ShowPredictionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'investorlogin', component: InvestorLoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'investorregister', component: InvestorRegisterComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'forgotinvestorpassword', component: ForgotInvestorPasswordComponent},
  {path: 't&c', component: TermsAndConditionsComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
