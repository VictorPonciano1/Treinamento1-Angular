import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

/*
//CÓDIGO DO CONTADOR
num: number = 1;
  ngDoCheck(): void {
      console.log('uma mudança foi feita')
  }
  adiciona1() {
    this.num++;
  }

  //CÓDIGO DA EXIBIÇÃO DO USUÁRIO NA HOME
  user: User | undefined;
  constructor(private userService: UserService) { //UTILIZADO EM MAIS CÓDIGOS
    this.user = userService.getUser();
  }
  */

  user: UserGit | undefined;
  username: String = '';

  constructor(private userService: UserService, private toastr: ToastrService) {}

  getGitUser() {

    //SUBSCRIBE CONTINUA DANDO ERRO, EXIGE UMA ESTRUTURA DE "IF E ELSE"
    this.userService.getGitUser(this.username).subscribe(
      (response: UserGit) => {
        this.user = response;
      },
      (error) => {
      //this.toastr.error(error.error.message);
        if (error.error.message == 'Not Found') {
          this.toastr.error("Usuário não encontrado");
        }
    });
  }
}


