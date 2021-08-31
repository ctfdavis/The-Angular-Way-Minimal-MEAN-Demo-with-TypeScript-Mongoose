import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Counter } from '../counters/counter.model';
import { environment } from 'frontend/environments/environment';

const baseUrl = `${environment.apiUrl}/counters`;

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private http: HttpClient) {}

  getCounters(): Observable<Counter[]> {
    return this.http.get<Counter[]>(`${baseUrl}`);
  }

  increment(counter: Counter): Observable<HttpResponse<Counter>> {
    const { _id, count, ...data } = counter;
    return this.http.put<Counter>(
      `${baseUrl}/${_id}`,
      { count: count + 1, ...data },
      { observe: 'response' }
    );
  }

  decrement(counter: Counter): Observable<HttpResponse<Counter>> {
    const { _id, count, ...data } = counter;
    return this.http.put<Counter>(
      `${baseUrl}/${_id}`,
      { count: count - 1, ...data },
      { observe: 'response' }
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, { responseType: 'text' });
  }

  create(form: {
    count: number;
    title: string;
    description: string;
  }): Observable<any> {
    return this.http.post<Counter>(baseUrl, form);
  }
}
