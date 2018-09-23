/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface ArvAvatar {
      'alt': string;
      'imgSrc': string;
      'size': string;
      'styles': any;
    }

    interface ArvBackdrop {
      'onBackdropClick': (event: Event) => void;
      'position': string;
      'transparent': boolean;
    }

    interface ArvButton {
      'buttonClick': (e: MouseEvent) => void;
      'color': string;
      'disabled': boolean;
      'full': boolean;
      'icon': string;
      'rounded': boolean;
      'size': string;
      'styles': any;
      'textAlign': string;
      'type': string;
      'variant': string;
    }

    interface ArvCardHeader {
      'action': any;
      'avatarImage': string;
      'color': string;
      'styles': any;
      'subHeader': string;
      'titleHeader': string;
    }

    interface ArvCardMedia {
      'imageSrc': string;
    }

    interface ArvCard {
      'height': string;
      'styles': any;
      'width': string;
    }

    interface ArvContainer {
      'full': boolean;
      'height': string;
      'hidden': boolean;
      'margin': string;
      'padding': string;
      'styles': any;
      'width': string;
    }

    interface ArvDialogContent {

    }

    interface ArvDialogPortal {
      'content': any;
    }

    interface ArvDialog {
      'parent': HTMLElement;
      'show': boolean;
    }

    interface ArvDivider {
      'bordered': boolean;
      'height': string;
      'layout': string;
      'width': string;
    }

    interface ArvFlex {
      'content': string;
      'full': boolean;
      'items': string;
      'justify': string;
      'layout': string;
      'order': number;
      'self': string;
      'wrap': string;
    }

    interface ArvHeader {
      'color': string;
      'padded': boolean;
      'position': string;
      'shadow': boolean;
    }

    interface ArvIcon {
      'icon': string;
      'size': string;
    }

    interface ArvInput {
      'disabled': boolean;
      'full': boolean;
      'label': string;
      'layout': string;
      'name': string;
      'onInputChange': (e: Event) => void;
      'placeholder': string;
      'required': boolean;
      'type': string;
      'value': string;
    }

    interface ArvLink {
      'color': string;
      'styles': any;
    }

    interface ArvListItem {
      'itemClick': (e: Event, index: number) => void;
      'itemIndex': number;
      'showIcon': boolean;
    }

    interface ArvList {
      'color': string;
    }

    interface ArvMenu {
      'xPosition': string;
      'yPosition': string;
    }

    interface ArvPaper {
      'height': string;
      'padded': boolean;
      'transparent': boolean;
      'width': string;
    }

    interface ArvSelectOption {
      'parse': boolean;
      'selected': boolean;
      'value': string;
    }

    interface ArvSelect {
      'label': string;
      'layout': string;
      'onSelectChange': (item: any) => void;
      'toggle': () => void;
      'value': string;
    }

    interface ArvText {
      'strong': boolean;
      'variant': string;
      'weight': number;
    }

    interface ArvVirtualPortal {
      'content': any;
      'onSelect': (evt: any) => void;
      'parentEl': any;
    }

    interface BbBolts {
      'items': any[];
    }

    interface MyComponent {

    }
  }


    interface HTMLArvAvatarElement extends StencilComponents.ArvAvatar, HTMLStencilElement {}

    var HTMLArvAvatarElement: {
      prototype: HTMLArvAvatarElement;
      new (): HTMLArvAvatarElement;
    };
    

    interface HTMLArvBackdropElement extends StencilComponents.ArvBackdrop, HTMLStencilElement {}

    var HTMLArvBackdropElement: {
      prototype: HTMLArvBackdropElement;
      new (): HTMLArvBackdropElement;
    };
    

    interface HTMLArvButtonElement extends StencilComponents.ArvButton, HTMLStencilElement {}

    var HTMLArvButtonElement: {
      prototype: HTMLArvButtonElement;
      new (): HTMLArvButtonElement;
    };
    

    interface HTMLArvCardHeaderElement extends StencilComponents.ArvCardHeader, HTMLStencilElement {}

    var HTMLArvCardHeaderElement: {
      prototype: HTMLArvCardHeaderElement;
      new (): HTMLArvCardHeaderElement;
    };
    

    interface HTMLArvCardMediaElement extends StencilComponents.ArvCardMedia, HTMLStencilElement {}

    var HTMLArvCardMediaElement: {
      prototype: HTMLArvCardMediaElement;
      new (): HTMLArvCardMediaElement;
    };
    

    interface HTMLArvCardElement extends StencilComponents.ArvCard, HTMLStencilElement {}

    var HTMLArvCardElement: {
      prototype: HTMLArvCardElement;
      new (): HTMLArvCardElement;
    };
    

    interface HTMLArvContainerElement extends StencilComponents.ArvContainer, HTMLStencilElement {}

    var HTMLArvContainerElement: {
      prototype: HTMLArvContainerElement;
      new (): HTMLArvContainerElement;
    };
    

    interface HTMLArvDialogContentElement extends StencilComponents.ArvDialogContent, HTMLStencilElement {}

    var HTMLArvDialogContentElement: {
      prototype: HTMLArvDialogContentElement;
      new (): HTMLArvDialogContentElement;
    };
    

    interface HTMLArvDialogPortalElement extends StencilComponents.ArvDialogPortal, HTMLStencilElement {}

    var HTMLArvDialogPortalElement: {
      prototype: HTMLArvDialogPortalElement;
      new (): HTMLArvDialogPortalElement;
    };
    

    interface HTMLArvDialogElement extends StencilComponents.ArvDialog, HTMLStencilElement {}

    var HTMLArvDialogElement: {
      prototype: HTMLArvDialogElement;
      new (): HTMLArvDialogElement;
    };
    

    interface HTMLArvDividerElement extends StencilComponents.ArvDivider, HTMLStencilElement {}

    var HTMLArvDividerElement: {
      prototype: HTMLArvDividerElement;
      new (): HTMLArvDividerElement;
    };
    

    interface HTMLArvFlexElement extends StencilComponents.ArvFlex, HTMLStencilElement {}

    var HTMLArvFlexElement: {
      prototype: HTMLArvFlexElement;
      new (): HTMLArvFlexElement;
    };
    

    interface HTMLArvHeaderElement extends StencilComponents.ArvHeader, HTMLStencilElement {}

    var HTMLArvHeaderElement: {
      prototype: HTMLArvHeaderElement;
      new (): HTMLArvHeaderElement;
    };
    

    interface HTMLArvIconElement extends StencilComponents.ArvIcon, HTMLStencilElement {}

    var HTMLArvIconElement: {
      prototype: HTMLArvIconElement;
      new (): HTMLArvIconElement;
    };
    

    interface HTMLArvInputElement extends StencilComponents.ArvInput, HTMLStencilElement {}

    var HTMLArvInputElement: {
      prototype: HTMLArvInputElement;
      new (): HTMLArvInputElement;
    };
    

    interface HTMLArvLinkElement extends StencilComponents.ArvLink, HTMLStencilElement {}

    var HTMLArvLinkElement: {
      prototype: HTMLArvLinkElement;
      new (): HTMLArvLinkElement;
    };
    

    interface HTMLArvListItemElement extends StencilComponents.ArvListItem, HTMLStencilElement {}

    var HTMLArvListItemElement: {
      prototype: HTMLArvListItemElement;
      new (): HTMLArvListItemElement;
    };
    

    interface HTMLArvListElement extends StencilComponents.ArvList, HTMLStencilElement {}

    var HTMLArvListElement: {
      prototype: HTMLArvListElement;
      new (): HTMLArvListElement;
    };
    

    interface HTMLArvMenuElement extends StencilComponents.ArvMenu, HTMLStencilElement {}

    var HTMLArvMenuElement: {
      prototype: HTMLArvMenuElement;
      new (): HTMLArvMenuElement;
    };
    

    interface HTMLArvPaperElement extends StencilComponents.ArvPaper, HTMLStencilElement {}

    var HTMLArvPaperElement: {
      prototype: HTMLArvPaperElement;
      new (): HTMLArvPaperElement;
    };
    

    interface HTMLArvSelectOptionElement extends StencilComponents.ArvSelectOption, HTMLStencilElement {}

    var HTMLArvSelectOptionElement: {
      prototype: HTMLArvSelectOptionElement;
      new (): HTMLArvSelectOptionElement;
    };
    

    interface HTMLArvSelectElement extends StencilComponents.ArvSelect, HTMLStencilElement {}

    var HTMLArvSelectElement: {
      prototype: HTMLArvSelectElement;
      new (): HTMLArvSelectElement;
    };
    

    interface HTMLArvTextElement extends StencilComponents.ArvText, HTMLStencilElement {}

    var HTMLArvTextElement: {
      prototype: HTMLArvTextElement;
      new (): HTMLArvTextElement;
    };
    

    interface HTMLArvVirtualPortalElement extends StencilComponents.ArvVirtualPortal, HTMLStencilElement {}

    var HTMLArvVirtualPortalElement: {
      prototype: HTMLArvVirtualPortalElement;
      new (): HTMLArvVirtualPortalElement;
    };
    

    interface HTMLBbBoltsElement extends StencilComponents.BbBolts, HTMLStencilElement {}

    var HTMLBbBoltsElement: {
      prototype: HTMLBbBoltsElement;
      new (): HTMLBbBoltsElement;
    };
    

    interface HTMLMyComponentElement extends StencilComponents.MyComponent, HTMLStencilElement {}

    var HTMLMyComponentElement: {
      prototype: HTMLMyComponentElement;
      new (): HTMLMyComponentElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'arv-avatar': JSXElements.ArvAvatarAttributes;
    'arv-backdrop': JSXElements.ArvBackdropAttributes;
    'arv-button': JSXElements.ArvButtonAttributes;
    'arv-card-header': JSXElements.ArvCardHeaderAttributes;
    'arv-card-media': JSXElements.ArvCardMediaAttributes;
    'arv-card': JSXElements.ArvCardAttributes;
    'arv-container': JSXElements.ArvContainerAttributes;
    'arv-dialog-content': JSXElements.ArvDialogContentAttributes;
    'arv-dialog-portal': JSXElements.ArvDialogPortalAttributes;
    'arv-dialog': JSXElements.ArvDialogAttributes;
    'arv-divider': JSXElements.ArvDividerAttributes;
    'arv-flex': JSXElements.ArvFlexAttributes;
    'arv-header': JSXElements.ArvHeaderAttributes;
    'arv-icon': JSXElements.ArvIconAttributes;
    'arv-input': JSXElements.ArvInputAttributes;
    'arv-link': JSXElements.ArvLinkAttributes;
    'arv-list-item': JSXElements.ArvListItemAttributes;
    'arv-list': JSXElements.ArvListAttributes;
    'arv-menu': JSXElements.ArvMenuAttributes;
    'arv-paper': JSXElements.ArvPaperAttributes;
    'arv-select-option': JSXElements.ArvSelectOptionAttributes;
    'arv-select': JSXElements.ArvSelectAttributes;
    'arv-text': JSXElements.ArvTextAttributes;
    'arv-virtual-portal': JSXElements.ArvVirtualPortalAttributes;
    'bb-bolts': JSXElements.BbBoltsAttributes;
    'my-component': JSXElements.MyComponentAttributes;
    }
  }

  namespace JSXElements {

    export interface ArvAvatarAttributes extends HTMLAttributes {
      'alt'?: string;
      'imgSrc'?: string;
      'size'?: string;
      'styles'?: any;
    }

    export interface ArvBackdropAttributes extends HTMLAttributes {
      'onBackdropClick'?: (event: Event) => void;
      'position'?: string;
      'transparent'?: boolean;
    }

    export interface ArvButtonAttributes extends HTMLAttributes {
      'buttonClick'?: (e: MouseEvent) => void;
      'color'?: string;
      'disabled'?: boolean;
      'full'?: boolean;
      'icon'?: string;
      'onOnButtonClick'?: (event: CustomEvent) => void;
      'rounded'?: boolean;
      'size'?: string;
      'styles'?: any;
      'textAlign'?: string;
      'type'?: string;
      'variant'?: string;
    }

    export interface ArvCardHeaderAttributes extends HTMLAttributes {
      'action'?: any;
      'avatarImage'?: string;
      'color'?: string;
      'styles'?: any;
      'subHeader'?: string;
      'titleHeader'?: string;
    }

    export interface ArvCardMediaAttributes extends HTMLAttributes {
      'imageSrc'?: string;
    }

    export interface ArvCardAttributes extends HTMLAttributes {
      'height'?: string;
      'styles'?: any;
      'width'?: string;
    }

    export interface ArvContainerAttributes extends HTMLAttributes {
      'full'?: boolean;
      'height'?: string;
      'hidden'?: boolean;
      'margin'?: string;
      'padding'?: string;
      'styles'?: any;
      'width'?: string;
    }

    export interface ArvDialogContentAttributes extends HTMLAttributes {

    }

    export interface ArvDialogPortalAttributes extends HTMLAttributes {
      'content'?: any;
    }

    export interface ArvDialogAttributes extends HTMLAttributes {
      'onOnClose'?: (event: CustomEvent) => void;
      'parent'?: HTMLElement;
      'show'?: boolean;
    }

    export interface ArvDividerAttributes extends HTMLAttributes {
      'bordered'?: boolean;
      'height'?: string;
      'layout'?: string;
      'width'?: string;
    }

    export interface ArvFlexAttributes extends HTMLAttributes {
      'content'?: string;
      'full'?: boolean;
      'items'?: string;
      'justify'?: string;
      'layout'?: string;
      'order'?: number;
      'self'?: string;
      'wrap'?: string;
    }

    export interface ArvHeaderAttributes extends HTMLAttributes {
      'color'?: string;
      'padded'?: boolean;
      'position'?: string;
      'shadow'?: boolean;
    }

    export interface ArvIconAttributes extends HTMLAttributes {
      'icon'?: string;
      'size'?: string;
    }

    export interface ArvInputAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'full'?: boolean;
      'label'?: string;
      'layout'?: string;
      'name'?: string;
      'onInputChange'?: (e: Event) => void;
      'placeholder'?: string;
      'required'?: boolean;
      'type'?: string;
      'value'?: string;
    }

    export interface ArvLinkAttributes extends HTMLAttributes {
      'color'?: string;
      'styles'?: any;
    }

    export interface ArvListItemAttributes extends HTMLAttributes {
      'itemClick'?: (e: Event, index: number) => void;
      'itemIndex'?: number;
      'showIcon'?: boolean;
    }

    export interface ArvListAttributes extends HTMLAttributes {
      'color'?: string;
    }

    export interface ArvMenuAttributes extends HTMLAttributes {
      'xPosition'?: string;
      'yPosition'?: string;
    }

    export interface ArvPaperAttributes extends HTMLAttributes {
      'height'?: string;
      'padded'?: boolean;
      'transparent'?: boolean;
      'width'?: string;
    }

    export interface ArvSelectOptionAttributes extends HTMLAttributes {
      'onOptionSelected'?: (event: CustomEvent) => void;
      'parse'?: boolean;
      'selected'?: boolean;
      'value'?: string;
    }

    export interface ArvSelectAttributes extends HTMLAttributes {
      'label'?: string;
      'layout'?: string;
      'onSelectChange'?: (item: any) => void;
      'value'?: string;
    }

    export interface ArvTextAttributes extends HTMLAttributes {
      'strong'?: boolean;
      'variant'?: string;
      'weight'?: number;
    }

    export interface ArvVirtualPortalAttributes extends HTMLAttributes {
      'content'?: any;
      'onSelect'?: (evt: any) => void;
      'parentEl'?: any;
    }

    export interface BbBoltsAttributes extends HTMLAttributes {
      'items'?: any[];
    }

    export interface MyComponentAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'arv-avatar': HTMLArvAvatarElement
    'arv-backdrop': HTMLArvBackdropElement
    'arv-button': HTMLArvButtonElement
    'arv-card-header': HTMLArvCardHeaderElement
    'arv-card-media': HTMLArvCardMediaElement
    'arv-card': HTMLArvCardElement
    'arv-container': HTMLArvContainerElement
    'arv-dialog-content': HTMLArvDialogContentElement
    'arv-dialog-portal': HTMLArvDialogPortalElement
    'arv-dialog': HTMLArvDialogElement
    'arv-divider': HTMLArvDividerElement
    'arv-flex': HTMLArvFlexElement
    'arv-header': HTMLArvHeaderElement
    'arv-icon': HTMLArvIconElement
    'arv-input': HTMLArvInputElement
    'arv-link': HTMLArvLinkElement
    'arv-list-item': HTMLArvListItemElement
    'arv-list': HTMLArvListElement
    'arv-menu': HTMLArvMenuElement
    'arv-paper': HTMLArvPaperElement
    'arv-select-option': HTMLArvSelectOptionElement
    'arv-select': HTMLArvSelectElement
    'arv-text': HTMLArvTextElement
    'arv-virtual-portal': HTMLArvVirtualPortalElement
    'bb-bolts': HTMLBbBoltsElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'arv-avatar': HTMLArvAvatarElement;
    'arv-backdrop': HTMLArvBackdropElement;
    'arv-button': HTMLArvButtonElement;
    'arv-card-header': HTMLArvCardHeaderElement;
    'arv-card-media': HTMLArvCardMediaElement;
    'arv-card': HTMLArvCardElement;
    'arv-container': HTMLArvContainerElement;
    'arv-dialog-content': HTMLArvDialogContentElement;
    'arv-dialog-portal': HTMLArvDialogPortalElement;
    'arv-dialog': HTMLArvDialogElement;
    'arv-divider': HTMLArvDividerElement;
    'arv-flex': HTMLArvFlexElement;
    'arv-header': HTMLArvHeaderElement;
    'arv-icon': HTMLArvIconElement;
    'arv-input': HTMLArvInputElement;
    'arv-link': HTMLArvLinkElement;
    'arv-list-item': HTMLArvListItemElement;
    'arv-list': HTMLArvListElement;
    'arv-menu': HTMLArvMenuElement;
    'arv-paper': HTMLArvPaperElement;
    'arv-select-option': HTMLArvSelectOptionElement;
    'arv-select': HTMLArvSelectElement;
    'arv-text': HTMLArvTextElement;
    'arv-virtual-portal': HTMLArvVirtualPortalElement;
    'bb-bolts': HTMLBbBoltsElement;
    'my-component': HTMLMyComponentElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;