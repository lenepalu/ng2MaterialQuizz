import {Component, OnInit}              from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS}                 from 'angular2/common';
import {Api}                            from './services/api/api';
import {ViewsContainer}                 from './containers/views-container/views-container';
import {Home}                           from './views/home/home';
import {About}                          from "./views/about/about";
import {AppHeader}                      from './components/app-header/app-header';
import {AppDrawer}                      from './components/app-drawer/app-drawer';
import {TranslateService}               from 'ng2-translate/ng2-translate';
import '../style/app.scss';

const appHeaderMenuModel = require('./models/appHeader.menuModel.json');

declare let componentHandler: any;
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [ViewsContainer, AppHeader, AppDrawer, ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
              mdl-layout--fixed-header">
    <app-header
      class="mdl-layout__header"
      [menuRightModel]="appHeaderMenuModel"></app-header>
    <app-drawer class="mdl-layout__drawer"></app-drawer>
    <app-main class="mdl-layout__content">
      <views-container>
        <router-outlet></router-outlet>
      </views-container>
    </app-main>
  </div>
  `
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'}
])
export class App implements OnInit {
  public appHeaderMenuModel: Array<any>;

  constructor(public api: Api, public translate: TranslateService) {
    this.setLanguage(translate);
    this.init();
  }

  init() {
    this.appHeaderMenuModel = appHeaderMenuModel;
  }

  setLanguage(translate: TranslateService) {
    let browserLang = (navigator.language || navigator.browserLanguage).split('-')[0];
    browserLang = /(fr|en)/gi.test(browserLang) ? browserLang : 'en';
    translate.use(browserLang);
  }

  ngOnInit() {
    // MDL - React trick This upgrades all upgradable components at 1st render
    componentHandler.upgradeDom();
  }
}
