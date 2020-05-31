import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/tableau',
    title: 'Tableau De Bord',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-chart-pie-36',
    class: ''
  },

  {
    path: '/utilisateurs',
    title: 'Utilisateurs',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-single-02',
    class: ''
  },

  {
    path: '/produits',
    title: 'Produits',
    rtlTitle: 'الرموز',
    icon: 'icon-cart',
    class: ''
  },
  {
    path: '/devis',
    title: 'Devis',
    rtlTitle: 'قائمة الجدول',
    icon: 'icon-notes',
    class: ''
  },
  {
    path: '/facture',
    icon: 'icon-paper',
    title: 'Facture',
    rtlTitle: 'طباعة',
    class: ''
  },
  {
    path: '/paiement',
    icon: 'icon-coins',
    title: 'Paiement',
    rtlTitle: 'طباعة',
    class: ''
  },
  {
    path: '/clients',
    icon: 'icon-single-02',
    title: 'Clients',
    rtlTitle: 'طباعة',
    class: ''
  },


  {
    path: '/rtl',
    title: 'RTL Support',
    rtlTitle: 'ار تي ال',
    icon: 'icon-world',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
