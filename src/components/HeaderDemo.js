import Button from './Button'
import PassProp from './PassProp'
import Destruct from './Destruct'

const Header = () => {
  const onClick = (event) => {
    console.log(event.type, 'at', event.pageX, event.pageY)
  }
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <Button color="green" text="Add" onClick={onClick} />
      <Button color="blue" text="This is a blue button" />
      <Button text="Default color" />
      <PassProp title="title is passed as a prop" />
      <Destruct />
      <p>Test 1</p>
      <p>Test {1 + 1}</p>
    </header>
  )
}

export default Header
