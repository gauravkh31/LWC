import { LightningElement, api } from 'lwc';

export default class ChildCompPToC extends LightningElement {
  @api data;

  closeButtonHandler(){
    const event = new CustomEvent('close');
    this.dispatchEvent(event);
  }
}