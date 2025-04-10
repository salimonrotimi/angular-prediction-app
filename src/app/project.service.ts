import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  isAuthenticated = false;
  isUserAuthenticated = false;
  isInvestorAuthenticated = false;

  // Using the environment variable to pass the API URL
  readonly projectAPIUrl = environment.dotnetApiUrl;
  readonly machineLearnAPIUrl = environment.flaskApiUrl;

  // USING THE API URL DIRECTLY IN THIS FILE
  // readonly projectAPIUrl = "https://prediction-backend-api-dwbmdqfnamgdhzf5.canadacentral-01.azurewebsites.net/api";
  // readonly machineLearnAPIUrl = "https://render-flask-api-s3qt.onrender.com/predictapi";

  //Dependency injection of the HttpClient in the constructor using the http variable
  constructor(private http: HttpClient) { }

  //GET service connection for Registers
  getRegisterList():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/registers');
  }

  //GET service connection for Registers from the api by parameters (Just for example) e.g. from
  // https://localhost:7134/api/registers?userId=1&page=5&filterBy=true
  getRegisterListByParameter():Observable<any[]>{
    let params1 = new HttpParams().set('userId', '1').set("page", "5").set("filterBy", true);
    return this.http.get<any>(this.projectAPIUrl + '/registers', {params: params1});
  }

  //POST service connection for Registers
  addRegister(userInfo: any){
    return this.http.post(this.projectAPIUrl + '/registers', userInfo, {responseType: "text"});
  }

  //UPDATE service connection for Registers
  updateRegister(id:number|string, data:any){
    return this.http.put(this.projectAPIUrl + `/registers/${id}`, data);
  }

  //DELETE service connection for Registers
  deleteRegister(id:number|string){
    return this.http.delete(this.projectAPIUrl + `/registers/${id}`);
  }

  //POST service connection for Logins
  addLogin(loginInfo: any){
    return this.http.post(this.projectAPIUrl + '/logins', loginInfo, {responseType: "text"});
  }

  //POST service connection for ForgotPasswords
  updatePassword(dataInfo: any){
    return this.http.post(this.projectAPIUrl + '/forgotpasswords', dataInfo, {responseType: "text"});
  }

  //GET service connection for Investors
  getInvestorList():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investors');
  }

  //POST service connection for Investors
  addInvestor(investorInfo: any){
    return this.http.post(this.projectAPIUrl + '/investors', investorInfo, {responseType: "text"});
  }

  //UPDATE service connection for Investors
  updateInvestor(id:number|string, data:any){
    return this.http.put(this.projectAPIUrl + `/investors/${id}`, data);
  }

  //DELETE service connection for Investors
  deleteInvestor(id:number|string){
    return this.http.delete(this.projectAPIUrl + `/investors/${id}`);
  }

  //GET service connection for Investors total amount
  getTotalAmountInvested():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investors/totalamount');
  }

  //GET service connection for Investors number of investors
  getNumberOfInvestors():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investors/numberofinvestors');
  }

  //GET service connection for Investors highest investment
  getHighestAmountInvested():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investors/highestinvestment');
  }

  //GET service connection for InvestmentApplications
  getTopInvestors():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investors/topinvestors');
  }

  //POST service connection for Logins
  addInvestorLogin(loginInfo: any){
    return this.http.post(this.projectAPIUrl + '/investorlogins', loginInfo, {responseType: "text"});
  }

  //POST service connection for ForgotPasswords
  updateInvestorPassword(dataInfo: any){
    return this.http.post(this.projectAPIUrl + '/forgotinvestorpasswords', dataInfo, {responseType: "text"});
  }

  //GET service connection for InvestmentApplications
  getInvestmentAppList():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investmentapplications');
  }

  //POST service connection for InvestmentApplications
  addInvestmentApp(investmentInfo: any){
    return this.http.post(this.projectAPIUrl + '/investmentapplications', investmentInfo, {responseType: "text"});
  }

  //UPDATE service connection for InvestmentApplications
  updateInvestmentStatus(data:any){
    return this.http.post(this.projectAPIUrl + '/investmentapplications/updatestatus', data, {responseType: "text"});
  }

  //DELETE service connection for InvestmentApplications
  deleteInvestmentApp(id:number|string){
    return this.http.delete(this.projectAPIUrl + `/investmentapplications/${id}`, {responseType: "text"});
  }

  //GET service connection for InvestmentApplications number of loan applicants
  getNoOfLoanApplicants():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investmentapplications/numberofloanapplicants');
  }

  //GET service connection for InvestmentApplications total loan amount
  getTotalLoanAmountRequested():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investmentapplications/totalloanamount');
  }

  //GET service connection for InvestmentApplications highest loan amount
  getHighestLoanAmountRequested():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investmentapplications/highestloanrequest');
  }

  //GET service connection for InvestmentApplications
  getTopLoanRequest():Observable<any[]>{
    return this.http.get<any>(this.projectAPIUrl + '/investmentapplications/topinvestmentrequest');
  }

  //POST service connection to machine learning Flask api
  getPrediction(predictInfo: any){
    return this.http.post(this.machineLearnAPIUrl, predictInfo, {responseType: "json"});
  }

}
