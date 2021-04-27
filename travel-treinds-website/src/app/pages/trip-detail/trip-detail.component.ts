import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
  public list
  tripDetails: any;
  partner_id
  constructor(
    private api:ApiService, private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
  
    this.partner_id=this.router.snapshot.paramMap.get('id')
    this.tripDetail()
  }

  async tripDetail(){
    try {
      let data=await this.api.post('get-partner-detail', {
        partner_id:this.partner_id,
      })
      console.log(data);
      this.tripDetails=data.response.partner_detail;
       console.log(this.tripDetails);
    } 
    catch (error) {
      
    }
  }

}
