import classNames from 'classnames/bind';
import randomColor from 'randomcolor';
const cx = classNames.bind();

function DownloadItem({data}) {
	const {icon, name, size} = data;
	return (
		<div
			className={cx(
				'flex items-center bg-white rounded-xl py-1 px-2 mt-3',
				'cursor-pointer'
			)}>
			<div
				className={cx('text-lg p-[6px] rounded-full  text-white')}
				style={{backgroundColor: `${randomColor()}`}}>
				{icon}
			</div>
			<div className={cx('flex flex-col justify-center ml-4')}>
				<div className={cx('text-sm text-black')}>{name}</div>
				<div className={cx('text-[10px]')}>{size}</div>
			</div>
		</div>
	);
}

function DownloadList({title, data}) {
	return (
		<div className={cx('')}>
			<h1 className={cx('capitalize text-sm')}>{title}</h1>
			<div className={cx('mt-4')}>
				{data?.map((item, index) => {
					return <DownloadItem key={index} data={item} />;
				})}
			</div>
		</div>
	);
}

export {DownloadList};
