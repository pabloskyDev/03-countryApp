import { Component, inject } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'country-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: [],
})
export class TopBarComponent {
  uiService = inject(UiService);

  toggleSidebar() {
    this.uiService.toggleSidebar();
  }
}
