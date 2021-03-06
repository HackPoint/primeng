import {Component} from 'angular2/core';
import {Menu} from '../../../components/menu/menu';
import {Button} from '../../../components/button/button';
import {TabView} from '../../../components/tabview/tabview';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'showcase/demo/menu/menudemo.component.html',
    directives: [Menu,Button,TabPanel,TabView,ROUTER_DIRECTIVES]
})
export class MenuDemoComponent {

}