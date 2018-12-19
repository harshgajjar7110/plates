import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Language',
  templateUrl: './Language.component.html',
  styleUrls: ['./Language.component.css']
})
export class LanguageComponent implements OnInit {
  custom:string;

  constructor() { 
  }
customsearch(){
  console.log(this.custom);
  
}
  ngOnInit() {
  }

}
