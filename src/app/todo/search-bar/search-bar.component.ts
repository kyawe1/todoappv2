import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output()
  searchfun=new EventEmitter<string>();
  search_string:string="";

  constructor() { }

  ngOnInit(): void {
  }
  OnSearch(){
    if(this.search_string.length!=0){
      this.searchfun.emit(this.search_string);
    }
  }
}
