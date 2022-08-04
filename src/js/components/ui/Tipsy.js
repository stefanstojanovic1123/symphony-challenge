import { Component } from 'react';

export default class Tipsy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			style: null,
			show: false,
		};

		this.setRootRef = ref => (this._root = ref);
		this.setTooltipRef = ref => (this._tooltip = ref);

		this.handleMouseEnter = this.onMouseEnter.bind(this);
		this.handleMouseLeave = this.onMouseLeave.bind(this);
	}
	onMouseEnter(e) {
		e.persist();

		// return early if tooltip is already shown
		if (this.state.style !== null) {
			return;
		}

		// update position
		this.setState(
			{
				show: true,
			},
			() => this.updatePosition(this._root || e.target, true)
		);
	}
	onMouseLeave() {
		this.setState({
			style: null,
			show: false,
		});
	}
	updatePosition(target, initial) {
		const el = this._tooltip;
		if (el === null) {
			return;
		}

		let child = target.firstChild;
		while (child) {
			if (child.getBoundingClientRect) {
				target = child;
				break;
			}
			child = child.firstChild;
		}

		const targetOffset = offset(
			target.getBoundingClientRect(),
			el.offsetParent.getBoundingClientRect()
		);

		const style = {};
		const { placement } = this.props;
		if (placement == 'top') {
			style.top = targetOffset.top - el.offsetHeight + 'px';
			style.left = targetOffset.left + (target.offsetWidth - el.offsetWidth) / 2 + 'px';
		} else if (placement == 'bottom') {
			style.top = targetOffset.top + target.offsetHeight + 'px';
			style.left = targetOffset.left + (target.offsetWidth - el.offsetWidth) / 2 + 'px';
		} else if (placement == 'right') {
			style.top = targetOffset.top + (target.offsetHeight - el.offsetHeight) / 2 + 'px';
			style.left = targetOffset.left + target.offsetWidth + 'px';
		} else {
			style.top = targetOffset.top + (target.offsetHeight - el.offsetHeight) / 2 + 'px';
			style.left = targetOffset.left - el.offsetWidth + 'px';
		}

		if (initial) {
			// the browser may adjust the height and width to fit text based on
			// the position, so we have to update position again to re-adjust
			style.visibility = 'hidden';
			this.setState({ style }, () => this.updatePosition(target));
			return;
		}

		this.setState({ style });
	}
	render() {
		return (
			<div
				ref={this.setRootRef}
				className={
					(this.props.inlineWrapper ? 'Tipsy-inline-wrapper' : 'Tipsy-inlineblock-wrapper') +
					(this.props.rootClassName ? ' ' + this.props.rootClassName : '')
				}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.props.children}
				{this.state.show && (
					<div
						ref={this.setTooltipRef}
						className={
							'Tipsy ' + this.props.placement + (this.props.tipsyClassName ? ' ' + this.props.tipsyClassName : '')
						}
						style={this.state.style}
					>
						<div className="Tipsy-arrow" />
						<div
							className={'Tipsy-inner unselectable' + (this.props.className ? ' ' + this.props.className : '')}
						>
							{this.props.content}
						</div>
					</div>
				)}
			</div>
		);
	}
}

function offset(el, op) {
	return {
		top: el.top - op.top,
		left: el.left - op.left,
	};
}
