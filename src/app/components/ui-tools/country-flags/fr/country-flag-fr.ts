import {Component, Input} from 'angular2/core';

@Component({
  selector    : 'country-flag-fr',
  template    : `
  <svg
    width="80px"
    height="80px"
    viewBox="0 0 512 512">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h512.005v512H0z"/>
      <path fill="#00267f" d="M0 0h170.667v512H0z"/>
      <path fill="#f31830" d="M341.333 0H512v512H341.333z"/>
    </g>
    </svg>
  `
})
export class CountryFlagFr {
  @Input() width: string      = '80px';
  @Input() height: string     = '80px';

  constructor() {
    // Nothing for now, maybe later? :-)
  }
}
