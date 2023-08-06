import Header from "./components/Header"
import Search from "./components/Search"
import Filter from "./components/Filter"
import List from "./components/List"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  return (
    <div className="bg-light_gray w-screen h-[100dvh] font-display px-[120px]">
      <div className="pt-[32px]">
        <Header />
        <div className="mt-[32px]">
          <Search />
        </div>
        <div className="mt-[206px] flex gap-[32px]">
          <Filter />
          <List />
        </div>
      </div>
    </div>
  )
}

export default App
