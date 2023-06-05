import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Token } from '../models/Token.entity';
import { TokensPort } from 'src/app/config/ports/Tokens/Tokens-ports';

@Injectable({
  providedIn: 'root'
})

export class PostTokenUseCase {

  constructor (private _tokenGateWay: TokensPort) {}

  postTokens (contenido: any | string) : Observable<Token> {
    return this._tokenGateWay.postTokens(contenido);
  }

}

