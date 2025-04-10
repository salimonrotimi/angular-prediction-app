import { Component, OnInit} from '@angular/core';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-prediction',
  templateUrl: './show-prediction.component.html',
  styleUrls: ['./show-prediction.component.css']
})
export class ShowPredictionComponent implements OnInit {

  serverMessage!: string;
  dbPrediction:any;
  id!:number;
  investmentAppList$!: Observable<any[]>

  activateAddEditPredictionComponent = false;
  modalTitle = "";

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.investmentAppList$ = this.service.getInvestmentAppList();
  }

  prediction(){
    this.dbPrediction = {
      id: 0,
      gender: null,
      age: null,
      married: null,
      yearsOfEstablishment: null,
      education:  null,
      selfEmploy:  null,
      applicantIncome: null,
      coapplicantIncome: null,
      investmentAmount: null,
      investmentDuration: null,
      creditHistory: null,
      agroplantLocation: null,
    }
    this.modalTitle = "Test Prediction";
    this.activateAddEditPredictionComponent = true;
  }

  getPrediction(item:any){
    /* the "inspect" variable is used with property binding [prediction] to pass data pulled
       out of the the database (which is stored in the "item" variable) to the
       app-add-edit-Prediction.ts file through the <app-add-edit-prediction> tag */
    this.dbPrediction = item;
    this.modalTitle = "Data Prediction";
    this.activateAddEditPredictionComponent = true;
  }

  deleteInvestmentApp(item:any){
    if(confirm(`Are you sure you want to delete this Loan Application ${item.id}`)){
      this.service.deleteInvestmentApp(item.id).subscribe((res) => {
        this.serverMessage = res;
        if(this.serverMessage == "Success"){
          alert("Loan application deleted successfully");
        }

        else{
          alert("Delete failed. An error seems to have occured. Please try again.");
        }
      });

      this.investmentAppList$ = this.service.getInvestmentAppList();
    }
  }

  modalClose(){
    this.activateAddEditPredictionComponent = false;
    this.investmentAppList$ = this.service.getInvestmentAppList();
  }

  refreshTable(){
    this.investmentAppList$ = this.service.getInvestmentAppList();
  }
}
