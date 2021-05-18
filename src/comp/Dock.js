import Icon from './Icon.js';

// import im_1 from './images/1.jpg';
// import im_2 from './images/2.jpg';
// import im_3 from './images/3.jpg';
import im_4 from './images/4.jpg';
import twi from './images/twi.webp';
import youtube from './images/youtube.webp';
import github from './images/github.webp';
import inst from './images/inst.webp';
import dis from './images/dis.webp';
// import vk from './images/vk.jpg';

let Dock = ({ tag }) => {
	return (
		<div className={tag + 'Dock'}>
			<Icon tag={tag} image={im_4} action={function () {
				console.log('menu');
			}}/>
			<Icon tag={tag} image={inst} action={function () {
				console.log('inst');
			}}/>
			<Icon tag={tag} image={twi} action={function () {
				console.log('twi');
			}}/>
			<Icon tag={tag} image={youtube} action={function () {
				console.log('youtube');
			}}/>
			<Icon tag={tag} image={github} action={function () {
				console.log('github');
			}}/>
			<Icon tag={tag} image={dis} action={function () {
				console.log('dis');
			}}/>
			{/* <Icon tag={tag} image={vk} action={function () {
				console.log('vk');
			}}/> */}
		</div>
	);
};
export default Dock;