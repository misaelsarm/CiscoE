import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cisco2',
  templateUrl: './cisco2.page.html',
  styleUrls: ['./cisco2.page.scss']
})
export class Cisco2Page implements OnInit {
  cisco2: tema[] = [
    {
      titulo: 'Configuración ACL de IPv4 Estándar',
      redirectTo: '/cisco2/configuracion-acl-ipv4-estandar'
    },
    {
      titulo: 'Configuración básica de un switch',
      redirectTo: '/cisco2/configuracion-basica-switch'
    },
    {
      titulo: 'Configuración del protocolo RIP',
      redirectTo: '/cisco2/configuracion-protocolo-rip'
    },
    {
      titulo: 'Introducción y beneficios de VLAN',
      redirectTo: '/cisco2/introduccion-beneficios-vlan'
    },
    {
      titulo: 'Listas de control de acceso ACL',
      redirectTo: '/cisco2/listas-control-acceso-acl'
    },
    {
      titulo: 'Pasos para configurar el acceso a la administración básica de un switch con IPv4',
      redirectTo: '/cisco2/pasos-configuracion-switch'
    },
    {
      titulo: 'Tipos de VLAN',
      redirectTo: '/cisco2/tipos-de-vlan'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface tema {
  titulo: string;
  redirectTo:string;
}
