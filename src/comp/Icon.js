
export default function Icon({ tag, image, action }){
	return (
		<div className={tag + 'Icon'} onClick={() => action()}>
			<img src={image} alt="img"/>
		</div>
	);
};