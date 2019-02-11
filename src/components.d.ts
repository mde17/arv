/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  ImageItem,
} from './components/arv-carousel/arv-carousel.model';


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
    'layout': string;
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
    'layout'?: string;
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

  interface ArvCarousel {
    'externalUrl': string;
    'images': ImageItem[];
    'loading': boolean;
    'target': string;
  }
  interface ArvCarouselAttributes extends StencilHTMLAttributes {
    'externalUrl'?: string;
    'images'?: ImageItem[];
    'loading'?: boolean;
    'target'?: string;
  }

  interface ArvCheckbox {
    'color': string;
    'label': string;
    'labelVariant': string;
    'layout': string;
    'mode': string;
    'name': string;
    'onTick': (e: any) => void;
    'styles': any;
    'textWidth': string;
    'value': boolean;
  }
  interface ArvCheckboxAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'label'?: string;
    'labelVariant'?: string;
    'layout'?: string;
    'mode'?: string;
    'name'?: string;
    'onOnInputChange'?: (event: CustomEvent) => void;
    'onTick'?: (e: any) => void;
    'styles'?: any;
    'textWidth'?: string;
    'value'?: boolean;
  }

  interface ArvChips {
    'size': string;
    'target': string;
    'url': string;
    'variant': string;
  }
  interface ArvChipsAttributes extends StencilHTMLAttributes {
    'size'?: string;
    'target'?: string;
    'url'?: string;
    'variant'?: string;
  }

  interface ArvContainer {
    'color': string;
    'full': boolean;
    'height': string;
    'hidden': boolean;
    'margin': string;
    'max1080': boolean;
    'padding': string;
    'scrollable': boolean;
    'styles': any;
    'variant': string;
    'width': string;
  }
  interface ArvContainerAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'full'?: boolean;
    'height'?: string;
    'hidden'?: boolean;
    'margin'?: string;
    'max1080'?: boolean;
    'padding'?: string;
    'scrollable'?: boolean;
    'styles'?: any;
    'variant'?: string;
    'width'?: string;
  }

  interface ArvDialogContent {
    'animation': string;
    'full': boolean;
  }
  interface ArvDialogContentAttributes extends StencilHTMLAttributes {
    'animation'?: string;
    'full'?: boolean;
  }

  interface ArvDialogPortal {
    'content': any;
    'full': boolean;
    'removeDialog': () => void;
    'scrollable': boolean;
  }
  interface ArvDialogPortalAttributes extends StencilHTMLAttributes {
    'content'?: any;
    'full'?: boolean;
    'scrollable'?: boolean;
  }

  interface ArvDialog {
    'actions': any;
    'bgColor': string;
    'dialogTitle': string;
    'full': boolean;
    'handleClose': () => void;
    'hideClose': boolean;
    'parent': HTMLElement;
    'scrollable': boolean;
    'show': boolean;
  }
  interface ArvDialogAttributes extends StencilHTMLAttributes {
    'actions'?: any;
    'bgColor'?: string;
    'dialogTitle'?: string;
    'full'?: boolean;
    'handleClose'?: () => void;
    'hideClose'?: boolean;
    'onOnClose'?: (event: CustomEvent) => void;
    'onOnOk'?: (event: CustomEvent) => void;
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

  interface ArvEditor {
    'disabled': boolean;
    'disabledTools': string[];
    'getValue': () => Promise<string>;
    'handleImage': (editor: any) => void;
    'setValue': (value: string) => void;
  }
  interface ArvEditorAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'disabledTools'?: string[];
    'handleImage'?: (editor: any) => void;
    'onEditorOnBlur'?: (event: CustomEvent) => void;
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
    'color': string;
    'icon': string;
    'noMargin': boolean;
    'size': string;
    'styles': any;
    'withButtonIcon': boolean;
  }
  interface ArvIconAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'icon'?: string;
    'noMargin'?: boolean;
    'size'?: string;
    'styles'?: any;
    'withButtonIcon'?: boolean;
  }

  interface ArvImageUpload {
    'disabled': boolean;
    'hashKey': number;
    'imgSrc': string;
    'onRemove': () => void;
    'onUpload': (e: any) => void;
    'size': string;
  }
  interface ArvImageUploadAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'hashKey'?: number;
    'imgSrc'?: string;
    'onRemove'?: (event: CustomEvent) => void;
    'onUpload'?: (event: CustomEvent) => void;
    'size'?: string;
  }

  interface ArvInfo {
    'color': string;
    'icon': string;
    'imageSrc': string;
    'infoDescription': string;
    'infoTitle': string;
    'variant': string;
  }
  interface ArvInfoAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'icon'?: string;
    'imageSrc'?: string;
    'infoDescription'?: string;
    'infoTitle'?: string;
    'variant'?: string;
  }

  interface ArvInput {
    'autocomplete': string;
    'disabled': boolean;
    'fileUpload': boolean;
    'full': boolean;
    'hasError': boolean;
    'hashKey': number;
    'icon': string;
    'input': (e: any) => void;
    'inputBlur': (e: any) => void;
    'inputChange': (e: any) => void;
    'inputEnter': (e: any) => void;
    'inputFocus': (e: any) => void;
    'inputProps': any;
    'inputStyle': any;
    'label': string;
    'layout': string;
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
    'hashKey'?: number;
    'icon'?: string;
    'input'?: (e: any) => void;
    'inputBlur'?: (e: any) => void;
    'inputChange'?: (e: any) => void;
    'inputEnter'?: (e: any) => void;
    'inputFocus'?: (e: any) => void;
    'inputProps'?: any;
    'inputStyle'?: any;
    'label'?: string;
    'layout'?: string;
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

  interface ArvLoader {
    'color': string;
    'contained': boolean;
    'size': string;
  }
  interface ArvLoaderAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'contained'?: boolean;
    'size'?: string;
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

  interface ArvMultipleInput {
    'disabled': boolean;
    'onAdd': (e: any) => void;
    'onInputChange': (e: any) => void;
    'onInputEnter': (e: any) => void;
    'onRemove': (e: any) => void;
    'onUpdate': (e: any) => void;
    'placeholder': string;
    'values': string[];
  }
  interface ArvMultipleInputAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'onAdd'?: (event: CustomEvent) => void;
    'onInputChange'?: (event: CustomEvent) => void;
    'onInputEnter'?: (event: CustomEvent) => void;
    'onRemove'?: (event: CustomEvent) => void;
    'onUpdate'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'values'?: string[];
  }

  interface ArvPaginator {
    'color': string;
    'currentPage': number;
    'itemsPerPage': number;
    'onSelect': (index: number) => void;
    'totalItems': number;
  }
  interface ArvPaginatorAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'currentPage'?: number;
    'itemsPerPage'?: number;
    'onSelect'?: (index: number) => void;
    'totalItems'?: number;
  }

  interface ArvPaper {
    'box': boolean;
    'height': string;
    'noOverflow': boolean;
    'padded': boolean;
    'transparent': boolean;
    'weight': number;
    'width': string;
  }
  interface ArvPaperAttributes extends StencilHTMLAttributes {
    'box'?: boolean;
    'height'?: string;
    'noOverflow'?: boolean;
    'padded'?: boolean;
    'transparent'?: boolean;
    'weight'?: number;
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

  interface ArvSection {
    'icon': string;
    'sectionTitle': string;
    'titleColor': string;
    'titleVariant': string;
  }
  interface ArvSectionAttributes extends StencilHTMLAttributes {
    'icon'?: string;
    'sectionTitle'?: string;
    'titleColor'?: string;
    'titleVariant'?: string;
  }

  interface ArvSelectOption {
    'onSelect': (e: any) => void;
    'parse': boolean;
    'selected': boolean;
    'value': string;
  }
  interface ArvSelectOptionAttributes extends StencilHTMLAttributes {
    'onOptionSelected'?: (event: CustomEvent) => void;
    'onSelect'?: (e: any) => void;
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
    'loading': boolean;
    'onSelectChange': (item: any) => void;
    'optionValue': string;
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
    'loading'?: boolean;
    'onOnInput'?: (event: CustomEvent) => void;
    'onOnInputChange'?: (event: CustomEvent) => void;
    'onSelectChange'?: (event: CustomEvent) => void;
    'optionValue'?: string;
    'placeholder'?: string;
    'value'?: string;
    /**
    * oneOf [select, input]
    */
    'variant'?: string;
  }

  interface ArvSnackbar {
    'animationIn': string;
    'animationOut': string;
    'close': () => void;
    'horizontal': string;
    'icon': string;
    'message': string;
    'open': boolean;
    'timing': number;
    'top': number;
    'variant': string;
    'vertical': string;
  }
  interface ArvSnackbarAttributes extends StencilHTMLAttributes {
    'animationIn'?: string;
    'animationOut'?: string;
    'close'?: () => void;
    'horizontal'?: string;
    'icon'?: string;
    'message'?: string;
    'onHandleClose'?: (event: CustomEvent) => void;
    'open'?: boolean;
    'timing'?: number;
    'top'?: number;
    'variant'?: string;
    'vertical'?: string;
  }

  interface ArvStepper {
    'steps': any;
  }
  interface ArvStepperAttributes extends StencilHTMLAttributes {
    'steps'?: any;
  }

  interface ArvSwitch {
    'color': string;
    'disabled': boolean;
    'value': boolean;
  }
  interface ArvSwitchAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'disabled'?: boolean;
    'value'?: boolean;
  }

  interface ArvTable {
    'activeSort': string;
    'controls': any;
    'isAscending': boolean;
    'multiSelectable': boolean;
    'onSelect': (row: any) => void;
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
    'onSelect'?: (row: any) => void;
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
    'maxChars': number;
    'noWrap': boolean;
    'preWrap': boolean;
    'strike': boolean;
    'strong': boolean;
    'textAlign': string;
    'textOverflow': boolean;
    'variant': string;
    'weight': number;
  }
  interface ArvTextAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'lineHeight'?: string;
    'maxChars'?: number;
    'noWrap'?: boolean;
    'preWrap'?: boolean;
    'strike'?: boolean;
    'strong'?: boolean;
    'textAlign'?: string;
    'textOverflow'?: boolean;
    'variant'?: string;
    'weight'?: number;
  }

  interface ArvTooltip {}
  interface ArvTooltipAttributes extends StencilHTMLAttributes {}

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
    'inputText': string;
    'onSelect': (evt: any) => void;
    'parentEl': any;
    'value': string;
    'variant': string;
  }
  interface ArvVirtualPortalAttributes extends StencilHTMLAttributes {
    'content'?: any;
    'inputText'?: string;
    'onSelect'?: (evt: any) => void;
    'parentEl'?: any;
    'value'?: string;
    'variant'?: string;
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
    'ArvCarousel': Components.ArvCarousel;
    'ArvCheckbox': Components.ArvCheckbox;
    'ArvChips': Components.ArvChips;
    'ArvContainer': Components.ArvContainer;
    'ArvDialogContent': Components.ArvDialogContent;
    'ArvDialogPortal': Components.ArvDialogPortal;
    'ArvDialog': Components.ArvDialog;
    'ArvDivider': Components.ArvDivider;
    'ArvEditor': Components.ArvEditor;
    'ArvFlex': Components.ArvFlex;
    'ArvFluidContainer': Components.ArvFluidContainer;
    'ArvFormControl': Components.ArvFormControl;
    'ArvForm': Components.ArvForm;
    'ArvHeader': Components.ArvHeader;
    'ArvIcon': Components.ArvIcon;
    'ArvImageUpload': Components.ArvImageUpload;
    'ArvInfo': Components.ArvInfo;
    'ArvInput': Components.ArvInput;
    'ArvLink': Components.ArvLink;
    'ArvListItem': Components.ArvListItem;
    'ArvList': Components.ArvList;
    'ArvLoader': Components.ArvLoader;
    'ArvMenu': Components.ArvMenu;
    'ArvMultipleInput': Components.ArvMultipleInput;
    'ArvPaginator': Components.ArvPaginator;
    'ArvPaper': Components.ArvPaper;
    'ArvSectionTitle': Components.ArvSectionTitle;
    'ArvSection': Components.ArvSection;
    'ArvSelectOption': Components.ArvSelectOption;
    'ArvSelect': Components.ArvSelect;
    'ArvSnackbar': Components.ArvSnackbar;
    'ArvStepper': Components.ArvStepper;
    'ArvSwitch': Components.ArvSwitch;
    'ArvTable': Components.ArvTable;
    'ArvTabs': Components.ArvTabs;
    'ArvText': Components.ArvText;
    'ArvTooltip': Components.ArvTooltip;
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
    'arv-carousel': Components.ArvCarouselAttributes;
    'arv-checkbox': Components.ArvCheckboxAttributes;
    'arv-chips': Components.ArvChipsAttributes;
    'arv-container': Components.ArvContainerAttributes;
    'arv-dialog-content': Components.ArvDialogContentAttributes;
    'arv-dialog-portal': Components.ArvDialogPortalAttributes;
    'arv-dialog': Components.ArvDialogAttributes;
    'arv-divider': Components.ArvDividerAttributes;
    'arv-editor': Components.ArvEditorAttributes;
    'arv-flex': Components.ArvFlexAttributes;
    'arv-fluid-container': Components.ArvFluidContainerAttributes;
    'arv-form-control': Components.ArvFormControlAttributes;
    'arv-form': Components.ArvFormAttributes;
    'arv-header': Components.ArvHeaderAttributes;
    'arv-icon': Components.ArvIconAttributes;
    'arv-image-upload': Components.ArvImageUploadAttributes;
    'arv-info': Components.ArvInfoAttributes;
    'arv-input': Components.ArvInputAttributes;
    'arv-link': Components.ArvLinkAttributes;
    'arv-list-item': Components.ArvListItemAttributes;
    'arv-list': Components.ArvListAttributes;
    'arv-loader': Components.ArvLoaderAttributes;
    'arv-menu': Components.ArvMenuAttributes;
    'arv-multiple-input': Components.ArvMultipleInputAttributes;
    'arv-paginator': Components.ArvPaginatorAttributes;
    'arv-paper': Components.ArvPaperAttributes;
    'arv-section-title': Components.ArvSectionTitleAttributes;
    'arv-section': Components.ArvSectionAttributes;
    'arv-select-option': Components.ArvSelectOptionAttributes;
    'arv-select': Components.ArvSelectAttributes;
    'arv-snackbar': Components.ArvSnackbarAttributes;
    'arv-stepper': Components.ArvStepperAttributes;
    'arv-switch': Components.ArvSwitchAttributes;
    'arv-table': Components.ArvTableAttributes;
    'arv-tabs': Components.ArvTabsAttributes;
    'arv-text': Components.ArvTextAttributes;
    'arv-tooltip': Components.ArvTooltipAttributes;
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

  interface HTMLArvCarouselElement extends Components.ArvCarousel, HTMLStencilElement {}
  var HTMLArvCarouselElement: {
    prototype: HTMLArvCarouselElement;
    new (): HTMLArvCarouselElement;
  };

  interface HTMLArvCheckboxElement extends Components.ArvCheckbox, HTMLStencilElement {}
  var HTMLArvCheckboxElement: {
    prototype: HTMLArvCheckboxElement;
    new (): HTMLArvCheckboxElement;
  };

  interface HTMLArvChipsElement extends Components.ArvChips, HTMLStencilElement {}
  var HTMLArvChipsElement: {
    prototype: HTMLArvChipsElement;
    new (): HTMLArvChipsElement;
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

  interface HTMLArvEditorElement extends Components.ArvEditor, HTMLStencilElement {}
  var HTMLArvEditorElement: {
    prototype: HTMLArvEditorElement;
    new (): HTMLArvEditorElement;
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

  interface HTMLArvImageUploadElement extends Components.ArvImageUpload, HTMLStencilElement {}
  var HTMLArvImageUploadElement: {
    prototype: HTMLArvImageUploadElement;
    new (): HTMLArvImageUploadElement;
  };

  interface HTMLArvInfoElement extends Components.ArvInfo, HTMLStencilElement {}
  var HTMLArvInfoElement: {
    prototype: HTMLArvInfoElement;
    new (): HTMLArvInfoElement;
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

  interface HTMLArvLoaderElement extends Components.ArvLoader, HTMLStencilElement {}
  var HTMLArvLoaderElement: {
    prototype: HTMLArvLoaderElement;
    new (): HTMLArvLoaderElement;
  };

  interface HTMLArvMenuElement extends Components.ArvMenu, HTMLStencilElement {}
  var HTMLArvMenuElement: {
    prototype: HTMLArvMenuElement;
    new (): HTMLArvMenuElement;
  };

  interface HTMLArvMultipleInputElement extends Components.ArvMultipleInput, HTMLStencilElement {}
  var HTMLArvMultipleInputElement: {
    prototype: HTMLArvMultipleInputElement;
    new (): HTMLArvMultipleInputElement;
  };

  interface HTMLArvPaginatorElement extends Components.ArvPaginator, HTMLStencilElement {}
  var HTMLArvPaginatorElement: {
    prototype: HTMLArvPaginatorElement;
    new (): HTMLArvPaginatorElement;
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

  interface HTMLArvSnackbarElement extends Components.ArvSnackbar, HTMLStencilElement {}
  var HTMLArvSnackbarElement: {
    prototype: HTMLArvSnackbarElement;
    new (): HTMLArvSnackbarElement;
  };

  interface HTMLArvStepperElement extends Components.ArvStepper, HTMLStencilElement {}
  var HTMLArvStepperElement: {
    prototype: HTMLArvStepperElement;
    new (): HTMLArvStepperElement;
  };

  interface HTMLArvSwitchElement extends Components.ArvSwitch, HTMLStencilElement {}
  var HTMLArvSwitchElement: {
    prototype: HTMLArvSwitchElement;
    new (): HTMLArvSwitchElement;
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

  interface HTMLArvTooltipElement extends Components.ArvTooltip, HTMLStencilElement {}
  var HTMLArvTooltipElement: {
    prototype: HTMLArvTooltipElement;
    new (): HTMLArvTooltipElement;
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
    'arv-carousel': HTMLArvCarouselElement
    'arv-checkbox': HTMLArvCheckboxElement
    'arv-chips': HTMLArvChipsElement
    'arv-container': HTMLArvContainerElement
    'arv-dialog-content': HTMLArvDialogContentElement
    'arv-dialog-portal': HTMLArvDialogPortalElement
    'arv-dialog': HTMLArvDialogElement
    'arv-divider': HTMLArvDividerElement
    'arv-editor': HTMLArvEditorElement
    'arv-flex': HTMLArvFlexElement
    'arv-fluid-container': HTMLArvFluidContainerElement
    'arv-form-control': HTMLArvFormControlElement
    'arv-form': HTMLArvFormElement
    'arv-header': HTMLArvHeaderElement
    'arv-icon': HTMLArvIconElement
    'arv-image-upload': HTMLArvImageUploadElement
    'arv-info': HTMLArvInfoElement
    'arv-input': HTMLArvInputElement
    'arv-link': HTMLArvLinkElement
    'arv-list-item': HTMLArvListItemElement
    'arv-list': HTMLArvListElement
    'arv-loader': HTMLArvLoaderElement
    'arv-menu': HTMLArvMenuElement
    'arv-multiple-input': HTMLArvMultipleInputElement
    'arv-paginator': HTMLArvPaginatorElement
    'arv-paper': HTMLArvPaperElement
    'arv-section-title': HTMLArvSectionTitleElement
    'arv-section': HTMLArvSectionElement
    'arv-select-option': HTMLArvSelectOptionElement
    'arv-select': HTMLArvSelectElement
    'arv-snackbar': HTMLArvSnackbarElement
    'arv-stepper': HTMLArvStepperElement
    'arv-switch': HTMLArvSwitchElement
    'arv-table': HTMLArvTableElement
    'arv-tabs': HTMLArvTabsElement
    'arv-text': HTMLArvTextElement
    'arv-tooltip': HTMLArvTooltipElement
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
    'arv-carousel': HTMLArvCarouselElement;
    'arv-checkbox': HTMLArvCheckboxElement;
    'arv-chips': HTMLArvChipsElement;
    'arv-container': HTMLArvContainerElement;
    'arv-dialog-content': HTMLArvDialogContentElement;
    'arv-dialog-portal': HTMLArvDialogPortalElement;
    'arv-dialog': HTMLArvDialogElement;
    'arv-divider': HTMLArvDividerElement;
    'arv-editor': HTMLArvEditorElement;
    'arv-flex': HTMLArvFlexElement;
    'arv-fluid-container': HTMLArvFluidContainerElement;
    'arv-form-control': HTMLArvFormControlElement;
    'arv-form': HTMLArvFormElement;
    'arv-header': HTMLArvHeaderElement;
    'arv-icon': HTMLArvIconElement;
    'arv-image-upload': HTMLArvImageUploadElement;
    'arv-info': HTMLArvInfoElement;
    'arv-input': HTMLArvInputElement;
    'arv-link': HTMLArvLinkElement;
    'arv-list-item': HTMLArvListItemElement;
    'arv-list': HTMLArvListElement;
    'arv-loader': HTMLArvLoaderElement;
    'arv-menu': HTMLArvMenuElement;
    'arv-multiple-input': HTMLArvMultipleInputElement;
    'arv-paginator': HTMLArvPaginatorElement;
    'arv-paper': HTMLArvPaperElement;
    'arv-section-title': HTMLArvSectionTitleElement;
    'arv-section': HTMLArvSectionElement;
    'arv-select-option': HTMLArvSelectOptionElement;
    'arv-select': HTMLArvSelectElement;
    'arv-snackbar': HTMLArvSnackbarElement;
    'arv-stepper': HTMLArvStepperElement;
    'arv-switch': HTMLArvSwitchElement;
    'arv-table': HTMLArvTableElement;
    'arv-tabs': HTMLArvTabsElement;
    'arv-text': HTMLArvTextElement;
    'arv-tooltip': HTMLArvTooltipElement;
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
