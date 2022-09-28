import classNames from 'classnames/bind';
import {FiMoreHorizontal} from 'react-icons/fi';
import {TODAY, YESTERDAY, FILE_RECEIVED} from './const';
import {DownloadList} from './components';
import styles from './SidebarRight.module.css';
const cx = classNames.bind(styles);

function SidebarRight({className}) {
	return (
		<div
			className={cx(
				'flex flex-col p-8 h-full overflow-hidden overflow-x-hide overflow-y-scroll',
				{
					[className]: className,
				}
			)}>
			<h1 className={cx('relative text-black h-10 flex items-center mb-8')}>
				Downloads
				<div
					className={cx(
						'absolute top-0 right-0 h-full flex items-center justify-center',
						'text-2xl font-bold'
					)}>
					<FiMoreHorizontal />
				</div>
			</h1>

			<div className={cx('mt-2')}>
				<DownloadList title={'today'} data={TODAY} />
			</div>
			<div className={cx('mt-8')}>
				<DownloadList title={'yesterday'} data={YESTERDAY} />
			</div>
			<div className={cx('mt-8')}>
				<h1 className={cx(' text-black h-10 flex items-center mb-4')}>File Received</h1>
				<div className={cx('flex  h-[140px]')}>
					<div className={cx('h-full px-[1px]', 'time-line')}>{''}</div>
					<div className={cx('flex flex-col justify-around')}>
						<div className={cx('px-4 text-xs font-semibold')}>15:30 </div>
						<div className={cx('flex items-center ml-2')}>
							{FILE_RECEIVED.map((item, index) => {
								const {name, src} = item;
								return (
									<div
										key={index}
										className={cx('ml-1  rounded-xl aspect-[5/4] overflow-hidden')}>
										<img src={src} alt={name} className={cx('h-full w-full')} />
									</div>
								);
							})}
						</div>
						<div className={cx('text-xs px-2')}>Received 3 images total 50.3 MB</div>
						<div className={cx('px-4 text-xs font-semibold')}>18:30</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SidebarRight;
