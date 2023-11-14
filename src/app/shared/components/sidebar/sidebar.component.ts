import { Component, OnInit, inject } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'country-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  uiService = inject(UiService);

  isOpen = false;

  ngOnInit(): void {
    this.uiService.isOpenSidebar.subscribe(res => (this.isOpen = res));
  }
}
