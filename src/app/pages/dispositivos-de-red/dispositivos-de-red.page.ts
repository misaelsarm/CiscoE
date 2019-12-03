import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivos-de-red',
  templateUrl: './dispositivos-de-red.page.html',
  styleUrls: ['./dispositivos-de-red.page.scss']
})
export class DispositivosDeRedPage implements OnInit {
  dispositivos: tema[] = [
    {
      titulo: 'Hardware del router',
      redirectTo:'/dispositivos-de-red/hardware-del-router'
    },
    {
      titulo: 'Hardware del switch',
      redirectTo:'/dispositivos-de-red/hardware-del-switch'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface tema {
  titulo: string;
  redirectTo: string;
}
