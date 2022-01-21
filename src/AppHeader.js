import React, { Component } from "react";

export default class AppHeader extends Component {
	render() {
		return (
			<div>
				{this.props.title}={this.props.subject}
			</div>
		);
	}
}
