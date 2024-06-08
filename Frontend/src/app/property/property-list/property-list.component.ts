import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{

  properties: Property[] = [];

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(
      data=>{
        this.properties=data;
      },

      error=>{
        console.log('httperror');
      }
    )
  }
}
