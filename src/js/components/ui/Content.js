import { Component } from 'react';

export default class Content extends Component {
	shouldComponentUpdate(nextProps) {
		return this.props.children !== nextProps.children || this.props.className !== nextProps.className;
	}
	render() {
		const { children, className } = this.props;
		return (
			<div id="content">
				<div className="content-bg-image" />
				<div className={'inner-wrapper pb-4' + (className ? ' ' + className : '')}>{children}</div>
			</div>
		);
	}
}
