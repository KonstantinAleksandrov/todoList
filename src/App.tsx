import { Routes, Route } from 'react-router-dom'
import { TasksPage } from './pages'
import { observer } from 'mobx-react-lite';
import { useTodoStore } from './hooks';
import { Loader } from './components';
import { useEffect } from 'react'

function App() {
  const store = useTodoStore()

  useEffect(()=>{
    store.loadAllData()
  },[])

  return (
    <div className="App">
      <div className="wrapper">
          <Routes>
            <Route path='/' element={<TasksPage/>}></Route>
          </Routes>
          {store.isLoading && <Loader/>}
      </div>
    </div>
  );
}

export default observer(App);
