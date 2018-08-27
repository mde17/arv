import { Component } from '@stencil/core';

@Component({
  tag: 'arv-card',
  styleUrl: 'arv-card.css',
  shadow: true
})
export class Card {

  render() {
    return (
      <div class="arv-card">
        <slot></slot>
      </div>
    );
  }
}
