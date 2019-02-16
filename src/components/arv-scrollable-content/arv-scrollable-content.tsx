import { Component, Element, Event, EventEmitter, Method, Prop, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'arv-scrollable-content',
  styleUrl: 'arv-scrollable-content.css',
  shadow: true
})
export class ScrollableContent {

  root: HTMLElement;

  @Element() el: HTMLElement;

  @Prop() startAt = 'top';

  @Prop() onScrollTop: () => void;

  @Prop() hashKey: string;

  @Watch('hashKey')
  handleHashKey(value) {
    if (value) {
      this.init();
    }
  }

  @Method()
  async toBottom() {
    this.el.scrollTop = this.root.scrollHeight;
  }

  @Method()
  async toTop() {
    this.el.scrollTop = 0;
  }

  @Event() scrolledTop: EventEmitter;  

  @Listen('scroll')
  handleScroll() {
    if (this.el.scrollTop === 0) {
      this.scrolledTop.emit();
    }
    if (this.onScrollTop) {
      this.onScrollTop();
    }
  }

  componentDidLoad() {
    this.init();
  }

  init() {
    this.root = this.el.shadowRoot.querySelector('.root');    
    if (this.startAt === 'bottom') {
      this.toBottom();
    }
  }   

  render() {
    return (
      <div class="root">
        <slot />
      </div>
    );
  }
}
