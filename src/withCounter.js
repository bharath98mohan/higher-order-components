import React from 'react';

const withCounter = (WrappedComponent) => {
	//start of repeated code
	class withCounter extends React.Component {
		
		constructor(props){
		super(props)

		this.state = {
			count: 0
		}
	}

	incrementCount = () => {
		this.setState(prevState => {
			return {count: prevState.count + 1}
		})
	}

	//end of repeated code
		render() {
			return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
		}
	}
	return withCounter
}

export default withCounter;