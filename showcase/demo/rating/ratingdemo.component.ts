import {Component} from 'angular2/core';
import {Rating} from '../../../components/rating/rating';
import {TabView} from '../../../components/tabview/tabview';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'showcase/demo/rating/ratingdemo.component.html',
    directives: [Rating,TabView,TabPanel,ROUTER_DIRECTIVES]
})
export class RatingDemoComponent {

    val1: number;

    val2: number = 5;

    val3: number;

    val4: number = 5;

    msg: string;

    handleRate(event) {
        this.msg = "You have rated " + event.value;
    }

    handleCancel(event) {
        this.msg = "Rating Cancelled";
    }
}