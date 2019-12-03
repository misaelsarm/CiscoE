import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medios-red-capa-fisica',
  templateUrl: './medios-red-capa-fisica.page.html',
  styleUrls: ['./medios-red-capa-fisica.page.scss']
})
export class MediosRedCapaFisicaPage implements OnInit {
  medios: tema[] = [
    {
      titulo: 'Cable de cobre',
      redirectTo:'/medios-red-capa-fisica/cable-de-cobre'
    },
    {
      titulo: 'Cable de fibra óptica',
      redirectTo:'/medios-red-capa-fisica/cable-de-fibra-optica'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface tema {
  titulo: string;
  redirectTo: string;
}
