import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokensPort } from '../../ports/Tokens/Tokens-ports';
import { Token } from 'src/app/domain/Tokens/models/Token.entity';

@Injectable({
  providedIn: 'root'
})
export class TokensAdapter implements TokensPort {
  apiUrl = environment.apiDocente + 'GenerarToken';

  constructor(private http: HttpClient) {}

  postTokens(Contenido: any): Observable<Token> {
    return this.http.post<any>(`${this.apiUrl}`, Contenido);
  }

}
