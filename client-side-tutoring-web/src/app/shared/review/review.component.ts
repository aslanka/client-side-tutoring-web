import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  scriptElement: HTMLScriptElement;
  wordArr = ['TutorBest teaches with genuine love and care', 'Our tutor was always available to help my kids', 'Our kids got into top colleges from them', 'The best 1on1 tutoring ive ever had', 'It used to be fun to go to class'];

  text = 'The most genuine tutors I have seen';
  counter = 0;

  constructor() { 
    this.scriptElement = document.createElement("script");
    this.scriptElement.src = "src/app/shared/review/slider.js";
    document.body.appendChild(this.scriptElement);
  }

  ngOnInit(): void {
    setInterval(() => {
      if(this.counter == this.wordArr.length-1) this.counter = 0; 
      this.counter++;
      this.text = this.wordArr[this.counter];
    }, 3000);
    this.scriptElement = document.createElement("script");
    this.scriptElement.src = "src/app/shared/review/slider.js";
    document.body.appendChild(this.scriptElement);
  }
}
