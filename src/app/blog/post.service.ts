import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {post} from "./blog/post";



@Injectable()
export class PostService {

  constructor(private http: Http) { }

headers = new Headers({

  'Content-Type': 'application/json',
});

  getPosts(): Observable<post[]>{

    let url = "http://localhost:3000/api/posts";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    });
  }

}

