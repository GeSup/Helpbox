//can be deleted
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  accessToken: any;

  constructor(private cookieService: CookieService, private http: HttpClient) {
    this.getToken();
   }

   public getToken(){
     this.http.get('http://localhost:4000/token').subscribe((response: any) => {
       this.accessToken = response.token;
     })
   }

   public df_client_call(request, sessionId){
     var config = {
       headers: {
         'Authorization': "Bearer " + this.accessToken,
         'Content-Type': 'application/json; charset=utf-8'
       }
     };
     return this.http.post(
       'http://dialogflow.googleapis.com/v2/projects/' + environment.dialogflow.project_id + '/agent/sessions' + /*this.cookieService.get('sessionId')*/ sessionId + ':detectIntend',
       request,
       config
     )
   }

  //  request = {
  //   queryInput: {
  //       text: {
  //           text: action.payload.text,
  //           languageCode: 'en-US',
  //       },
  //   }
  // }
}
