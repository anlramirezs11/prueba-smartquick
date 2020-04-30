import { Component, OnInit } from '@angular/core';
import { OlimpicWinnersService } from '../../services/olimpic-winners.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  winners: any;
  medallas: any;
  constructor(private olimpicWinnersService: OlimpicWinnersService) { 
    this.medallas = [{
      "tipoMedalla": "Oro",
      "acumulado":0,
      "Image": "../../../assets/image/oro.jpg"
    },
    {
      "tipoMedalla": "Plata",
      "acumulado":0,
      "Image": "../../../assets/image/plata.jpg"
    },
    {
      "tipoMedalla": "Bronce",
      "acumulado":0,
      "Image": "../../../assets/image/bronce.jpg"
    },
    {
      "tipoMedalla": "Total",
      "acumulado":0,
      "Image": "../../../assets/image/todas.jpg"
    }
  ]
  }

  ngOnInit() {
    this.olimpicWinnersService.getData().subscribe(winners => {
      this.winners = winners;
      this.winners.forEach(winner => {
        this.medallas[0].acumulado += winner.gold;
        this.medallas[1].acumulado += winner.silver;
        this.medallas[2].acumulado += winner.bronze;
        this.medallas[3].acumulado += winner.total;
      });
      console.log(this.medallas)

    }, (errorService) => {
      console.log(errorService);
    });
  }
}
