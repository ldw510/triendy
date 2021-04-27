import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-partner",
  templateUrl: "./partner.component.html",
  styleUrls: ["./partner.component.css"],
})
export class PartnerComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  message: any;
  display = "none";

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
    });

    this.registerForm = this.formBuilder.group({
      first_name: ["", Validators.required],
      contact_no: ["", Validators.required],
      last_name: ["", Validators.required],
      email_id: ["", [Validators.required, Validators.email]],
      your_message: ["", Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  async onSubmit() {
    try {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      let data = await this.api.post("contact-us", this.registerForm.value);
      if (data.success == true) {
        // alert("123")
        this.message = data.message;
        this.display = "block"; 
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
          first_name: ["", Validators.required],
          contact_no: ["", Validators.required],
          last_name: ["", Validators.required],
          email_id: ["", [Validators.required, Validators.email]],
          your_message: ["", Validators.required],
        });
      } else {
        this.message = data.message;
      }
    } catch (error) {}
  }

  hidePop() {
    this.display = "none";
  }
}


