import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadPermissionsService {

  constructor(
    private http: HttpClient
  ) { }

  public delay() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }

  public async loadPermissions(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    //await this.delay();
    await this.http.get(url)
      .toPromise();
      /* com 'ALWAYS_PERMISSION': about vai pra not-found; sem 'ALWAYS_PERMISSION': about vai para denied; vide CustomGuard.  */
    return ['DEVELOPER', 'EDIT', 'ALWAYS_PERMISSION'];

  }
}
