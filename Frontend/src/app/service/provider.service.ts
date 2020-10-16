import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  baseURl : string;
  constructor(private http:HttpClient) {
    this.baseURl = environment.baseUrl;
   }

   GetProviders(){
     return this.http.get(this.baseURl+'get_providers');
   }

   GetProviderDetails(id){
    return this.http.get(this.baseURl+'get_provider_detail/'+id);
   }
}
