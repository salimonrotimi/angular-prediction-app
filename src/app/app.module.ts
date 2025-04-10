import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageSlidesComponent } from './image-slides/image-slides.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FooterComponent } from './footer/footer.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProjectService } from './project.service';
import { NgxWebstorageModule, LocalStorageService } from 'ngx-webstorage';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { InvestorLoginComponent } from './investor-login/investor-login.component';
import { InvestorRegisterComponent } from './investor-register/investor-register.component';
import { ForgotInvestorPasswordComponent } from './forgot-investor-password/forgot-investor-password.component';
import { ApplyForInvestmentComponent } from './apply-for-investment/apply-for-investment.component';
import { AgroprocessorDashboardComponent } from './agroprocessor-dashboard/agroprocessor-dashboard.component';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';
import { ShowPredictionComponent } from './show-prediction/show-prediction.component';
import { AddPredictionComponent } from './add-prediction/add-prediction.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutPieChartComponent } from './doughnut-pie-chart/doughnut-pie-chart.component';
import { InvestorBarchartComponent } from './investor-barchart/investor-barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageSlidesComponent,
    LoginComponent,
    PageNotFoundComponent,
    IndexComponent,
    ForgotPasswordComponent,
    FooterComponent,
    TermsAndConditionsComponent,
    HomeComponent,
    RegisterComponent,
    HomeNavComponent,
    InvestorLoginComponent,
    InvestorRegisterComponent,
    ForgotInvestorPasswordComponent,
    ApplyForInvestmentComponent,
    AgroprocessorDashboardComponent,
    InvestorDashboardComponent,
    ShowPredictionComponent,
    AddPredictionComponent,
    BarChartComponent,
    PieChartComponent,
    DoughnutPieChartComponent,
    InvestorBarchartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
  ],
  providers: [ProjectService, LocalStorageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
