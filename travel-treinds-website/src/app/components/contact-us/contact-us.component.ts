import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray,FormBuilder, Validators,} from "@angular/forms";
import { ApiService } from "src/app/service/api.service";
import * as $ from 'jquery';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  partnerForm: FormGroup;
  submitted = false;
  tripsArr: Array<any> = [];
  message: any;
  display='none'
  forecasts: any;
  cacheForecasts: any;
  countries:Array<any>=[]

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.countryList();
    
    window.scrollTo({
      top: 0,
    });

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    });


    this.partnerForm = this.formBuilder.group({
      name: ["", Validators.required],
      dob: ["", Validators.required],
      email_id: ["", [Validators.required, Validators.email]],
      country: ["", Validators.required],
      instagram_handle: ["", Validators.required],
      monetise_trip: [false, Validators.required],
      trips: this.formBuilder.array([]),
    });

    this.partnerForm.controls.monetise_trip.valueChanges.subscribe((value) => {
      if (value) {
        if (this.trips().length == 0) {
          this.trips().push(
            this.formBuilder.group({
              trip_name: new FormControl("", Validators.required),
              activities_events: new FormControl("", Validators.required),
              provider_of_activity: new FormControl("", Validators.required),
            })
          );
        }
      }
    });
  }

  get f() {
    return this.partnerForm.controls;
  }

  trips(): FormArray {
    return this.partnerForm.get("trips") as FormArray;
  }

  addQuantity() {
    this.trips().push(
      this.formBuilder.group({
        trip_name: new FormControl("", Validators.required),
        activities_events: new FormControl("", Validators.required),
        provider_of_activity: new FormControl("", Validators.required),
      })
    );
  }

  removeQuantity(i: number) {
    this.trips().removeAt(i);
  }
  
  async countryList(){
    try {
      let data =await this.api.get('country-list')
      console.log(data)
      this.countries=data.response.country_list
    } catch (error) {      
    }
  }

  // filterForeCasts(filterVal: any) {
  //   if (filterVal == "0")
  //       this.forecasts = this.cacheForecasts;
  //   else
  //       this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);
  // }

  async onSubmit() {
    try {
      this.submitted = true;
      if (this.partnerForm.invalid) {
        return;
      }

      if (this.partnerForm.value.monetise_trip == false) {
        this.partnerForm.value.monetise_trip = 0;
      } else {
        this.partnerForm.value.monetise_trip = 1;
      }
      console.log(this.partnerForm.value);

      let data = await this.api.post("/partner-details", this.partnerForm.value);
      console.log(data);
      
      if (data.success == true) {
        this.message = data.message;
        this.display='block'
      } else {
        this.message = data.message;
      }
    } catch (error) {
      console.error(error);
      
    }
  }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.partnerForm.invalid) {
  //     return;
  //   }
  // }

  // trip() : FormArray {
  //   return this.partnerForm.get("trips") as FormArray
  // }

  // addQuantity() {
  //   this.trip().push(this.newQuantity());
  // }

  // newQuantity(): FormGroup {
  //   return this.formBuilder.group({
  //     trip_name: '',
  //     activities_events: '',
  //     provider_of_activity: '',
  //   })
  // }
  hidePop(){
    this.display='none'
    
    location.reload()
  }
}
