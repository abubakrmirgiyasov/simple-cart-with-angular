import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ICreate } from "../../types/Create";

@Injectable({
  providedIn: 'root'
})

export class CreateProductService {

  constructor(private http: HttpClient) { }

  createdData(data: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    const httpOptions = {
        headers: headers
    };

    this.http.post<ICreate>(
        "/api/Minios",
        data,
        httpOptions).subscribe((data) => {

    }, (error) => {
          console.log(error);
    });
  }
}
