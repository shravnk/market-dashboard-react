import React from 'react'
import { SelectDateRange } from '../components/SelectDateRange'
import { unhighlight } from '../helpers/testHelpers'

const mockFn = jest.fn()
const props = {
                  symbol: "XOM",
                  setRange: mockFn
              }

const wrapper = mount(<SelectDateRange {...props}/>)
test('component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
});

test('component renders with 1 Day History highlighted', () => {
  const oneDay = wrapper.find('td[children="1D"]')
  expect(oneDay.prop('style')).toHaveProperty('backgroundColor', '#b5ddc5')
})

test('clicking on highlighted cell does not trigger API request', () => {
  wrapper.find('td[children="1D"]').simulate('click')
  const t = wrapper.find('td')
  expect(mockFn).not.toHaveBeenCalled()
})

test('clicking on another cell highlights that cell and triggers API request', () => {
  wrapper.find('td[children="5D"]').simulate('click')
  expect(wrapper.find('td[children="5D"]').prop('style')).toHaveProperty('backgroundColor', '#b5ddc5')
  expect(mockFn).toHaveBeenCalled()
})
