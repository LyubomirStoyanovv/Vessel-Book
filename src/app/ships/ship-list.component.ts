import { Component, OnInit } from "@angular/core";
import { IShip } from "./ship";
// import {Router} from '@angular/router';
@Component({


    templateUrl: './ship-list.component.html',
    styleUrls:['./ship-list.component.css']
    
})

export class ShipListComponent implements OnInit{
    
    // constructor(public router:Router){

    // }

    // PassDataToOtherPage(){

    //     this.router.navigate(['ships'],{queryParams:{id:1,name:"xyz"}});
    // }
    
    pageTitle: string = 'Ship list';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter: string = '';
    
    get listFilter() : string {
        return this._listFilter;
    }
    
    set listFilter(value : string) {
        this._listFilter = value;
        this.filteredShips = this.performFilter(value);
    }    
    
    filteredShips: IShip[] = [];
    ships: IShip[] = [
        {   
            "shipId": 3,
            "imageUrl": "assets/images/HMS-Furious.png",
            "shipName": "FastNFurious",
            "shipIMO": 'BS-1234',
            "shipType":"Destroyer",
            "shipOwner": "US Government",
            "shipContacts": "gosho@icb.bg"
        },
        {   
            "shipId": 4,
            "imageUrl": "assets/images/ship-design-overview.jpg",
            "shipName": "Shlupka",
            "shipIMO": 'CH-1231',
            "shipType":"Scout",
            "shipOwner": "BG Governemnt",
            "shipContacts": "pesho@icb.bg"
        }
    ];

    performFilter(filterBy: string): IShip[]{

        filterBy = filterBy.toLocaleLowerCase();
        return this.ships.filter((ships: IShip) => ships.shipName.toLocaleLowerCase().includes(filterBy));
    }
    toggleImage(): void{

        this.showImage = !this.showImage;
    }
    ngOnInit(): void{
        this.listFilter ='';
    }

    
}