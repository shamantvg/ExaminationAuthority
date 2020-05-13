import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FieldsService } from '../fields.service';
import * as $ from 'jquery';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {


  error: any = null;
  loaderShow : any = null;
  regContent: any = true;
  TableContent: any = null;
  ResultList = [];
  ResultHead = [];
  totalMarks : any = null;
  couter : number = 0;
  Grade : any = null;

  constructor(private FieldsList: FieldsService) {

  }

  getStudentRes(form: NgForm) {

    //console.log(form.value);
    this.loaderShow = true;
    this.error = null;
    this.regContent = true;
    this.TableContent = null;

    let reg_no = $("#reg_no").val();
    let dob = $("#dob").val();
    //alert(b_date);
    //alert(reg_name);
    if ((reg_no !== "") && (dob !== "")) {
      //console.log(form.value);

      //console.log(Assignform.value);
      this.FieldsList.getResult(form.value).subscribe((result) => {

        //console.log(result);
        this.loaderShow = null;

        if (result.length > 0) {
          this.ResultList = result[0].sub;
          this.ResultHead = result[0];
          let gradeCouter = 0;

          this.ResultList.forEach(element => {
            if(element.extmarks < 35){
              gradeCouter++;
            }
            this.couter = this.couter + element.extmarks + element.intmarks;
          });

          this.totalMarks = this.couter;

          let finalRes = this.totalMarks / result[0].sub.length;

          if(gradeCouter === 0){
            if(finalRes < 35){
              this.Grade = "Fail";
            }else if(finalRes > 34 && finalRes < 90){
              this.Grade = "Pass";
            }else if(finalRes > 89 && finalRes < 100){
              this.Grade = "Distinction";
            }else{
              this.Grade = "Fail";
            }
          }else{
            this.Grade = "Fail";
          }

          

          this.error = null;
          this.regContent = null;
          this.TableContent = true;
          //localStorage.setItem('token', result.token);
          //this.router.navigateByUrl('/home-page');
        } else {
          this.error = "Access has been disabled.";
          this.showMessage("error",this.error);
          this.regContent = true;
          this.TableContent = null;
        }

      }, err => {
        //console.log(JSON.stringify(err));
        this.loaderShow = null;
        this.error = "Invalid request.";
        this.showMessage("error",this.error);
        this.regContent = true;
        this.TableContent = null;
      });
    }
    else {
      this.loaderShow = null;
      this.error = "Invalid request.";
      this.showMessage("error",this.error);
      this.regContent = true;
      this.TableContent = null;
    }
  }

  ngOnInit() {
    
  }

  checkResult() {
    window.location.reload();
  }

  showMessage(iconVal,titleVal){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: iconVal,
      title: titleVal
    })
  }
}
