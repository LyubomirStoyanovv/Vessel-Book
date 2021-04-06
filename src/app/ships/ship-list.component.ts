import { Component, OnInit } from "@angular/core";
import { IShip } from "./ship";

@Component({

    selector:'pm-ships',
    templateUrl: './ship-list.component.html',
    styleUrls:['./ship-list.component.css']
})

export class ShipListComponent implements OnInit{
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
        console.log("In setter:", value);
        this.filteredShips = this.performFilter(value);
    }
    
    
    filteredShips: IShip[] = [];
    ships: IShip[] = [
        {   
            "imageUrl": "assets/images/garden_cart.png",
            "shipName": "FastNFurious",
            "shipIMO": 'BS-1234',
            "shipType":"Destroyer",
            "shipOwner": "US Government",
            "shipContacts": "gosho@icb.bg"
        },
        {   
            "imageUrl": "assets/images/hammer.png",
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