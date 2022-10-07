import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
import { EnrollmentService } from '../enrollment.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {


  constructor(public bookservice:BookserviceService,private enrollmentService:EnrollmentService,
    private router:Router,private dataserviceservice:DataserviceService) { }

  newBook1:any={};

  resetDate() {
    this.bookservice.bdate = this.formatDate(new Date());
    this.bookservice.rdate = this.formatDate(new Date());
  }

 formatDate(d: Date) {
   var month = "" + (d.getMonth() + 1),
   day = "" + d.getDate(),
   year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month
    }

    if (day.length < 2) {
      day = '0' + day
    }

    return year + '-' + month + '-' + day

 }

  editForm(bookForm:any){
    this.newBook1=this.book;
    this.newBook1={};
  }

  enrollBook(book:any){
    // console.log(book)
    //   this.enrollmentService.enroll(book);
    console.log(JSON.stringify(book))
var borrowing={
  
  "book":book,
  "bdate": this.bookservice.bdate,
  "rdate": this.bookservice.rdate
}
this.dataserviceservice.postData(`BookDetail`,borrowing)
  }

  book:any;
  today: any = this.formatDate(new Date())
  ngOnInit(): void {
    
    /*subscribe method used from behaviorsubject */
    

    this.bookservice.selectedBook.subscribe((data)=>{
      this.book=data;
      console.log(this.book)
    })
    
  }
}
