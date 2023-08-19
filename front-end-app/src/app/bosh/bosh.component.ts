import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bosh',
  templateUrl: './bosh.component.html',
  styleUrls: ['./bosh.component.css']
})
export class BoshComponent implements OnInit {

  title = "Mashinalar";

  public cars: Car[] = [];

  public car: Car

  constructor() {
    this.cars = [
      {
        name: 'Audi',
        model: 'RS8',
        speed: 300,
        conditions: ["Qo\u2018lda boshqariladigan", "O\u2018zi boshqariladigan", 'Kam yoqilg\u2018i sariflaydi'],
        design: {
          car: "Oq",
          solon: 'Qora',
          wheels: 'Kumushrang'
        }
      },
      {
        name: 'BMW',
        model: 'M5',
        speed: 270,
        conditions: ["Qo\u2018lda boshqariladigan", "O\u2018zi boshqariladigan"],
        design: {
          car: "Oq",
          solon: 'Qora',
          wheels: 'Kumushrang'
        }
      }
    ];

    this.car = this.cars[0];
  }

  ngOnInit() {

  }

  selectCar(name: string) {
    
    for (let car of this.cars) {
      if (car.name == name) {
        this.car = car;
        break;        
      }
    }
  }
}


interface Car {
  name: string;
  model: string;
  speed: number;
  conditions: string[],
  design: Design;
}

interface Design {
  car: string,
  solon: string,
  wheels: string
}