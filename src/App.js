import Admin from './pages/admin'
import './App.css'
import { Provider } from 'react-redux'
import configStore from './redux/configStore'

const store = configStore()

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Admin />
      </div>
    </Provider>
  )
}

export default App
