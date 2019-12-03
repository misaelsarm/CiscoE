import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cisco1',
  templateUrl: './cisco1.page.html',
  styleUrls: ['./cisco1.page.scss'],
})
export class Cisco1Page implements OnInit {

  cisco1: tema[] = [
    {
      titulo: 'Configuración básica de dispositivos Cisco',
     redirectTo: '/cisco1/configuracion-basica-dispositivos'
    },
    {
      titulo: 'Direccionamiento de red IPv6',
     redirectTo: '/cisco1/direccionamiento-red-ipv6'
    },
    {
      titulo: 'Direcciones IPv4',
     redirectTo: '/cisco1/direcciones-ipv4'
    },
    {
      titulo: 'Historia de redes',
     redirectTo: '/cisco1/historia-de-redes'
    },
    {
      titulo: 'Modelos TCP y OSI',
     redirectTo: '/cisco1/modelos-tcp-osi'
    },
    {
      titulo: 'Representaciones de red',
     redirectTo: '/cisco1/representaciones-de-red'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface tema{
  titulo: string;
 redirectTo: string;
}
