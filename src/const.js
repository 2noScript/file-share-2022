import {BiImageAlt, BiPlay} from 'react-icons/bi';
import {FiMusic} from 'react-icons/fi';
import {BsTextLeft, BsArrowDownCircle} from 'react-icons/bs';
import {IoIosApps} from 'react-icons/io';
import {preview1, preview2, preview3} from './asset/images/preview';

const QUICK_ACCESS = [
	{
		icon: <BiImageAlt />,
		name: 'images',
		color: '#6166FE',
	},
	{
		icon: <FiMusic />,
		name: 'music',
		color: '#6166FE',
	},
	{
		icon: <BiPlay />,
		name: 'video',
		color: '#3275F7',
	},
	{
		icon: <BsTextLeft />,
		name: 'docs',
		color: '#3275F7',
	},
	{
		icon: <IoIosApps />,
		name: 'apps',
		color: '#22244A',
	},
	{
		icon: <BsArrowDownCircle />,
		name: 'download',
		color: '#22244A',
	},
];

const PREVIEW = [
	{
		name: 'Happiness & Tears',
		img: preview1,
		capacity: 45.5,
		time: '10:32',
	},
	{
		name: 'High Hopes',
		img: preview2,
		capacity: 50,
		time: '02:35',
	},
	{
		name: 'Imaginery you',
		img: preview3,
		capacity: 210.2,
		time: '04:15',
	},
];

const RECENT_FILES = [
	{
		name: 'Brandenburg.pdf',
		size: '42 MB',
		lastModified: 'Aug 26, 2020',
		action: '...',
		type: 'pdf',
	},
	{
		name: 'TheLionsRoar.jpg',
		size: '500 KB',
		lastModified: 'Aug 26, 2020',
		action: '...',
		type: 'jpg',
	},
	{
		name: 'TheLionsRoar.jpg',
		size: '500 KB',
		lastModified: 'Aug 26, 2020',
		action: '...',
		type: 'jpg',
	},
	{
		name: 'TheLionsRoar.jpg',
		size: '500 KB',
		lastModified: 'Aug 26, 2020',
		action: '...',
		type: 'jpg',
	},
	{
		name: 'TheLionsRoar.jpg',
		size: '500 KB',
		lastModified: 'Aug 26, 2020',
		action: '...',
		type: 'jpg',
	},
];
export {QUICK_ACCESS, PREVIEW, RECENT_FILES};
