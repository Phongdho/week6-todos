import React from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1 style={{textAlign:"center"}}>Todo App built on Redux</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2 style={{textAlign:"center"}}>Phong's ToDos</h2>
        <Header />
        <TodoList />
        <Footer />
      </section>
    </div>
  )
}

export default App
