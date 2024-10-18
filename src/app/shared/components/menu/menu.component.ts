import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
    selector: 'menu-app',
    templateUrl: 'menu.component.html',
    styleUrls:["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
    imagePath: string = 'assets/img/pcb_logo_blanco.png';
    menu: MenuItem[];

    constructor(
        private router: Router, private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.menu = [
            { label: 'inicio', routerLink: '/home', styleClass: this.getStyleClass('home') },
            { label: '¿Como funciona?', routerLink: '/how-to', styleClass: this.getStyleClass('how-to') },
            { label: 'Informacion General', routerLink: '/info', styleClass: this.getStyleClass('info') },
            { label: 'Sucursales', routerLink: '/branchs', styleClass: this.getStyleClass('branch') },
            { label: 'Mi Paquete', routerLink: '/package', styleClass: this.getStyleClass('package') },
            { label: 'Aviso de Privacidad', routerLink: '/privacy', styleClass: this.getStyleClass('privacy') },
            { label: 'Iniciar sesión', routerLink: '/login', icon: 'pi pi-fw pi-user', styleClass: this.getStyleClass('login') }
        ]

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd))
                .subscribe(() => {
                this.updateMenuStyleClasses();
            });
     }

    getStyleClass(route: string): string {
        return this.router.url.includes(route) ? 'menu-item' : '';
    }

    updateMenuStyleClasses(): void {
        this.menu.forEach(item => {
          item.styleClass = this.getStyleClass(item.routerLink as string);
        });
      }

}