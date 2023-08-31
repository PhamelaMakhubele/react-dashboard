import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, onClick, onAdd}) => {

     const buttonStyle= {
        color:"#596e79",
        backgroundColor: '#dfd3c3',
        border:'none',
        width:'100px',
        height:"60px",
        //marginBottom: '70px'

    }
  return (
    <button onClick={onClick} style={buttonStyle} >{text}</button>
  )
}
Button.defaultProps={
    text: 'Add'
}

Button.propTypes={
  
    text: PropTypes.string,
    onClick:PropTypes.func
}

export default Button