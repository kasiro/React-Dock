import Icon from './Icon.js';

import menu from './images/menu.jpg';
import twi from './images/twi.webp';
import youtube from './images/youtube.webp';
import github from './images/github.webp';
import inst from './images/inst.webp';
import dis from './images/dis.webp';

let Dock = ({ tag }) => {
	return (
		<div className={tag + 'Dock'}>
			<Icon tag='Not' image={menu} action={function () {
				document.querySelector('.PanelMenu').classList.toggle('hide');
			}}/>
			<Icon tag={tag} image={inst} action={function () {
				console.log('instagram');
			}}/>
			<Icon tag={tag} image={twi} action={function () {
				console.log('twitter');
			}}/>
			<Icon tag={tag} image={youtube} action={function () {
				console.log('youtube');
			}}/>
			<Icon tag={tag} image={github} action={function () {
				console.log('github');
			}}/>
			<Icon tag={tag} image={dis} action={function () {
				console.log('discord');
			}}/>
			{/* <Icon tag={tag} image={dis} action={function () {
				console.log('discord2');
			}}/>
			<Icon tag={tag} image={dis} action={function () {
				console.log('discord3');
			}}/>
			<Icon tag={tag} image={dis} action={function () {
				console.log('discord4');
			}}/> */}
			{/* <Icon tag={tag} image={vk} action={function () {
				console.log('vk');
			}}/> */}
		</div>
	);
};
export default Dock;