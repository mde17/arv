import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'arv-table',
  styleUrl: 'arv-table.css',
  shadow: true
})
export class Table {
  @Prop() activeSort: string;

  @Prop() controls = [];

  @Prop() multiSelectable: boolean;

  @Prop() selectable: boolean;

  @Prop() sortable: boolean;

  @Prop() isAscending: boolean;

  @Prop() styles = {
    table: {},
    tbody: {},
    tr: {},
    td: {},
    thead: {},
    th: {},
    tfoot: {},
  };

  @Prop() tableTitle: string;

  @Prop() titleVariant = 'heading3';

  @Prop() tableData: any = [];

  @Prop() tableHeaders: string[] = [];

  @Prop() tableProps = {};

  @Prop() onSelect: (row: any) => void;

  @Event() rowClick: EventEmitter;

  @Event() rowItemClick: EventEmitter;

  @Event() headerClick: EventEmitter;

  thItemClick(item, evt) {
    this.headerClick.emit({
      evt,
      item
    });
  }

  trItemClick(item, evt) {
    this.rowClick.emit({
      evt,
      item
    });
    if (this.onSelect) {
      this.onSelect(item);
    }
  }

  tdItemClick(item, evt) {
    this.rowItemClick.emit({
      evt,
      item
    })
  }

  private generateRowItem(value) {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      return value.map(d => (
        <span class="rowItemArrayItem">
          {d}
        </span>
      ));
    }

    return value;
  }

  render() {
    const rootClassNames = {
      root: true,
      sortable: this.sortable,
      ascending: this.isAscending
    };

    return (
      <div class={rootClassNames}>
        {Boolean(this.tableTitle) && (
           <arv-flex padded>
             <arv-text variant={this.titleVariant}>{this.tableTitle}</arv-text>
           </arv-flex>
        )}
        <table
          style={this.styles.table}
          class="table"
          {...this.tableProps}>

          <thead style={this.styles.thead}>
            <tr
              class="tr"
              style={this.styles.tr}>
              {this.multiSelectable && (
                 <th class="th thCheckbox" style={this.styles.th}><arv-checkbox /></th>
              )}
              {this.tableHeaders.map(headerItem => (
                <th
                  onClick={this.thItemClick.bind(this, headerItem)}
                  class={{
                    th: true,
                    thActive: this.sortable && (headerItem === this.activeSort)
                  }}
                  style={this.styles.th}>
                  {headerItem}
                </th>
              ))}
              {Boolean(this.controls.length) && (<th class="th" style={this.styles.th}></th>)}
            </tr>
          </thead>

          <tbody style={this.styles.tbody}>
            {this.tableData.map(rowData => {
               const [id, ...dataBody] = rowData;
               return (<tr
                         data-id={id}
                         class="tr"
                         onClick={this.trItemClick.bind(this, rowData)}
                         style={this.styles.tr}>
                 {(this.selectable || this.multiSelectable) && (
                    <td class="td tdCheckbox"><arv-checkbox /></td>
                 )}

                 {dataBody.map(rowItem => (
                   <td
                     class="td"
                     onClick={this.tdItemClick.bind(this, rowItem)}
                     style={this.styles.td}>
                     {this.generateRowItem(rowItem)}
                   </td>
                 ))}
                 {Boolean(this.controls.length) && (
                    <td class="td controls">
                      <arv-flex justify="end">
                        {this.controls.map(ctrlItem => (
                          <arv-button
                            variant="ghost-icon"
                            icon={ctrlItem.icon}
                            buttonClick={() => ctrlItem.fn(rowData)}></arv-button>
                        ))}
                      </arv-flex>
                    </td>  
                 )}
               </tr>)})}
            <slot />
          </tbody>

        </table>
      </div>
    );
  }
}
