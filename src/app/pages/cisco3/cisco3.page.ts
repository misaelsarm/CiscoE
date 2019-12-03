import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cisco3',
  templateUrl: './cisco3.page.html',
  styleUrls: ['./cisco3.page.scss']
})
export class Cisco3Page implements OnInit {
  cisco3: tema[] = [
    {
      titulo: 'Configuración de EIGRP para IPv4',
      redirectTo: '/cisco3/configuracion-eigrp-ipv4'
    },
    {
      titulo: 'Configuración de EIGRP para IPv6',
      redirectTo: '/cisco3/configuracion-eigrp-ipv6'
    },
    {
      titulo: 'Configuración de OSPFv3 de área única',
      redirectTo: '/cisco3/configuracion-ospfv3'
    },
    {
      titulo: 'Implementación básica de OSPFv2',
      redirectTo: '/cisco3/implementacion-basica-ospfv2'
    },
    {
      titulo: 'Protocolo EIGRP',
      redirectTo: '/cisco3/protocolo-eigrp'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface tema {
  titulo: string;
  redirectTo: string;
}
