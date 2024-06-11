import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService, Property } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];
  SellRent = 1;

  constructor(private route: ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void {
    // Determine SellRent based on the current route
    const routePath = this.route.snapshot.url.toString();
    if (routePath.includes('rent')) {
      this.SellRent = 2;
    } else if (routePath.includes('buy')) {
      this.SellRent = 1;
    }

    // Fetch properties based on SellRent value
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log('Route inside subscription:', routePath);
      },
      error => {
        console.log('HTTP error', error);
      }
    );
  }
}