import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {

	//repeated code copied

	render() {
		const{count, incrementCount} = this.props
		return(
		<div>
			<button onClick={incrementCount}> Clicked {count} times</button>
		</div>
		);
	}
}

export default withCounter(ClickCounter);