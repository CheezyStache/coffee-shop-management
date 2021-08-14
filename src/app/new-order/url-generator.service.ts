import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlGeneratorService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToCatalogUrl(rootUrl: string, name?: string, id?: string): void {
    const routeParams = [rootUrl];

    if (name != undefined)
      routeParams.push(name.split(' ').join('-').toLowerCase());

    if (id != undefined) routeParams.push(id);

    this.router.navigate(routeParams, {
      relativeTo: this.route.parent,
    });
  }
}
