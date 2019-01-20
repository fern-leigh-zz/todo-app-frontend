import React from 'react';

class GreenButton extends React.Component{

    render() {
        return (
          <button style={styles.add} type="button" onClick={this.props.clickHandler}>{this.props.label}</button>
        )
    }
}

const styles = {
    add : {
       backgroundColor: 'darkgreen',
       color: 'rgba(240, 241, 229, 0.8)',
       borderRadius: '1em',
       paddingLeft: '0.5em',
       paddingRight: '0.5em',
       fontFamily: 'Garamond',
       fontSize: '0.7em',
    
    }

};

export default GreenButton;