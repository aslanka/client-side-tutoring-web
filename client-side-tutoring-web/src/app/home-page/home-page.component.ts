import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private fragment: string = "";
  quote : string =  "“Education is a progressive discovery of our own ignorance.”";
  author : string = "- Will Durant"
  wordArr = ['TutorBest teaches with genuine love and care', 'Our tutor was always available to help my kids', 'Our kids got into top colleges from them', 'The best 1on1 tutoring ive ever had', 'It used to be fun to go to class because I understood everything'];
  stopWord: any;
  text = 'The most genuine tutors I have seen';
  counter = 0;
  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder) { 
    
  }
  
  landingImage= "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211070.jpg?w=2000";
  universityImage = "https://www.freeiconspng.com/uploads/university-icon-0.png";
  majorsImage= "https://freepngimg.com/thumb/antique/131926-antique-book-stack-free-transparent-image-hd.png";
  hybridImage = "https://static.vecteezy.com/system/resources/previews/001/203/930/original/computer-png.png";
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  }); 
  isLinear = false;

  ngOnInit(): void {

    setInterval(() => {
      if(this.counter == this.wordArr.length-1) this.counter = 0; 
      this.counter++;
      this.text = this.wordArr[this.counter];
    }, 3000);

    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment!;
    });
    
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment)?.scrollIntoView();
    } catch (e) {}
  }

 
 





}
