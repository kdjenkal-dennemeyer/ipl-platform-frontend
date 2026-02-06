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
        <h1>Welcome to Recordals</h1>
        <p>IPL Platform - Recordals Application</p>
        <p style={{ color: '#888' }}>Running on port 3003</p>
      </div>
    </div>
  )
}

export default App
