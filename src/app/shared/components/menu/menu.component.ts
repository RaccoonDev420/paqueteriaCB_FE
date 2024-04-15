import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'menu-app',
    templateUrl: 'menu.component.html',
    styleUrls:["./menu.component.scss"]
})

export class MenuComponent implements OnInit {
    imagePath: string = 'assets/img/pcb_logo_blanco.png';
    menu: MenuItem[] = [
        {
        items: [
            { label: "Iniciar Sesion", icon: 'pi pi-qrcode', routerLink: '/login' }
          ],
        }
    ]
    constructor() { }

    ngOnInit() { }
}