import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.css']
})
export class PartnerDetailComponent implements OnInit {
  public list
  tripList: any;
  

  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.detailList()
  }

  async detailList(){
    try {
      let data=await this.api.post('get-trip-details', {
        username:"admin@gmail.com",
        password:"e10adc3949ba59abbe56e057f20f883e"
      })
      console.log(data);
      
      const list=data.response.details;
      console.log(list);
      
      this.tripList=[]
        for (let i = 0; i < list.length; i++) {
          const element = list[i];
          console.log(element);
          
          if(element){
            this.tripList.push(element)
          }
        }
      // console.log(list); 
      console.log(this.tripList);   
    } catch (error) {
      
    }
  }

}
