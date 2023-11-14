import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'country-svg',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent {
  @HostBinding('style.-webkit-mask-image') private _path!: string;
  @Input() set path(name: string){
    this._path = `url("assets/icons/${name}.svg")`;
  }
}
