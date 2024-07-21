import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {OverlayService} from "../../core/service/overlay/overlay.service";

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf
  ],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})

export class OverlayComponent implements OnInit {
  isVisible = false;
  content: string | null = null;

  constructor(private overlayService: OverlayService, private router: Router) {}

  ngOnInit() {
    this.overlayService.visibility$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });

    this.overlayService.content$.subscribe(content => {
      this.content = content;
    });
  }

  close() {
    this.overlayService.hide();
  }
}
