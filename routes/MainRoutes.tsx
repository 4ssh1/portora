import {Route, Routes} from 'react-router-dom'
import { EntryRoute } from './EntryRoutes'

function MainRoutes() {
  return (
    <Routes>
        {EntryRoute.map(route=>(
            <Route element={route.element} path={route.path}/>
        ))}
    </Routes>
  )
}

export default MainRoutes
