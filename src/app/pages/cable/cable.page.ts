import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cable',
  templateUrl: './cable.page.html',
  styleUrls: ['./cable.page.scss']
})
export class CablePage implements OnInit {
  cable: tema[] = [
    {
      titulo: 'Cable directo, cable cruzado y cable consola',
      redirectTo: '/cable/cables'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface tema {
  titulo: string;
  redirectTo: string
}
