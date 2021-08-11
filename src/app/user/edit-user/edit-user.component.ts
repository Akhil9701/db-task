import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  id: number;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private route: ActivatedRoute) { }

  get f() { return this.registerForm.controls; }

  userForm() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      website: [null, Validators.required],
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.updateUser(this.id,this.registerForm.value).then((res) => {
      alert('User Updated Successfully');
      this.router.navigate(['user-list']);
    }).catch((err) => {
      console.log(err);
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.userForm();
    this.userService.getUserById(this.id).then((res) => {
      this.f.name.setValue(res.name);
      this.f.email.setValue(res.email);
      this.f.phone.setValue(res.phone);
      this.f.website.setValue(res.website);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
