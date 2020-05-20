import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {

	//repeated code copied

	render() {
		const{count, incrementCount} = this.props
		return(
			<div>
				<h2 onMouseOver={incrementCount}> Hovered {count} Times</h2>
			</div>
		);
	}
}

export default withCounter(HoverCounter);