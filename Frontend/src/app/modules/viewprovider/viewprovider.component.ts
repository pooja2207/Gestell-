import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../service/provider.service';
import {ActivatedRoute, Route} from '@angular/router';
@Component({
  selector: 'app-viewprovider',
  templateUrl: './viewprovider.component.html',
  styleUrls: ['./viewprovider.component.css']
})
export class ViewproviderComponent implements OnInit {
  id:string;
  providerDetail:any;
  otherData:any;
  imagePath:any;
  constructor(private providerservice:ProviderService,
    private activatedroute:ActivatedRoute) {
      this.activatedroute.params.subscribe(result=>{
        this.id = result.id;
     });
    }
  ngOnInit() {
    alert("hi");
    this.getProviderDetail()
  }

  getProviderDetail(){
    console.log("hi");
    this.providerservice.GetProviderDetails(this.id).subscribe(result=>{
      console.log(result);
      if(result['status'] === "success"){
        this.providerDetail = result['data'];
        this.otherData = result['otherdata'];
          if(this.providerDetail != undefined){
            this.imagePath = result['otherdata']['image_path'];
          }
        }else{
        //this.notify.showError(result['message']);
        }
    })
  }

}
