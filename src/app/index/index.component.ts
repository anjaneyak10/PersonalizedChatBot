import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  indexPath: string = "";
  indexResponse: any;

  constructor(private http: HttpClient,
    private router:Router) {}

  redirectToSearch() {
    this.router.navigateByUrl('/search');
  }

  index(){
    const postData = { "path": this.indexPath };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>('http://localhost:9083/indexFiles', postData, httpOptions).subscribe(response => {
      if (response['message'] == "Indexing successful") {
        this.indexResponse = "Successfully indexed files"
      }
      else{
        this.indexResponse = "Indexing failed. Reason: "+ response['error']
      }
      

      console.log(response);
    }, error => {
      this.indexResponse = error;
      console.error(error);
    });
  }

}
