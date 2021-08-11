import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router) { }

  get f() { return this.registerForm.controls; }

  userForm() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      website: [null, Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.createUser(this.registerForm.value).then((res) => {
      // this.submitted = false;
      // this.registerForm.reset();
      alert('User Created Successfully');
      this.router.navigate(['user-list']);
    }).catch((err) => {
      console.log(err);
    })
  }

  ngOnInit(): void {
    this.userForm();
  }

}
