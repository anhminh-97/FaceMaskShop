import React, { useEffect, useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { message, Popconfirm, Space, Table } from 'Components/UI-Library'
import { DeleteOutlined, EditOutlined } from 'Components/UI-Library/Icons'
import ModalProduct from './ModalProduct.Component'

const AllProducts = () => {
  const getAllProduct = useStoreActions(
    (actions) => actions.adminProduct.getAllProduct
  )
  const allProducts = useStoreState((state) => state.adminProduct.allProducts)
  const page = useStoreState((state) => state.adminProduct.page)
  const loading = useStoreState((state) => state.adminProduct.loading)
  const deleteProduct = useStoreActions(
    (actions) => actions.adminProduct.deleteProduct
  )
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    getAllProduct()
  }, [getAllProduct])

  const showModal = (data) => {
    setData(data)

    setVisible(true)
  }

  // Handle Delete
  function confirm(id) {
    deleteProduct({ id, fnCallback })
  }

  const fnCallback = (success) => {
    if (success) {
      message.success('Delete successful')
    } else {
      message.success('Delete failed')
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => showModal(record)} />
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <>
      <h1 style={{ fontSize: '32px' }}>ALL PRODUCTS</h1>
      <Table
        dataSource={allProducts}
        columns={columns}
        loading={loading}
        pagination={page}
      />
      {visible && (
        <ModalProduct visible={visible} data={data} setVisible={setVisible} />
      )}
    </>
  )
}

export default AllProducts
