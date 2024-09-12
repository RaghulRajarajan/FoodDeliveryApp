import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {emailjs} from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{

  form: FormGroup = this.formbuilder.group({
    from_name : ['',Validators.required],
    to_name : 'Admin',
    from_email: ['',Validators.required],
    subject: ['',Validators.required],
    message: ['',Validators.required],
  });


  constructor(private formbuilder:FormBuilder,private router:Router){}

  async send(){

    emailjs.init("BvpeX8XY1Hp4FYpq-");

    let response = await emailjs.send("service_2k7xodr","template_0xkyv3q",{
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    subject: this.form.value.subject,
    message: this.form.value.message,
    });

    alert("Email has been sent...");
    this.form.reset();
    this.router.navigate(['']);

  }

  get from_name(){
    return this.form.get("from_name");
  }

  get from_email(){
    return this.form.get("from_email");
  }

  get subject(){
    return this.form.get("subject");
  }

  get message(){
    return this.form.get("message");
  }

    
}


