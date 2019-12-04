import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cisco4',
  templateUrl: './cisco4.page.html',
  styleUrls: ['./cisco4.page.scss']
})
export class Cisco4Page implements OnInit {
  cisco4: tema[] = [
    {
      titulo: 'Encapsulación HDLC',
      redirectTo: '/cisco4/encapsulacion-hdlc'
    },
    {
      titulo: 'Funcionamiento de protocolo punto a punto',
      redirectTo: '/cisco4/protocolo-punto-a-punto'
    },
    {
      titulo: 'Túneles GRE',
      redirectTo: '/cisco4/tuneles-gre'
    },
    {
      titulo: 'VPN',
      redirectTo: '/cisco4/vpn'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
interface tema {
  titulo: string;
  redirectTo:string;
}
