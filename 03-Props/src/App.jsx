import Card from "./Components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card username='Harish Yadav' age={21} img='https://images.unsplash.com/photo-1764484636506-cf6398999671?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D' />
      <Card username='Sarthak Sharma' age={28} img='https://images.unsplash.com/photo-1766548729715-9471973631f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D' />
      <Card username='Aditya Verma' age={19} img='https://images.unsplash.com/photo-1767551726035-64844f5c4a5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App;