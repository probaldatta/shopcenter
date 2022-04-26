import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
    
  }

  openAlert(loginSuccess:boolean , title:string , text?:any,){
    if(loginSuccess == true){
      Swal.fire({
        title: title + " Successful",
        text:text,
        icon:'success',
        timer: 1000,
        showConfirmButton:false
      })
    }else{
      Swal.fire({
        title: title + " Failed",
        text: text,
        icon:'error',
        timer: 1000,
        showConfirmButton:false
      })
    }
    
  }


}
