import { Component, OnInit } from '@angular/core';
import {Employee} from './models/employee';
import {EmployeeServiceService} from './services/employee-service.service';
@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent implements OnInit {

  employees! : Employee[] 
  gridColumns = 3;
  constructor(private employeeService : EmployeeServiceService) { }

  selected = false;
  onSelectCard() {
    this.selected = !this.selected;
  }

  
  imageUrl = "https://media-exp1.licdn.com/dms/image/C4D03AQHWHEgR7l3yVQ/profile-displayphoto-shrink_400_400/0/1649277254754?e=1675900800&v=beta&t=vxEwSZvTQAXw5p2EavY4ntiY_HZv_bqCJYyXiDnEcxU"
  ngOnInit(): void {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
      console.log(this.employees![0].profile_picture);
    })
  }

  openResume(){
    window.open("file:///Users/aslanka/Downloads/AYUSHresume.pdf");
  }
}
