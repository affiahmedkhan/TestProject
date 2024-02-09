import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Adjust the path as necessary
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  cityName: string = '';
  items: any = []; // Use a more specific type instead of `any` if possible
  displayedColumns: string[] = ['id', 'name'];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchCities();
  }
  fetchCities() {
    this.dataService.getData().subscribe({
      next: (data) => (this.items = data),
      error: (error) => console.error(error),
    });
  }

  addCity() {
    if (!this.cityName) return;
    const newCity = { name: this.cityName };
    this.dataService.addCity(newCity).subscribe({
      next: () => {
        this.cityName = '';
        this.fetchCities();
      },
      error: (error) => console.error(error),
    });
  }
}
