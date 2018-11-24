/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface ArvAccordionItem {
    'active': boolean;
    'color': string;
    'itemTitle': string;
  }
  interface ArvAccordionItemAttributes extends StencilHTMLAttributes {
    'active'?: boolean;
    'color'?: string;
    'itemTitle'?: string;
    'onItemClick'?: (event: CustomEvent) => void;
  }

  interface ArvAccordion {}
  interface ArvAccordionAttributes extends StencilHTMLAttributes {}

  interface ArvAlertText {
    'variant': string;
  }
  interface ArvAlertTextAttributes extends StencilHTMLAttributes {
    'variant'?: string;
  }

  interface ArvAvatar {
    'alt': string;
    'imgSrc': string;
    'size': string;
    'styles': any;
  }
  interface ArvAvatarAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'imgSrc'?: string;
    'size'?: string;
    'styles'?: any;
  }

  interface ArvBackdrop {
    'onBackdropClick': (event: Event) => void;
    'position': string;
    'transparent': boolean;
  }
  interface ArvBackdropAttributes extends StencilHTMLAttributes {
    'onBackdropClick'?: (event: Event) => void;
    'position'?: string;
    'transparent'?: boolean;
  }

  interface ArvButton {
    'buttonClick': (e: MouseEvent) => void;
    'color': string;
    'disabled': boolean;
    'full': boolean;
    'href': string;
    'icon': string;
    'padded': boolean;
    'roleType': string;
    'rounded': boolean;
    'size': string;
    'styles': any;
    'textAlign': string;
    'type': string;
    'variant': string;
  }
  interface ArvButtonAttributes extends StencilHTMLAttributes {
    'buttonClick'?: (e: MouseEvent) => void;
    'color'?: string;
    'disabled'?: boolean;
    'full'?: boolean;
    'href'?: string;
    'icon'?: string;
    'onOnButtonClick'?: (event: CustomEvent) => void;
    'padded'?: boolean;
    'roleType'?: string;
    'rounded'?: boolean;
    'size'?: string;
    'styles'?: any;
    'textAlign'?: string;
    'type'?: string;
    'variant'?: string;
  }

  interface ArvCardHeader {
    'action': any;
    'avatarImage': string;
    'color': string;
    'styles': any;
    'subHeader': string;
    'titleHeader': string;
  }
  interface ArvCardHeaderAttributes extends StencilHTMLAttributes {
    'action'?: any;
    'avatarImage'?: string;
    'color'?: string;
    'styles'?: any;
    'subHeader'?: string;
    'titleHeader'?: string;
  }

  interface ArvCardMedia {
    'imageSrc': string;
  }
  interface ArvCardMediaAttributes extends StencilHTMLAttributes {
    'imageSrc'?: string;
  }

  interface ArvCard {
    'height': string;
    'styles': any;
    'width': string;
  }
  interface ArvCardAttributes extends StencilHTMLAttributes {
    'height'?: string;
    'styles'?: any;
    'width'?: string;
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
  interface ArvCheckboxAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'label'?: string;
    'labelVariant'?: string;
    'layout'?: string;
    'onOnInputChange'?: (event: CustomEvent) => void;
    'styles'?: any;
    'textWidth'?: string;
    'value'?: boolean;
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
  interface ArvContainerAttributes extends StencilHTMLAttributes {
    'full'?: boolean;
    'height'?: string;
    'hidden'?: boolean;
    'margin'?: string;
    'padding'?: string;
    'styles'?: any;
    'width'?: string;
  }

  interface ArvDialogContent {
    'animation': string;
  }
  interface ArvDialogContentAttributes extends StencilHTMLAttributes {
    'animation'?: string;
  }

  interface ArvDialogPortal {
    'content': any;
    'removeDialog': () => void;
    'scrollable': boolean;
  }
  interface ArvDialogPortalAttributes extends StencilHTMLAttributes {
    'content'?: any;
    'scrollable'?: boolean;
  }

  interface ArvDialog {
    'dialogTitle': string;
    'parent': HTMLElement;
    'scrollable': boolean;
    'show': boolean;
  }
  interface ArvDialogAttributes extends StencilHTMLAttributes {
    'dialogTitle'?: string;
    'onOnClose'?: (event: CustomEvent) => void;
    'parent'?: HTMLElement;
    'scrollable'?: boolean;
    'show'?: boolean;
  }

  interface ArvDivider {
    'bordered': boolean;
    'height': string;
    'layout': string;
    'noMargin': boolean;
    'transparent': boolean;
    'width': string;
  }
  interface ArvDividerAttributes extends StencilHTMLAttributes {
    'bordered'?: boolean;
    'height'?: string;
    'layout'?: string;
    'noMargin'?: boolean;
    'transparent'?: boolean;
    'width'?: string;
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
  interface ArvFlexAttributes extends StencilHTMLAttributes {
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

  interface ArvFluidContainer {
    'maxWidth': string;
    'minWidth': string;
  }
  interface ArvFluidContainerAttributes extends StencilHTMLAttributes {
    'maxWidth'?: string;
    'minWidth'?: string;
  }

  interface ArvFormControl {}
  interface ArvFormControlAttributes extends StencilHTMLAttributes {}

  interface ArvForm {
    'layout': string;
  }
  interface ArvFormAttributes extends StencilHTMLAttributes {
    'layout'?: string;
    'onOnFormSubmit'?: (event: CustomEvent) => void;
  }

  interface ArvHeader {
    'color': string;
    'padded': boolean;
    'position': string;
    'shadow': boolean;
  }
  interface ArvHeaderAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'padded'?: boolean;
    'position'?: string;
    'shadow'?: boolean;
  }

  interface ArvIcon {
    'icon': string;
    'noMargin': boolean;
    'size': string;
    'styles': any;
  }
  interface ArvIconAttributes extends StencilHTMLAttributes {
    'icon'?: string;
    'noMargin'?: boolean;
    'size'?: string;
    'styles'?: any;
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
    'inputStyle': any;
    'label': string;
    'layout': string;
    'multiple': boolean;
    'name': string;
    'placeholder': string;
    'required': boolean;
    'rows': number;
    'size': string;
    'type': string;
    'value': string;
  }
  interface ArvInputAttributes extends StencilHTMLAttributes {
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
    'inputStyle'?: any;
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
    'size'?: string;
    'type'?: string;
    'value'?: string;
  }

  interface ArvLink {
    'color': string;
    'styles': any;
  }
  interface ArvLinkAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'styles'?: any;
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
  interface ArvListItemAttributes extends StencilHTMLAttributes {
    'buttonSize'?: string;
    'icon'?: string;
    'itemClick'?: (e: any, index: number) => void;
    'itemIndex'?: number;
    'onOnItemClick'?: (event: CustomEvent) => void;
    'showDivider'?: boolean;
    'showIcon'?: boolean;
    'textAlign'?: string;
  }

  interface ArvList {
    'color': string;
  }
  interface ArvListAttributes extends StencilHTMLAttributes {
    'color'?: string;
  }

  interface ArvMenu {
    'disableBackdropClick': boolean;
    'xPosition': string;
    'yPosition': string;
  }
  interface ArvMenuAttributes extends StencilHTMLAttributes {
    'disableBackdropClick'?: boolean;
    'xPosition'?: string;
    'yPosition'?: string;
  }

  interface ArvPaper {
    'height': string;
    'padded': boolean;
    'transparent': boolean;
    'width': string;
  }
  interface ArvPaperAttributes extends StencilHTMLAttributes {
    'height'?: string;
    'padded'?: boolean;
    'transparent'?: boolean;
    'width'?: string;
  }

  interface ArvSectionTitle {
    'textColor': string;
    'textVariant': string;
  }
  interface ArvSectionTitleAttributes extends StencilHTMLAttributes {
    'textColor'?: string;
    'textVariant'?: string;
  }

  interface ArvSection {}
  interface ArvSectionAttributes extends StencilHTMLAttributes {}

  interface ArvSelectOption {
    'parse': boolean;
    'selected': boolean;
    'value': string;
  }
  interface ArvSelectOptionAttributes extends StencilHTMLAttributes {
    'onOptionSelected'?: (event: CustomEvent) => void;
    'parse'?: boolean;
    'selected'?: boolean;
    'value'?: string;
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
  interface ArvSelectAttributes extends StencilHTMLAttributes {
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

  interface ArvStepper {
    'steps': any;
  }
  interface ArvStepperAttributes extends StencilHTMLAttributes {
    'steps'?: any;
  }

  interface ArvTable {
    'activeSort': string;
    'controls': any;
    'isAscending': boolean;
    'multiSelectable': boolean;
    'selectable': boolean;
    'sortable': boolean;
    'styles': any;
    'tableData': any;
    'tableHeaders': string[];
    'tableProps': any;
  }
  interface ArvTableAttributes extends StencilHTMLAttributes {
    'activeSort'?: string;
    'controls'?: any;
    'isAscending'?: boolean;
    'multiSelectable'?: boolean;
    'onHeaderClick'?: (event: CustomEvent) => void;
    'onRowClick'?: (event: CustomEvent) => void;
    'onRowItemClick'?: (event: CustomEvent) => void;
    'selectable'?: boolean;
    'sortable'?: boolean;
    'styles'?: any;
    'tableData'?: any;
    'tableHeaders'?: string[];
    'tableProps'?: any;
  }

  interface ArvTabs {
    'color': string;
    'selectedTab': string;
    'tabs': string[];
  }
  interface ArvTabsAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'selectedTab'?: string;
    'tabs'?: string[];
  }

  interface ArvText {
    'color': string;
    'lineHeight': string;
    'noWrap': boolean;
    'preWrap': boolean;
    'strike': boolean;
    'strong': boolean;
    'variant': string;
    'weight': number;
  }
  interface ArvTextAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'lineHeight'?: string;
    'noWrap'?: boolean;
    'preWrap'?: boolean;
    'strike'?: boolean;
    'strong'?: boolean;
    'variant'?: string;
    'weight'?: number;
  }

  interface ArvTransition {
    'animation': string;
    'full': boolean;
  }
  interface ArvTransitionAttributes extends StencilHTMLAttributes {
    'animation'?: string;
    'full'?: boolean;
  }

  interface ArvVirtualPortal {
    'content': any;
    'onSelect': (evt: any) => void;
    'parentEl': any;
  }
  interface ArvVirtualPortalAttributes extends StencilHTMLAttributes {
    'content'?: any;
    'onSelect'?: (evt: any) => void;
    'parentEl'?: any;
  }

  interface BbBolts {
    'items': any[];
  }
  interface BbBoltsAttributes extends StencilHTMLAttributes {
    'items'?: any[];
  }

  interface MyComponent {}
  interface MyComponentAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'ArvAccordionItem': Components.ArvAccordionItem;
    'ArvAccordion': Components.ArvAccordion;
    'ArvAlertText': Components.ArvAlertText;
    'ArvAvatar': Components.ArvAvatar;
    'ArvBackdrop': Components.ArvBackdrop;
    'ArvButton': Components.ArvButton;
    'ArvCardHeader': Components.ArvCardHeader;
    'ArvCardMedia': Components.ArvCardMedia;
    'ArvCard': Components.ArvCard;
    'ArvCheckbox': Components.ArvCheckbox;
    'ArvContainer': Components.ArvContainer;
    'ArvDialogContent': Components.ArvDialogContent;
    'ArvDialogPortal': Components.ArvDialogPortal;
    'ArvDialog': Components.ArvDialog;
    'ArvDivider': Components.ArvDivider;
    'ArvFlex': Components.ArvFlex;
    'ArvFluidContainer': Components.ArvFluidContainer;
    'ArvFormControl': Components.ArvFormControl;
    'ArvForm': Components.ArvForm;
    'ArvHeader': Components.ArvHeader;
    'ArvIcon': Components.ArvIcon;
    'ArvInput': Components.ArvInput;
    'ArvLink': Components.ArvLink;
    'ArvListItem': Components.ArvListItem;
    'ArvList': Components.ArvList;
    'ArvMenu': Components.ArvMenu;
    'ArvPaper': Components.ArvPaper;
    'ArvSectionTitle': Components.ArvSectionTitle;
    'ArvSection': Components.ArvSection;
    'ArvSelectOption': Components.ArvSelectOption;
    'ArvSelect': Components.ArvSelect;
    'ArvStepper': Components.ArvStepper;
    'ArvTable': Components.ArvTable;
    'ArvTabs': Components.ArvTabs;
    'ArvText': Components.ArvText;
    'ArvTransition': Components.ArvTransition;
    'ArvVirtualPortal': Components.ArvVirtualPortal;
    'BbBolts': Components.BbBolts;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'arv-accordion-item': Components.ArvAccordionItemAttributes;
    'arv-accordion': Components.ArvAccordionAttributes;
    'arv-alert-text': Components.ArvAlertTextAttributes;
    'arv-avatar': Components.ArvAvatarAttributes;
    'arv-backdrop': Components.ArvBackdropAttributes;
    'arv-button': Components.ArvButtonAttributes;
    'arv-card-header': Components.ArvCardHeaderAttributes;
    'arv-card-media': Components.ArvCardMediaAttributes;
    'arv-card': Components.ArvCardAttributes;
    'arv-checkbox': Components.ArvCheckboxAttributes;
    'arv-container': Components.ArvContainerAttributes;
    'arv-dialog-content': Components.ArvDialogContentAttributes;
    'arv-dialog-portal': Components.ArvDialogPortalAttributes;
    'arv-dialog': Components.ArvDialogAttributes;
    'arv-divider': Components.ArvDividerAttributes;
    'arv-flex': Components.ArvFlexAttributes;
    'arv-fluid-container': Components.ArvFluidContainerAttributes;
    'arv-form-control': Components.ArvFormControlAttributes;
    'arv-form': Components.ArvFormAttributes;
    'arv-header': Components.ArvHeaderAttributes;
    'arv-icon': Components.ArvIconAttributes;
    'arv-input': Components.ArvInputAttributes;
    'arv-link': Components.ArvLinkAttributes;
    'arv-list-item': Components.ArvListItemAttributes;
    'arv-list': Components.ArvListAttributes;
    'arv-menu': Components.ArvMenuAttributes;
    'arv-paper': Components.ArvPaperAttributes;
    'arv-section-title': Components.ArvSectionTitleAttributes;
    'arv-section': Components.ArvSectionAttributes;
    'arv-select-option': Components.ArvSelectOptionAttributes;
    'arv-select': Components.ArvSelectAttributes;
    'arv-stepper': Components.ArvStepperAttributes;
    'arv-table': Components.ArvTableAttributes;
    'arv-tabs': Components.ArvTabsAttributes;
    'arv-text': Components.ArvTextAttributes;
    'arv-transition': Components.ArvTransitionAttributes;
    'arv-virtual-portal': Components.ArvVirtualPortalAttributes;
    'bb-bolts': Components.BbBoltsAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLArvAccordionItemElement extends Components.ArvAccordionItem, HTMLStencilElement {}
  var HTMLArvAccordionItemElement: {
    prototype: HTMLArvAccordionItemElement;
    new (): HTMLArvAccordionItemElement;
  };

  interface HTMLArvAccordionElement extends Components.ArvAccordion, HTMLStencilElement {}
  var HTMLArvAccordionElement: {
    prototype: HTMLArvAccordionElement;
    new (): HTMLArvAccordionElement;
  };

  interface HTMLArvAlertTextElement extends Components.ArvAlertText, HTMLStencilElement {}
  var HTMLArvAlertTextElement: {
    prototype: HTMLArvAlertTextElement;
    new (): HTMLArvAlertTextElement;
  };

  interface HTMLArvAvatarElement extends Components.ArvAvatar, HTMLStencilElement {}
  var HTMLArvAvatarElement: {
    prototype: HTMLArvAvatarElement;
    new (): HTMLArvAvatarElement;
  };

  interface HTMLArvBackdropElement extends Components.ArvBackdrop, HTMLStencilElement {}
  var HTMLArvBackdropElement: {
    prototype: HTMLArvBackdropElement;
    new (): HTMLArvBackdropElement;
  };

  interface HTMLArvButtonElement extends Components.ArvButton, HTMLStencilElement {}
  var HTMLArvButtonElement: {
    prototype: HTMLArvButtonElement;
    new (): HTMLArvButtonElement;
  };

  interface HTMLArvCardHeaderElement extends Components.ArvCardHeader, HTMLStencilElement {}
  var HTMLArvCardHeaderElement: {
    prototype: HTMLArvCardHeaderElement;
    new (): HTMLArvCardHeaderElement;
  };

  interface HTMLArvCardMediaElement extends Components.ArvCardMedia, HTMLStencilElement {}
  var HTMLArvCardMediaElement: {
    prototype: HTMLArvCardMediaElement;
    new (): HTMLArvCardMediaElement;
  };

  interface HTMLArvCardElement extends Components.ArvCard, HTMLStencilElement {}
  var HTMLArvCardElement: {
    prototype: HTMLArvCardElement;
    new (): HTMLArvCardElement;
  };

  interface HTMLArvCheckboxElement extends Components.ArvCheckbox, HTMLStencilElement {}
  var HTMLArvCheckboxElement: {
    prototype: HTMLArvCheckboxElement;
    new (): HTMLArvCheckboxElement;
  };

  interface HTMLArvContainerElement extends Components.ArvContainer, HTMLStencilElement {}
  var HTMLArvContainerElement: {
    prototype: HTMLArvContainerElement;
    new (): HTMLArvContainerElement;
  };

  interface HTMLArvDialogContentElement extends Components.ArvDialogContent, HTMLStencilElement {}
  var HTMLArvDialogContentElement: {
    prototype: HTMLArvDialogContentElement;
    new (): HTMLArvDialogContentElement;
  };

  interface HTMLArvDialogPortalElement extends Components.ArvDialogPortal, HTMLStencilElement {}
  var HTMLArvDialogPortalElement: {
    prototype: HTMLArvDialogPortalElement;
    new (): HTMLArvDialogPortalElement;
  };

  interface HTMLArvDialogElement extends Components.ArvDialog, HTMLStencilElement {}
  var HTMLArvDialogElement: {
    prototype: HTMLArvDialogElement;
    new (): HTMLArvDialogElement;
  };

  interface HTMLArvDividerElement extends Components.ArvDivider, HTMLStencilElement {}
  var HTMLArvDividerElement: {
    prototype: HTMLArvDividerElement;
    new (): HTMLArvDividerElement;
  };

  interface HTMLArvFlexElement extends Components.ArvFlex, HTMLStencilElement {}
  var HTMLArvFlexElement: {
    prototype: HTMLArvFlexElement;
    new (): HTMLArvFlexElement;
  };

  interface HTMLArvFluidContainerElement extends Components.ArvFluidContainer, HTMLStencilElement {}
  var HTMLArvFluidContainerElement: {
    prototype: HTMLArvFluidContainerElement;
    new (): HTMLArvFluidContainerElement;
  };

  interface HTMLArvFormControlElement extends Components.ArvFormControl, HTMLStencilElement {}
  var HTMLArvFormControlElement: {
    prototype: HTMLArvFormControlElement;
    new (): HTMLArvFormControlElement;
  };

  interface HTMLArvFormElement extends Components.ArvForm, HTMLStencilElement {}
  var HTMLArvFormElement: {
    prototype: HTMLArvFormElement;
    new (): HTMLArvFormElement;
  };

  interface HTMLArvHeaderElement extends Components.ArvHeader, HTMLStencilElement {}
  var HTMLArvHeaderElement: {
    prototype: HTMLArvHeaderElement;
    new (): HTMLArvHeaderElement;
  };

  interface HTMLArvIconElement extends Components.ArvIcon, HTMLStencilElement {}
  var HTMLArvIconElement: {
    prototype: HTMLArvIconElement;
    new (): HTMLArvIconElement;
  };

  interface HTMLArvInputElement extends Components.ArvInput, HTMLStencilElement {}
  var HTMLArvInputElement: {
    prototype: HTMLArvInputElement;
    new (): HTMLArvInputElement;
  };

  interface HTMLArvLinkElement extends Components.ArvLink, HTMLStencilElement {}
  var HTMLArvLinkElement: {
    prototype: HTMLArvLinkElement;
    new (): HTMLArvLinkElement;
  };

  interface HTMLArvListItemElement extends Components.ArvListItem, HTMLStencilElement {}
  var HTMLArvListItemElement: {
    prototype: HTMLArvListItemElement;
    new (): HTMLArvListItemElement;
  };

  interface HTMLArvListElement extends Components.ArvList, HTMLStencilElement {}
  var HTMLArvListElement: {
    prototype: HTMLArvListElement;
    new (): HTMLArvListElement;
  };

  interface HTMLArvMenuElement extends Components.ArvMenu, HTMLStencilElement {}
  var HTMLArvMenuElement: {
    prototype: HTMLArvMenuElement;
    new (): HTMLArvMenuElement;
  };

  interface HTMLArvPaperElement extends Components.ArvPaper, HTMLStencilElement {}
  var HTMLArvPaperElement: {
    prototype: HTMLArvPaperElement;
    new (): HTMLArvPaperElement;
  };

  interface HTMLArvSectionTitleElement extends Components.ArvSectionTitle, HTMLStencilElement {}
  var HTMLArvSectionTitleElement: {
    prototype: HTMLArvSectionTitleElement;
    new (): HTMLArvSectionTitleElement;
  };

  interface HTMLArvSectionElement extends Components.ArvSection, HTMLStencilElement {}
  var HTMLArvSectionElement: {
    prototype: HTMLArvSectionElement;
    new (): HTMLArvSectionElement;
  };

  interface HTMLArvSelectOptionElement extends Components.ArvSelectOption, HTMLStencilElement {}
  var HTMLArvSelectOptionElement: {
    prototype: HTMLArvSelectOptionElement;
    new (): HTMLArvSelectOptionElement;
  };

  interface HTMLArvSelectElement extends Components.ArvSelect, HTMLStencilElement {}
  var HTMLArvSelectElement: {
    prototype: HTMLArvSelectElement;
    new (): HTMLArvSelectElement;
  };

  interface HTMLArvStepperElement extends Components.ArvStepper, HTMLStencilElement {}
  var HTMLArvStepperElement: {
    prototype: HTMLArvStepperElement;
    new (): HTMLArvStepperElement;
  };

  interface HTMLArvTableElement extends Components.ArvTable, HTMLStencilElement {}
  var HTMLArvTableElement: {
    prototype: HTMLArvTableElement;
    new (): HTMLArvTableElement;
  };

  interface HTMLArvTabsElement extends Components.ArvTabs, HTMLStencilElement {}
  var HTMLArvTabsElement: {
    prototype: HTMLArvTabsElement;
    new (): HTMLArvTabsElement;
  };

  interface HTMLArvTextElement extends Components.ArvText, HTMLStencilElement {}
  var HTMLArvTextElement: {
    prototype: HTMLArvTextElement;
    new (): HTMLArvTextElement;
  };

  interface HTMLArvTransitionElement extends Components.ArvTransition, HTMLStencilElement {}
  var HTMLArvTransitionElement: {
    prototype: HTMLArvTransitionElement;
    new (): HTMLArvTransitionElement;
  };

  interface HTMLArvVirtualPortalElement extends Components.ArvVirtualPortal, HTMLStencilElement {}
  var HTMLArvVirtualPortalElement: {
    prototype: HTMLArvVirtualPortalElement;
    new (): HTMLArvVirtualPortalElement;
  };

  interface HTMLBbBoltsElement extends Components.BbBolts, HTMLStencilElement {}
  var HTMLBbBoltsElement: {
    prototype: HTMLBbBoltsElement;
    new (): HTMLBbBoltsElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'arv-accordion-item': HTMLArvAccordionItemElement
    'arv-accordion': HTMLArvAccordionElement
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
    'arv-fluid-container': HTMLArvFluidContainerElement
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
    'arv-table': HTMLArvTableElement
    'arv-tabs': HTMLArvTabsElement
    'arv-text': HTMLArvTextElement
    'arv-transition': HTMLArvTransitionElement
    'arv-virtual-portal': HTMLArvVirtualPortalElement
    'bb-bolts': HTMLBbBoltsElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'arv-accordion-item': HTMLArvAccordionItemElement;
    'arv-accordion': HTMLArvAccordionElement;
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
    'arv-fluid-container': HTMLArvFluidContainerElement;
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
    'arv-table': HTMLArvTableElement;
    'arv-tabs': HTMLArvTabsElement;
    'arv-text': HTMLArvTextElement;
    'arv-transition': HTMLArvTransitionElement;
    'arv-virtual-portal': HTMLArvVirtualPortalElement;
    'bb-bolts': HTMLBbBoltsElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
