import { Table, Tag } from 'Components/UI-Library'
import { CheckCircleOutlined, SyncOutlined } from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import { format } from 'date-fns'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import { Link } from 'react-router-dom'

const AllOrders = () => {
  // State
  const orders = useStoreState((state) => state.orderAdmin.orders)
  const loading = useStoreState((state) => state.orderAdmin.loading)
  const page = useStoreState((state) => state.orderAdmin.page)
  const getOrderDetail = useStoreActions(
    (action) => action.orderAdmin.getOrderDetail
  )
  // Function
  const onHanleId = (id) => {
    getOrderDetail(id)
  }
  const handlePagination = (pagination) => {
    console.log('pagination :>> ', pagination);
  }
  // data table
  const columns = [
    {
      title: 'Orders',
      dataIndex: 'id',
      key: 'order',
      render: (id, record) => (
        <Link
          to={`${ROUTER.OrderDetail}/${id}`}
          onClick={() => onHanleId(id)}
          style={{ fontWeight: '500', color: '#2271b1' }}
        >
          #{id} {record.reciver.firstName} {record.reciver.lastName}
        </Link>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'create_at',
      key: 'date',
      render: (create_at) => format(create_at, 'dd-MM-yyyy'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag
          icon={
            status === 'Processing' ? (
              <SyncOutlined spin />
            ) : (
              <CheckCircleOutlined />
            )
          }
          color={`${status === 'Processing' ? 'processing' : 'success'}`}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
    },
  ]
  return (
    <>
      <h1 style={{ fontSize: '32px' }}>ALL ORDERS</h1>
      <Table
        dataSource={orders}
        columns={columns}
        loading={loading}
        onChange={handlePagination}
      />
    </>
  )
}

export default AllOrders
