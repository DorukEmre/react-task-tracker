import Button from "./Button"

const Header = () => {
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <Button color='green' text='Add' />
      <Button color='blue' text='This is a blue button' />
      <Button text='Default color' />
    </header>
  )
}

export default Header