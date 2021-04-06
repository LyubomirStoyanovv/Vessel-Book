import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IShip } from './ship';

@Component({

  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
  
})
export class ShipDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  ship: IShip | undefined;
  constructor(private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.ship = {   
        "shipId": 1,
        "imageUrl": "assets/images/garden_cart.png",
        "shipName": "FastNFurious",
        "shipIMO": 'BS-1234',
        "shipType":"Destroyer",
        "shipOwner": "US Government",
        "shipContacts": "gosho@icb.bg"
    };
  }

  onBack(): void{

    this.router.navigate(['/ships']);
    
  }

}
