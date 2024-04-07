import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string="";
  searchResponse: any;

  constructor(private http: HttpClient, private router:Router) {}

  redirectToIndex() {
    this.router.navigateByUrl('/index');
  }

  search() {

    const postData = { "question": this.searchQuery };


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>('http://localhost:9083/search', postData, httpOptions).subscribe(response => {
      this.searchResponse = response;
      console.log(response);
    }, error => {
      this.searchResponse = error;
      console.error(error);
    });
  }
}
