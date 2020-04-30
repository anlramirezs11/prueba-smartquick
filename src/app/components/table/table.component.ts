import { Component, OnInit } from '@angular/core';
import { OlimpicWinnersService } from '../../services/olimpic-winners.service';
import { PaginationInstance } from '../../../../node_modules/ngx-pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  winners: any;
  p: number = 1;


  constructor(private olimpicWinnersService: OlimpicWinnersService) {
    this.winners = {};
  }

  ngOnInit() {
    this.olimpicWinnersService.getData().subscribe(winners => {
      this.winners = winners;
    }, (errorService) => {
      console.log(errorService);
    });
  }



}
