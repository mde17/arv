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

    interface ArvAlertText {
      'variant': string;
    }

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
      'padded': boolean;
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

    interface ArvCheckbox {
      'color': string;
      'label': string;
      'labelVariant': string;
      'layout': string;
      'styles': any;
      'textWidth': string;
      'value': boolean;
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
      'animation': string;
    }

    interface ArvDialogPortal {
      'content': any;
      'removeDialog': () => void;
      'scrollable': boolean;
    }

    interface ArvDialog {
      'parent': HTMLElement;
      'scrollable': boolean;
      'show': boolean;
    }

    interface ArvDivider {
      'bordered': boolean;
      'height': string;
      'layout': string;
      'noMargin': boolean;
      'transparent': boolean;
      'width': string;
    }

    interface ArvFlex {
      'bordered': boolean;
      'content': string;
      'full': boolean;
      'items': string;
      'justify': string;
      'layout': string;
      'order': number;
      'padded': boolean;
      'self': string;
      'wrap': boolean;
    }

    interface ArvFormControl {

    }

    interface ArvForm {
      'layout': string;
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
      'styles': any;
    }

    interface ArvInput {
      'autocomplete': string;
      'disabled': boolean;
      'fileUpload': boolean;
      'full': boolean;
      'hasError': boolean;
      'icon': string;
      'input': (e: any) => void;
      'inputBlur': (e: any) => void;
      'inputChange': (e: any) => void;
      'inputFocus': (e: any) => void;
      'label': string;
      'layout': string;
      'multiple': boolean;
      'name': string;
      'placeholder': string;
      'required': boolean;
      'rows': number;
      'type': string;
      'value': string;
    }

    interface ArvLink {
      'color': string;
      'styles': any;
    }

    interface ArvListItem {
      'buttonSize': string;
      'icon': string;
      'itemClick': (e: any, index: number) => void;
      'itemIndex': number;
      'showDivider': boolean;
      'showIcon': boolean;
      'textAlign': string;
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

    interface ArvSectionTitle {
      'textColor': string;
      'textVariant': string;
    }

    interface ArvSection {

    }

    interface ArvSelectOption {
      'parse': boolean;
      'selected': boolean;
      'value': string;
    }

    interface ArvSelect {
      'dataSource': any;
      'full': boolean;
      'icon': string;
      'inputChange': (e: any) => void;
      'label': string;
      'labelVariant': string;
      'layout': string;
      'onSelectChange': (item: any) => void;
      'placeholder': string;
      'toggle': () => void;
      'value': string;
      /**
       * oneOf [select, input] 
       */
      'variant': string;
    }

    interface ArvStepper {
      'steps': any;
    }

    interface ArvText {
      'color': string;
      'noWrap': boolean;
      'preWrap': boolean;
      'strike': boolean;
      'strong': boolean;
      'variant': string;
      'weight': number;
    }

    interface ArvTransition {
      'animation': string;
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


    interface HTMLArvAlertTextElement extends StencilComponents.ArvAlertText, HTMLStencilElement {}

    var HTMLArvAlertTextElement: {
      prototype: HTMLArvAlertTextElement;
      new (): HTMLArvAlertTextElement;
    };
    

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
    

    interface HTMLArvCheckboxElement extends StencilComponents.ArvCheckbox, HTMLStencilElement {}

    var HTMLArvCheckboxElement: {
      prototype: HTMLArvCheckboxElement;
      new (): HTMLArvCheckboxElement;
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
    

    interface HTMLArvFormControlElement extends StencilComponents.ArvFormControl, HTMLStencilElement {}

    var HTMLArvFormControlElement: {
      prototype: HTMLArvFormControlElement;
      new (): HTMLArvFormControlElement;
    };
    

    interface HTMLArvFormElement extends StencilComponents.ArvForm, HTMLStencilElement {}

    var HTMLArvFormElement: {
      prototype: HTMLArvFormElement;
      new (): HTMLArvFormElement;
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
    

    interface HTMLArvSectionTitleElement extends StencilComponents.ArvSectionTitle, HTMLStencilElement {}

    var HTMLArvSectionTitleElement: {
      prototype: HTMLArvSectionTitleElement;
      new (): HTMLArvSectionTitleElement;
    };
    

    interface HTMLArvSectionElement extends StencilComponents.ArvSection, HTMLStencilElement {}

    var HTMLArvSectionElement: {
      prototype: HTMLArvSectionElement;
      new (): HTMLArvSectionElement;
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
    

    interface HTMLArvStepperElement extends StencilComponents.ArvStepper, HTMLStencilElement {}

    var HTMLArvStepperElement: {
      prototype: HTMLArvStepperElement;
      new (): HTMLArvStepperElement;
    };
    

    interface HTMLArvTextElement extends StencilComponents.ArvText, HTMLStencilElement {}

    var HTMLArvTextElement: {
      prototype: HTMLArvTextElement;
      new (): HTMLArvTextElement;
    };
    

    interface HTMLArvTransitionElement extends StencilComponents.ArvTransition, HTMLStencilElement {}

    var HTMLArvTransitionElement: {
      prototype: HTMLArvTransitionElement;
      new (): HTMLArvTransitionElement;
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
    'arv-alert-text': JSXElements.ArvAlertTextAttributes;
    'arv-avatar': JSXElements.ArvAvatarAttributes;
    'arv-backdrop': JSXElements.ArvBackdropAttributes;
    'arv-button': JSXElements.ArvButtonAttributes;
    'arv-card-header': JSXElements.ArvCardHeaderAttributes;
    'arv-card-media': JSXElements.ArvCardMediaAttributes;
    'arv-card': JSXElements.ArvCardAttributes;
    'arv-checkbox': JSXElements.ArvCheckboxAttributes;
    'arv-container': JSXElements.ArvContainerAttributes;
    'arv-dialog-content': JSXElements.ArvDialogContentAttributes;
    'arv-dialog-portal': JSXElements.ArvDialogPortalAttributes;
    'arv-dialog': JSXElements.ArvDialogAttributes;
    'arv-divider': JSXElements.ArvDividerAttributes;
    'arv-flex': JSXElements.ArvFlexAttributes;
    'arv-form-control': JSXElements.ArvFormControlAttributes;
    'arv-form': JSXElements.ArvFormAttributes;
    'arv-header': JSXElements.ArvHeaderAttributes;
    'arv-icon': JSXElements.ArvIconAttributes;
    'arv-input': JSXElements.ArvInputAttributes;
    'arv-link': JSXElements.ArvLinkAttributes;
    'arv-list-item': JSXElements.ArvListItemAttributes;
    'arv-list': JSXElements.ArvListAttributes;
    'arv-menu': JSXElements.ArvMenuAttributes;
    'arv-paper': JSXElements.ArvPaperAttributes;
    'arv-section-title': JSXElements.ArvSectionTitleAttributes;
    'arv-section': JSXElements.ArvSectionAttributes;
    'arv-select-option': JSXElements.ArvSelectOptionAttributes;
    'arv-select': JSXElements.ArvSelectAttributes;
    'arv-stepper': JSXElements.ArvStepperAttributes;
    'arv-text': JSXElements.ArvTextAttributes;
    'arv-transition': JSXElements.ArvTransitionAttributes;
    'arv-virtual-portal': JSXElements.ArvVirtualPortalAttributes;
    'bb-bolts': JSXElements.BbBoltsAttributes;
    'my-component': JSXElements.MyComponentAttributes;
    }
  }

  namespace JSXElements {

    export interface ArvAlertTextAttributes extends HTMLAttributes {
      'variant'?: string;
    }

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
      'padded'?: boolean;
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

    export interface ArvCheckboxAttributes extends HTMLAttributes {
      'color'?: string;
      'label'?: string;
      'labelVariant'?: string;
      'layout'?: string;
      'onOnInputChange'?: (event: CustomEvent) => void;
      'styles'?: any;
      'textWidth'?: string;
      'value'?: boolean;
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
      'animation'?: string;
    }

    export interface ArvDialogPortalAttributes extends HTMLAttributes {
      'content'?: any;
      'scrollable'?: boolean;
    }

    export interface ArvDialogAttributes extends HTMLAttributes {
      'onOnClose'?: (event: CustomEvent) => void;
      'parent'?: HTMLElement;
      'scrollable'?: boolean;
      'show'?: boolean;
    }

    export interface ArvDividerAttributes extends HTMLAttributes {
      'bordered'?: boolean;
      'height'?: string;
      'layout'?: string;
      'noMargin'?: boolean;
      'transparent'?: boolean;
      'width'?: string;
    }

    export interface ArvFlexAttributes extends HTMLAttributes {
      'bordered'?: boolean;
      'content'?: string;
      'full'?: boolean;
      'items'?: string;
      'justify'?: string;
      'layout'?: string;
      'order'?: number;
      'padded'?: boolean;
      'self'?: string;
      'wrap'?: boolean;
    }

    export interface ArvFormControlAttributes extends HTMLAttributes {

    }

    export interface ArvFormAttributes extends HTMLAttributes {
      'layout'?: string;
      'onOnFormSubmit'?: (event: CustomEvent) => void;
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
      'styles'?: any;
    }

    export interface ArvInputAttributes extends HTMLAttributes {
      'autocomplete'?: string;
      'disabled'?: boolean;
      'fileUpload'?: boolean;
      'full'?: boolean;
      'hasError'?: boolean;
      'icon'?: string;
      'input'?: (e: any) => void;
      'inputBlur'?: (e: any) => void;
      'inputChange'?: (e: any) => void;
      'inputFocus'?: (e: any) => void;
      'label'?: string;
      'layout'?: string;
      'multiple'?: boolean;
      'name'?: string;
      'onOnBlur'?: (event: CustomEvent) => void;
      'onOnFocus'?: (event: CustomEvent) => void;
      'onOnInput'?: (event: CustomEvent) => void;
      'onOnInputChange'?: (event: CustomEvent) => void;
      'onOnInputEnter'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'required'?: boolean;
      'rows'?: number;
      'type'?: string;
      'value'?: string;
    }

    export interface ArvLinkAttributes extends HTMLAttributes {
      'color'?: string;
      'styles'?: any;
    }

    export interface ArvListItemAttributes extends HTMLAttributes {
      'buttonSize'?: string;
      'icon'?: string;
      'itemClick'?: (e: any, index: number) => void;
      'itemIndex'?: number;
      'onOnItemClick'?: (event: CustomEvent) => void;
      'showDivider'?: boolean;
      'showIcon'?: boolean;
      'textAlign'?: string;
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

    export interface ArvSectionTitleAttributes extends HTMLAttributes {
      'textColor'?: string;
      'textVariant'?: string;
    }

    export interface ArvSectionAttributes extends HTMLAttributes {

    }

    export interface ArvSelectOptionAttributes extends HTMLAttributes {
      'onOptionSelected'?: (event: CustomEvent) => void;
      'parse'?: boolean;
      'selected'?: boolean;
      'value'?: string;
    }

    export interface ArvSelectAttributes extends HTMLAttributes {
      'dataSource'?: any;
      'full'?: boolean;
      'icon'?: string;
      'inputChange'?: (e: any) => void;
      'label'?: string;
      'labelVariant'?: string;
      'layout'?: string;
      'onOnInput'?: (event: CustomEvent) => void;
      'onOnInputChange'?: (event: CustomEvent) => void;
      'onSelectChange'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'value'?: string;
      /**
       * oneOf [select, input] 
       */
      'variant'?: string;
    }

    export interface ArvStepperAttributes extends HTMLAttributes {
      'steps'?: any;
    }

    export interface ArvTextAttributes extends HTMLAttributes {
      'color'?: string;
      'noWrap'?: boolean;
      'preWrap'?: boolean;
      'strike'?: boolean;
      'strong'?: boolean;
      'variant'?: string;
      'weight'?: number;
    }

    export interface ArvTransitionAttributes extends HTMLAttributes {
      'animation'?: string;
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
    'arv-alert-text': HTMLArvAlertTextElement
    'arv-avatar': HTMLArvAvatarElement
    'arv-backdrop': HTMLArvBackdropElement
    'arv-button': HTMLArvButtonElement
    'arv-card-header': HTMLArvCardHeaderElement
    'arv-card-media': HTMLArvCardMediaElement
    'arv-card': HTMLArvCardElement
    'arv-checkbox': HTMLArvCheckboxElement
    'arv-container': HTMLArvContainerElement
    'arv-dialog-content': HTMLArvDialogContentElement
    'arv-dialog-portal': HTMLArvDialogPortalElement
    'arv-dialog': HTMLArvDialogElement
    'arv-divider': HTMLArvDividerElement
    'arv-flex': HTMLArvFlexElement
    'arv-form-control': HTMLArvFormControlElement
    'arv-form': HTMLArvFormElement
    'arv-header': HTMLArvHeaderElement
    'arv-icon': HTMLArvIconElement
    'arv-input': HTMLArvInputElement
    'arv-link': HTMLArvLinkElement
    'arv-list-item': HTMLArvListItemElement
    'arv-list': HTMLArvListElement
    'arv-menu': HTMLArvMenuElement
    'arv-paper': HTMLArvPaperElement
    'arv-section-title': HTMLArvSectionTitleElement
    'arv-section': HTMLArvSectionElement
    'arv-select-option': HTMLArvSelectOptionElement
    'arv-select': HTMLArvSelectElement
    'arv-stepper': HTMLArvStepperElement
    'arv-text': HTMLArvTextElement
    'arv-transition': HTMLArvTransitionElement
    'arv-virtual-portal': HTMLArvVirtualPortalElement
    'bb-bolts': HTMLBbBoltsElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'arv-alert-text': HTMLArvAlertTextElement;
    'arv-avatar': HTMLArvAvatarElement;
    'arv-backdrop': HTMLArvBackdropElement;
    'arv-button': HTMLArvButtonElement;
    'arv-card-header': HTMLArvCardHeaderElement;
    'arv-card-media': HTMLArvCardMediaElement;
    'arv-card': HTMLArvCardElement;
    'arv-checkbox': HTMLArvCheckboxElement;
    'arv-container': HTMLArvContainerElement;
    'arv-dialog-content': HTMLArvDialogContentElement;
    'arv-dialog-portal': HTMLArvDialogPortalElement;
    'arv-dialog': HTMLArvDialogElement;
    'arv-divider': HTMLArvDividerElement;
    'arv-flex': HTMLArvFlexElement;
    'arv-form-control': HTMLArvFormControlElement;
    'arv-form': HTMLArvFormElement;
    'arv-header': HTMLArvHeaderElement;
    'arv-icon': HTMLArvIconElement;
    'arv-input': HTMLArvInputElement;
    'arv-link': HTMLArvLinkElement;
    'arv-list-item': HTMLArvListItemElement;
    'arv-list': HTMLArvListElement;
    'arv-menu': HTMLArvMenuElement;
    'arv-paper': HTMLArvPaperElement;
    'arv-section-title': HTMLArvSectionTitleElement;
    'arv-section': HTMLArvSectionElement;
    'arv-select-option': HTMLArvSelectOptionElement;
    'arv-select': HTMLArvSelectElement;
    'arv-stepper': HTMLArvStepperElement;
    'arv-text': HTMLArvTextElement;
    'arv-transition': HTMLArvTransitionElement;
    'arv-virtual-portal': HTMLArvVirtualPortalElement;
    'bb-bolts': HTMLBbBoltsElement;
    'my-component': HTMLMyComponentElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;