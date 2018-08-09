import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {fetchStocksCurrentData} from '../actions/stockActions'
import {currentDataResponse} from '../helpers/testHelpers'
import {currentDataArray} from '../helpers/testHelpers'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('Current Data Action Creators', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('parses JSON and returns formatted data on successful fetch response', () => {
    fetch.mockResponse(JSON.stringify(currentDataResponse), {status: 200})

    const expectedActions = [
                              {type: 'CURRENT_DATA_BEGIN'},
                              {type: 'CURRENT_DATA_SUCCESS', payload: currentDataArray}
                            ]
    const store = mockStore({})

    return store.dispatch(fetchStocksCurrentData())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('dispatches correct action on failed fetch request', () => {
    const errorMessage = {error: "Not Valid"}
    fetch.mockResponse(JSON.stringify(errorMessage), {status: 400})

    const expectedActions = [
                              {type: 'CURRENT_DATA_BEGIN'},
                              {type: 'CURRENT_DATA_FAILURE', payload: errorMessage}
                            ]
    const store = mockStore({})

    return store.dispatch(fetchStocksCurrentData())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
