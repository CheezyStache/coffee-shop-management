import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlGeneratorService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToCatalogUrl(rootUrl: string, name?: string): void {
    let parameter = name ?? '';
    parameter = parameter.split(' ').join('-').toLowerCase();

    this.router.navigate([rootUrl, parameter], {
      relativeTo: this.route,
    });
  }
}
