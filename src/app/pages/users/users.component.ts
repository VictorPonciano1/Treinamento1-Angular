import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: String[] = ['Felipe','Edgar','Rian', 'João'];

  userSelecionado: User | undefined;

  userForms: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
      this.initializeForm();
  }

  initializeForm() {
    this.userForms = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(150)]]
    });
  }

  EnviarForm() {
    if(this.userForms.valid) {
      this.users.push(this.userForms.value);
      this.userForms.reset();
    }
  }

  users: User[] = [
    {
      nome: 'Felipe',
      idade: 19
    },
    {
    nome: 'Edgar',
    idade: 18
    },
    {
    nome: 'Rian',
    idade: 20
    }
  ]

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
    this.userService.setUser(user);
  }
}
