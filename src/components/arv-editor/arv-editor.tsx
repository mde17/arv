import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'arv-editor',
  styleUrl: 'arv-editor.css',
  shadow: true
})
export class Editor {

  @Element() el: HTMLElement;

  @Prop() disabled: boolean;

  formatBlock(block: string) {
    document.execCommand('formatBlock', false, block);
  }

  getImage() {
    const file = this.el.shadowRoot.querySelector('input[type=file]')['files'][0];
    const editorContent = this.el.shadowRoot.querySelector('.editor');
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        const dataURI = reader.result;

        const img: any = document.createElement('img');
        img.src = dataURI;
        editorContent.appendChild(img);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  showLink() {
    const url = prompt('Enter the URL');
    document.execCommand('createLink', false, url);
  }

  size(s) {
    document.execCommand('fontSize', false, s);
  }

  comm(c, v = null) {
    document.execCommand(c, false, v);
  }

  render() {
    const rootClassNames = {
      root: true
    };

    const controls = [
      {
        icon: 'format_bold',
        comm: 'bold',
      },
      {
        icon: 'format_underline',
        comm: 'underline',
      },
      {
        icon: 'format_italic',
        comm: 'italic',
      },
      {
        icon: 'format_strikethrough',
        comm: 'strikeThrough',
      },
      {
        icon: 'format_list_numbered',
        comm: 'insertOrderedList',
      },
      {
        icon: 'format_list_bulleted',
        comm: 'insertUnorderedList',
      },
      {
        icon: 'format_align_center',
        comm: 'justifyCenter',
      },
      {
        icon: 'format_align_left',
        comm: 'justifyLeft',
      },
      {
        icon: 'format_align_right',
        comm: 'justifyRight',
      },
      {
        icon: 'format_align_justify',
        comm: 'justifyFull',
      },
      {
        icon: 'format_clear',
        comm: 'removeFormat',
      },
      {
        icon: 'undo',
        comm: 'undo',
      },
      {
        icon: 'redo',
        comm: 'redo',
      },
      {
        icon: 'link_off',
        comm: 'unlink',
      }
    ];
    const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    const sizes = [1, 2, 3, 4, 5, 6, 7];

    return (
      <div class={rootClassNames}>
        <arv-flex layout="column">
          <div class="control">
            {controls.map((d, i) => (
              <arv-button
                key={i}
                onClick={this.comm.bind(this, d.comm)}
                icon={d.icon}
                variant="flat-icon"
                rounded={false}/>
            ))}
            <arv-button
              onClick={this.showLink.bind(this)}
              icon="insert_link"
              variant="flat-icon"
              rounded={false}/>
            <arv-menu xPosition="left">
              <div slot="menu">
                <arv-button
                  icon="title"
                  variant="flat-icon"
                  rounded={false}/>
              </div>
              <div
                class="headingList"
                slot="menu-list">
                {headings.map((d, i) => (
                  <arv-button
                    rounded={false}
                    key={i}
                    onClick={this.formatBlock.bind(this, d)}
                    full>
                    Heading {i + 1}
                  </arv-button>
                ))}
              </div>
            </arv-menu>
            <arv-menu xPosition="left">
              <div slot="menu">
                <arv-button
                  icon="format_size"
                  variant="flat-icon"
                  rounded={false}/>
              </div>
              <div
                class="headingList"
                slot="menu-list">
                {sizes.map(d => (
                  <arv-button
                    rounded={false}
                    key={d}
                    onClick={this.size.bind(this, d)}
                    full>
                    {d}
                  </arv-button>
                ))}
              </div>
            </arv-menu>
            <span class="inputWrapper">
              <arv-icon icon="image"></arv-icon>
              <input
                class="input"
                onChange={this.getImage.bind(this)} type="file" accept="image/*" />
            </span>
          </div>
          <arv-divider transparent/>
          <div class="editor" contenteditable></div>
        </arv-flex>
      </div>
    );
  }
}
