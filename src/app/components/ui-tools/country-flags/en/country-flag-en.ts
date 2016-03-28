import {Component, Input} from 'angular2/core';

@Component({
  selector    : 'country-flag-en',
  template    : `
  <svg
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 512 512">
    <defs>
      <clipPath id="a">
        <path fill-opacity=".67" d="M250 0h500v500H250z"/>
      </clipPath>
    </defs>
    <g clip-path="url(#a)" transform="translate(-256) scale(1.024)">
      <g stroke-width="1pt">
        <path fill="#006" d="M0 0h1000.02v500.01H0z"/>
        <path d="M0 0v55.903l888.218 444.11h111.802V444.11L111.802.003H0zm1000.02 0v55.9L111.802 500.01H0v-55.9L888.218 0h111.802z" fill="#fff"/>
        <path d="M416.675 0v500.01h166.67V0h-166.67zM0 166.67v166.67h1000.02V166.67H0z" fill="#fff"/>
        <path d="M0 200.004v100.002h1000.02V200.004H0zM450.01 0v500.01h100V0h-100zM0 500.01l333.34-166.67h74.535L74.535 500.01H0zM0 0l333.34 166.67h-74.535L0 37.27V0zm592.145 166.67L925.485 0h74.535L666.68 166.67h-74.535zm407.875 333.34L666.68 333.34h74.535l258.805 129.403v37.267z" fill="#c00"/>
      </g>
    </g>>
    </svg>
  `
})
export class CountryFlagEn {
  @Input() width: string      = '80px';
  @Input() height: string     = '80px';

  constructor() {
    // Nothing for now, maybe later? :-)
  }
}
