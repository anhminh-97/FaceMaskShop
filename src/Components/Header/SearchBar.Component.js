import { Col, Row, Select } from 'Components/UI-Library'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTER } from 'Constants/CommonConstants'

const { Option } = Select

const SearchBar = () => {
  const history = useHistory()
  const loadingSearch = useStoreState((state) => state.shop.loadingSearch)
  const productSearch = useStoreState((state) => state.shop.productSearch)
  const getProductSearch = useStoreActions(
    (actions) => actions.shop.getProductSearch
  )

  // function
  function onChange(value) {
    history.push(`${ROUTER.ProductDetail}/${value}`)
  }

  function onBlur() {
    // console.log('blur')
  }

  function onFocus() {
    getProductSearch('')
  }

  function onSearch(val) {
    getProductSearch(val)
  }
  return (
    <Select
      className="input-search"
      loading={loadingSearch}
      showSearch
      style={{ width: 200 }}
      placeholder="Select a product"
      // value={value}
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {productSearch.map((item, index) => (
        <Option value={item.id} key={index.toString()} attr={item}>
          <Row align="middle">
            <Col span={6}>
              <img className="image-product-search" src={item.image} alt="" />
            </Col>
            <Col>{item.name}</Col>
          </Row>
        </Option>
      ))}
    </Select>
  )
}

export default SearchBar
