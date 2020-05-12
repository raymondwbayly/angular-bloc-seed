import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-http-test-root',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HTTPViewComponent {
  public title = 'http view test';
  constructor(private httpClient: HttpClient) { }

  public method1Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }

  public method2Call(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/user12').subscribe(
      success => {
        console.log('Successfully Completed');
        console.log(success);
      }
    );
  }
}
