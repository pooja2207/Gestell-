import { Component, OnInit ,ViewChild ,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService} from '../../service/provider.service';
declare var $;
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  title = 'Frontend';
  providerData:any;
  otherData:any;
  providerDatalength:any;
  totalRecords:any;
  imagePath:any;
  dataTable:any;
  tabledata:[];
  dtOptions: any = {};
  @ViewChild('dataTable', {static: true}) table;

  
  constructor(private renderer: Renderer2,
    private router: Router,
    private providerservice:ProviderService) { }
    ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'pdf','excel', 'print'
        ]
    };
    this.getAllProviders();
    
  }

  getAllProviders(){
    this.providerservice.GetProviders().subscribe(result=>{
    if(result['status'] === "success"){
      this.providerData = result['data'];
      this.otherData = result['other_data'];
      if(this.providerData != undefined){
        this.providerDatalength = this.providerData.length;
        this.imagePath = result['other_data']['image_path'];
      }
      }else{
      //this.notify.showError(result['message']);
      }
      this.dtOptions = {
        data: this.providerData,
        otherdata:this.otherData,
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'pdf','excel', 'print'
        ],
        columns: [
          {title: 'Id', data: 'id'},
          {title: 'Name', data: 'name'},
          {title: 'Lowest Price', data: 'lowest_price'},
          {title: 'Rating', data: 'rating'},
          {title: 'Max speed', data: 'max_speed'},
          {title: 'Description', data: 'description'},
          {title: 'Contact No', data: 'contact_no'},
          {title: 'Image', 
          "render": function(data, type, providerdata) {
           console.log(providerdata.image_path);
            return '<a target="_blank" href="http://127.0.0.1:8000/images/'+providerdata.image+'"><img src="http://127.0.0.1:8000/images/'+providerdata.image+'" target="_blank" style="height:100px;width:100px;"/></a>';
        }},
          {title: 'Email', data: 'email'},
          {
            title: 'Action',
          render: function (data, type, providerdata) {
            return '<a href="view-provider/'+providerdata.id+'"  routerLink="view-provider/'+providerdata.id+'" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">visibility</i></a>';
          }
        }
        ]
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
   });


  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }

}
