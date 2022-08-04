import _ from 'lodash';

const ImageIcon = ({ src, className, style, onClick }) => {
	try {
		return (
			<img
				onClick={onClick}
				src={require('@/../img/' + src)}
				className={_.cs('object-cover inline-block', className)}
				style={style}
			/>
		);
	} catch (e) {
		return null;
	}
};
export default ImageIcon;
