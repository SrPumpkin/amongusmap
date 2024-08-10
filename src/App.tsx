import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React, { Suspense } from 'react'

import Map from "./container/Map"
import SuspenseBlock from "./container/Suspens"
import {useAppDispatch} from "./storage/hooks/hooks"
import {updateSettings} from "./storage/slice/settingsSlice"

import './App.css'

function App() {
  window.addEventListener("resize", handleResize)

  const dispatch = useAppDispatch()

  function handleResize() {
    dispatch(updateSettings({
      width: window.innerWidth,
      height: window.innerHeight
    }))
  }

  return (
    <>
      <Router>
        <Suspense fallback={<SuspenseBlock />}>
          <Routes>
            <Route path="/" element={<Map/>}></Route>
            <Route path="/map" element={<Map/>}></Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
