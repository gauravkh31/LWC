import { LightningElement } from 'lwc';
import {NavigationMixin} from "lightning/navigation"

export default class NavigationDemo extends NavigationMixin(LightningElement) {







    navHomeClickHandler(){


        let pageReg = {
            
    type: 'standard__namedPage',
    attributes: {
        pageName: 'home'
    }

        }
this[NavigationMixin.Navigate](pageReg)

    }
}