function App() {
  const name = "ABC XYZ"
  const rollNumber = 20
  const address = "xyz nagar abc"

  return (
    <div style={{ background: '#D3D3D3', fontFamily: 'cursive', fontSize: '20px' }}>
      <h1 style={{ color: 'red' }}>Name: {name}</h1>
      <div style={{ background: '#F5F5F5', color: 'blue' }}>
        <h2>Roll no.: {rollNumber}</h2>
        <h3>Address: {address}</h3>
      </div>
      <p style={{ color: 'purple' }}>Calculations: 2 + 2 = {2 + 2} and 48 * 24 = {48 * 24}</p>
    </div>
  )
}

export default App