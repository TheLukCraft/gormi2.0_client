import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: { label: string; link: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const segments = this.router.url.split('/').filter(Boolean);
    let accumulatedPath = '';

    this.breadcrumbs = segments.map((segment, index) => {
      accumulatedPath += `/${segment}`;
      return {
        label: this.formatLabel(segment),
        link: accumulatedPath,
      };
    });
  }

  private formatLabel(segment: string): string {
    return segment.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
  }
}
