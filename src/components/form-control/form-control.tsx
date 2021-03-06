import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arv-form-control',
  styleUrl: 'form-control.css',
  shadow: true
})
export class FormControl {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}