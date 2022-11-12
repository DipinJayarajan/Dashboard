import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Sort, Filter, Page , Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import {  customersGrid, customersData } from "../data/dummy";

import { Header } from "../components"


const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-gray-100 rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
      id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={["Delete"]}
      editSettings={{ allowDeleting: true,
      allowEditing: true }}
      width="auto"
      
      >
        <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={ [ Sort, Toolbar, Filter, Page, Selection , Edit ] } />
      </GridComponent>
    </div>
  )
}

export default Orders