import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cisco4",
  templateUrl: "./cisco4.page.html",
  styleUrls: ["./cisco4.page.scss"]
})
export class Cisco4Page implements OnInit {
  cisco4: tema[] = [
    {
      titulo: "Encapsulación HDLC"
    },
    {
      titulo: "Funcionamiento de protocolo punto a punto"
    },
    {
      titulo: "Túneles GRE"
    },
    {
      titulo: "VPN"
    },
  ];

  constructor() {}

  ngOnInit() {}
}
interface tema {
  titulo: string;
}
