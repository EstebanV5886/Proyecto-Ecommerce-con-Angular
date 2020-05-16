import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactusService } from '../../services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public contactUsService: ContactusService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name:["", Validators.required],
      phone:["", Validators.required],
      email:["", Validators.required],
      message:["", Validators.required]
    })
  }

  onSubmit(){
    let dataSet = {
      name: this.contactForm.get('name').value,
      phone: this.contactForm.get('phone').value,
      email: this.contactForm.get('email').value,
      message: this.contactForm.get('message').value
    };

    this.contactUsService.contactUs(dataSet).subscribe(
      res => {
        console.log(res);
      }
    )

  }

}
