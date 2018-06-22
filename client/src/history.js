import createHistory from 'history/createBrowserHistory'
import {deleteMessage} from './actions/userActions'

const history = createHistory()

history.listen((location, action) => {
  
});

export default history
