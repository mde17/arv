import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'arv-switch',
  styleUrl: 'arv-switch.css',
  shadow: true
})
export class Switch {
  @Prop() color = 'primary';

  @Prop() value: boolean;

  render() {
    const classNames = {
      root: true,
      active: this.value,
      primary: this.color === 'primary',
      secondary: this.color === 'secondary',
    };

    return (
      <div class={classNames}>
        <div class="bar"></div>
        <div class="circle"></div>
      </div>    
    );
  }    
}