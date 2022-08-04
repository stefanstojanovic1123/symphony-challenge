import { forwardRef } from 'react';

let checkboxCounter = 1;

const Checkbox = forwardRef((props, ref) => {
	let id = props.id;
	if (props.label && !id) {
		id = '_checkbox' + checkboxCounter++;
	}

	return (
		<div className={'checkbox flex items-center ' + props.className}>
			<label className="" htmlFor={id}>
				{props.label}
			</label>
			<label className={'checkbox-div ml-4 ' + (props.checked ? 'checked' : '')} htmlFor={id} />
			<input
				id={id}
				type="checkbox"
				onChange={props.onChange}
				checked={props.checked}
				defaultChecked={props.defaultChecked}
				ref={ref}
				disabled={props.disabled}
				readOnly={props.readOnly}
			/>
		</div>
	);
});
export default Checkbox;
