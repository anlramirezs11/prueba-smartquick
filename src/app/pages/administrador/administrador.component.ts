import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  showTabla: boolean;
  showResumen: boolean;
  constructor() { 
    this.showTabla = true;
    this.showResumen = false;
  }

  ngOnInit() {
   
  }

  verTabla(){
    this.showTabla = true;
    this.showResumen = false;
  }
  verResumen(){
    this.showTabla = false;
    this.showResumen = true;
  }

}
