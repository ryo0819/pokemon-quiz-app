import './App.css'
import QuizContainer from './components/QuizContainer'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Pokemon Quiz</h1>
      </header>

      <main className="content">
        <QuizContainer onRestart={() => {}} />
      </main>

      <footer className="app-footer">
        &copy; {new Date().getFullYear()} Pokemon Quiz App
      </footer>
    </div>
  )
}

export default App
