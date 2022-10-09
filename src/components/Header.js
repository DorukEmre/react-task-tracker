import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (event) => {
  //   console.log(event.type, 'at', event.pageX, event.pageY)
  // }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
