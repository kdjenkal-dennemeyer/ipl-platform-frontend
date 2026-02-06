import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to EPV</h1>
        <p>IPL Platform - EPV Application</p>
        <p style={{ color: '#888' }}>Running on port 3004</p>
      </div>
    </div>
  )
}

export default App
