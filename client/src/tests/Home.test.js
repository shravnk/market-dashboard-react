import React from 'react'
import { Home } from '../../src/containers/Home'

const mockFn = jest.fn()
const mockFetchCurrentData = jest.fn()
const mockClearHistoryData = jest.fn()

const mockSymbol = "T"
const mockHistory = ["A", "B", "C"]

const props = {
                  actions: {
                    clearHistoryData: mockClearHistoryData,
                    fetchStocksCurrentData: mockFetchCurrentData,
                    fetchStockHistory: mockFn,
                    fetchStockDetailedData: mockFn
                  },
                  stocks: {
                    historyData: mockHistory,
                    currentData: [],
                    historySymbol: mockSymbol,
                    historyReady: false
                  },
                  user: {
                    stocks: []
                  }
              }

const wrapper = shallow(<Home {...props}/>)

test('component renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
});

test('state.displayHistory set to true', () => {
    expect(wrapper.state('displayHistory')).toEqual(true)
});

test('only clearHistoryData and fetchStocksCurrentData are called after mounting', () => {
    expect(mockFn).not.toHaveBeenCalled()
    expect(mockClearHistoryData).toHaveBeenCalled()
    expect(mockFetchCurrentData).toHaveBeenCalled()
})

test('passes correct props to CurrentTable Component', () => {
  const expectedProps = {stocks: [], sectors: {}, fetchHistory: mockFn, displayHistory: expect.any(Function), fetchData: mockFn}
  const currentTableProps = wrapper.find('withRouter(CurrentTable)').props()
  expect(currentTableProps).toEqual(expectedProps)
})

test('passes correct props to PriceHistory Component', () => {
  const expectedProps = { symbol: mockSymbol, historyData: mockHistory, display: true, ready: false }
  const priceHistoryProps = wrapper.find('PriceHistory').props()
  expect(priceHistoryProps).toEqual(expectedProps)
})
