import classNames from 'classnames/bind';
import {BiGridAlt} from 'react-icons/bi';
import {AiOutlineFolder, AiOutlineSetting} from 'react-icons/ai';
import {HiOutlineServer} from 'react-icons/hi';
import {FiLogOut} from 'react-icons/fi';
const cx = classNames.bind();

const SIDEBAR_ICON = [
	{
		id: 1,
		icon: <BiGridAlt />,
	},
	{
		id: 2,
		icon: <AiOutlineFolder />,
	},
	{
		id: 3,
		icon: <HiOutlineServer />,
	},
	{
		id: 4,
		icon: <AiOutlineSetting />,
	},
];

function SidebarLeft({className}) {
	return (
		<div
			className={cx('flex flex-col items-center py-8 h-full', {
				[className]: className,
			})}>
			<h1 className={cx('text-black font-bold h-10 flex items-center')}>MyDocs</h1>
			<ul className={cx('flex flex-col items-center grow mt-8')}>
				{SIDEBAR_ICON.map(item => {
					const {id, icon} = item;
					return (
						<li
							key={id}
							className={
								id === 1
									? cx('text-[28px] cursor-pointer py-5 text-black')
									: cx('text-[28px] cursor-pointer py-5')
							}>
							{icon}
						</li>
					);
				})}
			</ul>
			<div className={cx('text-[28px] cursor-pointer')}>
				<FiLogOut />
			</div>
		</div>
	);
}

export default SidebarLeft;
