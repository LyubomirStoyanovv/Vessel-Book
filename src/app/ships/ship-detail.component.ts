import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IShip } from './ship';

@Component({

  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
  
})
export class ShipDetailComponent implements OnInit {

  // @Input() element: IShip | undefined;
  pageTitle: string = "Ship Detail";
  ship: IShip | undefined;
  // dataReceived:string="";
  constructor(public route:ActivatedRoute, public router: Router) { 
    // this.activatedRoute.queryParams.subscribe((data)=>{
    //   this.dataReceived = JSON.stringify(data);
    // })
  }
  
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    console.log(this.ship?.shipName);
    // this.pageTitle += `: ${id}`;
    // this.ship = {   
    //     "shipId": 1,
    //     "imageUrl": "assets/images/garden_cart.png",
    //     "shipName": "FastNFurious",
    //     "shipIMO": 'BS-1234',
    //     "shipType":"Destroyer",
    //     "shipOwner": "US Government",
    //     "shipContacts": "gosho@icb.bg"
    // };
  }

  onBack(): void{

    this.router.navigate(['/ships']);
    
  }

}
