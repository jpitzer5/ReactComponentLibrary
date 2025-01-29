import Button from "./components/button/Button"

export default function App() {
  return (
    <>
      <h1>React Component Library</h1>
      <h2>Buttons</h2>
      <p>Can give the button a size property of "sm" or "lg" (e.g. {`<Button size="sm">Small</Button>`}) to get smaller/larger buttons</p>
      <Button size="sm" >Small</Button>
      <Button >Normal</Button>
      <Button size="lg">Large</Button>
      <p>Can give the button a variant property of "success", "warning", or "danger" (e.g. {`<Button variant="success">Success</Button>`}) to get different colored buttons</p>
      <Button variant="success" >Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
    </>
  )
}
