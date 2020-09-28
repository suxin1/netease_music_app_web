import React, {Component, Fragment, cloneElement} from 'react';
import {TBody, Table, TitleCell, ValueCell} from "./styled";

export class Descriptions extends Component {

  grouping(collection) {
    const {columns} = this.props;
    let actual_columns = columns * 2;
    let groups = [];
    let span_counter = actual_columns;
    let index = 0;

    for (let Item of collection) {
      if(!groups[index]) groups[index] = [];
      let span_take = Item.props.span?Item.props.span*2:2;
      span_counter -= span_take;

      groups[index].push(cloneElement(Item, {span: span_take-1}));

      if(span_counter <= 0) {
        span_counter = actual_columns;
        index ++;
      }
    }
    return groups;
  }

  renderRow(row_list) {

  }

  render() {

    const {children} = this.props;
    let rows = this.grouping(children);
    return (
      <Table>
        <TBody>
          {rows.map(row => {
            return (
              <tr>
                {row}
              </tr>
            )
          })}
        </TBody>
      </Table>
    );
  }
}

export function Item({title, span, children}) {
  debugger
  return (
    <Fragment>
      <TitleCell>{title}</TitleCell>
      <ValueCell as="td" colSpan={span}>{children}</ValueCell>
    </Fragment>
  );
}


export default Descriptions;
