import { PersonnageService } from './../../services/personnage.service';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnage } from 'src/app/models/personnage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss'],
})
export class AffichageComponent implements OnInit {
  persoList: Personnage[] = [];

  constructor(private persoService: PersonnageService) {}

  ngOnInit(): void {
    this.getAll();
  }

   getAll() {
    this.persoService.getAll().subscribe({
      next: (data) => (this.persoList = data),
      error: (err) => console.error(err),
      complete: () => console.log('Persnnage is here'),
    });
  }


}
