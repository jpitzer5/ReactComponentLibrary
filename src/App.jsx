import Button from "./components/button/Button"

export default function App() {
  return (
    <>
      <h1>React Component Library</h1>
      <h2>Buttons</h2>
      <p>Can use the class names "sm" and "lg" to get smaller/larger buttons</p>
      <Button size="sm" >Small</Button>
      <Button >Normal</Button>
      <Button size="lg">Large</Button>
    </>
  )
}
