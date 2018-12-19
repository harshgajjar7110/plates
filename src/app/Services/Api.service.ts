import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  users: any[];
input: string;
id: string;
  constructor(private http: HttpClient) { }
 express() {
    return this.http.get( ' https://api.github.com/search/repositories?q=express+boilerplate&sort=stars&order=desc');
  }
  nodejs() {
    return this.http.get(' https://api.github.com/search/repositories?q=node+boilerplate&sort=stars&order=desc');
  }
  angular() {
    return this.http.get(' https://api.github.com/search/repositories?q=angular2+boilerplate&sort=stars&order=desc');
  }
  python() {

    return this.http.get(' https://api.github.com/search/repositories?q=python+boilerplate&sort=stars&order=desc');
  }
  react() {
    return this.http.get(' https://api.github.com/search/repositories?q=react+boilerplate&sort=stars&order=desc');
  }
  django() {

    return this.http.get(' https://api.github.com/search/repositories?q=django+boilerplate&sort=stars&order=desc');
  }
  php() {

    return this.http.get(' https://api.github.com/search/repositories?q=php+boilerplate&sort=stars&order=desc');
  }

  ios() {

    return this.http.get(' https://api.github.com/search/repositories?q=ios+boilerplate&sort=stars&order=desc');
  }
  android() {

    return this.http.get(' https://api.github.com/search/repositories?q=android+boilerplate&sort=stars&order=desc');
  }
  wordpress() {

    return this.http.get(' https://api.github.com/search/repositories?q=wordpress+boilerplate&sort=stars&order=desc');
  }
 jquery() {

    return this.http.get(' https://api.github.com/search/repositories?q=jquery+boilerplate&sort=stars&order=desc');
  }


  api(input: string) {
    return this.http.get('https://api.github.com/search/repositories?q=public+api&sort=stars&order=desc');
  }
}
