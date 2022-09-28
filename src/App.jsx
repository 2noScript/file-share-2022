import classNames from 'classnames/bind';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import {FiSearch} from 'react-icons/fi';
import {QUICK_ACCESS, PREVIEW, RECENT_FILES} from './const';
import style from './app.module.css';
import randomColor from 'randomcolor';

const cx = classNames.bind(style);

function App() {
	return (
		<div
			className={cx(
				'bg-screen-primary h-screen w-full flex items-center justify-center'
			)}>
			<div
				className={cx(
					'bg-ct-primary max-w-[1224px] w-full h-[96vh] rounded-2xl',
					'overflow-hidden p-2 text-txt-primary'
				)}>
				<div className={cx('w-full h-full bg-content rounded-lg flex overflow-hidden')}>
					{/* sidebar */}
					<div className={cx('w-[124px]', 'sidebar-left')}>
						<SidebarLeft className={cx('bg-silebar w-[124px]', 'sidebar-left__ct')} />
					</div>
					<div className={cx(' px-8 pb-8 h-full overflow-y-scroll overflow-x-hidden')}>
						<header
							className={cx(
								' flex items-center justify-center py-8',
								'sticky top-0 left-0 bg-content z-50'
							)}>
							<div
								className={cx(
									'w-full bg-white h-10 rounded-md  ',
									'flex items-center drop-shadow-2xl'
								)}>
								<input
									type="text"
									placeholder="e.g. file.doc"
									className={cx(
										'grow h-full bg-transparent caret-black px-3 py-2 text-black ',
										'placeholder:font-normal text-sm'
									)}
								/>
								<div className={cx('flex items-center justify-center text-lg mr-3')}>
									<FiSearch />
								</div>
							</div>
						</header>

						{/* body */}
						<div className={cx('quick-access')}>
							<h1 className={cx('capitalize font-bold text-black text-2xl py-6')}>
								quick access
							</h1>
							<div className={cx('flex flex-wrap ml-[-32px]', 'quick-access__list')}>
								{QUICK_ACCESS.map((item, index) => {
									const {name, icon, color} = item;
									return (
										<div
											key={index}
											className={cx(
												'flex flex-col items-center cursor-pointer',
												'quick-access-item'
											)}>
											<div
												className={cx(
													'flex items-center justify-center p-5 text-4xl',
													'rounded-xl text-white'
												)}
												style={{backgroundColor: `${color}`}}>
												{icon}
											</div>
											<div className={cx('capitalize text-xs font-medium mt-2')}>
												{name}
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className={cx('preview')}>
							<h1
								className={cx('capitalize font-bold text-black text-2xl py-6 relative')}>
								preview
								<div
									className={cx(
										'absolute top-0 right-0 h-full flex items-center text-sm font-normal text-violet-400'
									)}>
									View in folders
								</div>
							</h1>
							<div className={cx('flex', 'preview-list')}>
								{PREVIEW.map((item, index) => {
									const {name, img, capacity, time} = item;
									return (
										<div
											key={index}
											className={cx(
												'max-h-[240px] rounded-xl overflow-hidden relative drop-shadow-2xl cursor-pointer',
												'preview-item'
											)}>
											<img
												src={img}
												alt={name}
												className={cx(
													'w-full h-full object-cover grayscale-0',
													'preview-item__image'
												)}
											/>
											<div className={cx('absolute top-0 left-0 w-full h-full  p-3')}>
												<div className={cx('flex justify-end')}>
													<div
														className={cx(
															'flex items-center text-white',
															'backdrop-sepia-0 bg-slate-500/30 px-3 py-1 rounded-2xl font-medium text-xs'
														)}>
														{time}
													</div>
												</div>
												<div className={cx('absolute bottom-3 left-3')}>
													<div className={cx('text-white')}>{name}</div>
													<div className={cx('font-medium text-sm text-slate-300 mt-1')}>
														{capacity}
														<span className={cx(' uppercase')}>mb</span>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className={cx('recent-files')}>
							<h1
								className={cx('capitalize font-bold text-black text-2xl py-6 relative')}>
								fecent files
								<div
									className={cx(
										'absolute top-0 right-0 h-full flex items-center text-sm text-violet-400 font-normal'
									)}>
									View all files
								</div>
							</h1>
							<div className={cx(' rounded-xl bg-white drop-shadow-md p-4')}>
								<div className={cx('flex items-center capitalize')}>
									<div className={cx(' truncate w-[240px] grow')}>name</div>
									<div className={cx('w-[100px] truncate')}>size</div>
									<div className={cx('w-[140px] truncate')}>last modified</div>
									<div className={cx('w-[90px] truncate')}>action</div>
								</div>
								<div className={cx('mt-4')}>
									{RECENT_FILES.map((item, index) => {
										const {name, size, lastModified, action, type} = item;
										return (
											<div
												className={cx('flex items-center capitalize text-black text-sm')}
												key={index}>
												<div className={cx(' grow flex items-center py-2')}>
													<div
														style={{
															color: `${randomColor({
																luminosity: 'random',
																hue: 'random',
															})}`,
														}}
														className={cx(
															'flex items-center justify-center w-6 h-6 rounded bg-slate-200 mr-2',
															'text-[8px] uppercase font-semibold '
														)}>
														{type}
													</div>
													<div className={cx('truncate  w-[160px]')}>{name}</div>
												</div>
												<div className={cx('w-[100px] truncate')}>{size}</div>
												<div className={cx('w-[140px]  truncate')}>{lastModified}</div>
												<div className={cx('w-[90px]  flex items-center truncate')}>
													{action}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<div className={cx('w-[280px]', 'sidebar-right')}>
						<SidebarRight className={cx('w-[280px]')} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
