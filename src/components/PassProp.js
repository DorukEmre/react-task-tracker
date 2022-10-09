import PropTypes from 'prop-types'

const PassProp = (props) => {
  return (
    <>
      <h2 style={{ color: 'red', backgroundColor: 'blue' }}>{props.title}</h2>
      <h3 style={h3Style}>{props.key}</h3>
    </>
  )
}

PassProp.defaultProps = {
  key: 'value',
}

// Will alert in console if prop is not of correct type
PassProp.propTypes = {
  title: PropTypes.string.isRequired,
  key: PropTypes.number,
}

// CSS in JS
const h3Style = {
  color: 'blue',
  backgroundColor: 'red',
}

export default PassProp
