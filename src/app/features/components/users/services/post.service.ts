import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getPostByUserId(id: number) {
    return this._http.get(`/posts?userId=${id}`);
  }
}
