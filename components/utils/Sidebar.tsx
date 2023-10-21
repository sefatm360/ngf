import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import CatagoryPhone from './CatagoryPhone';

const Sidebar = () => {
	// const { fetching } = useProductContext();
	const [category, setCategory] = useState('');
	const [menu, setMenu] = useState('');
	const { t } = useTranslation(['products', 'home']);
	const router = useRouter();
	const currentRoute = router.query.dynamicCategory;

	return (
		<>
			<div className="category-section category-wrapper">
				<div className=" ">
					<h4 className="mb-4 d-none d-md-none d-lg-block text-dark fw-bold">
						{t('category')}
					</h4>
					<div className="d-none d-md-none d-lg-block">
						<ul className="ps-0 categories  ">
							<li>
								<Link href="/products/recent-product">
									<a
										className={
											currentRoute === 'recent-product' ||
											router.pathname === '/products'
												? 'active-category'
												: ''
										}
									>
										{t('home:recentProducts')}
									</a>
								</Link>
							</li>

							{/* <li>
								<Link href="/products/Food">
									<a
										className={currentRoute == 'Food' ? 'active-category' : ''}
									>
										{t('foodItems')}
									</a>
								</Link>
							</li> */}

							<li>
								<div>
									<div
										onClick={() => {
											category === 'food_items'
												? setCategory('')
												: setCategory('food_items');
										}}
									>
										<div className="d-flex justify-content-between">
											<div className="pointer main-category">
												{t('foodItems')}
											</div>
											<div>
												{category === 'food_items' ? (
													<IoIosArrowDown className="pointer" />
												) : (
													<IoIosArrowForward className="pointer" />
												)}
											</div>
										</div>
									</div>
									{category === 'food_items' && (
										<ul className="mt-2">
											<li>
												<Link href="/products/Food">
													<a
														className={
															currentRoute === 'Food' ? 'active-category' : ''
														}
													>
														{t('allFoodItems')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/CakeAndPudding">
													<a
														className={
															currentRoute === 'CakeAndPudding'
																? 'active-category'
																: ''
														}
													>
														{t('cakeAndPudding')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/FishCurry">
													<a
														className={
															currentRoute === 'FishCurry'
																? 'active-category'
																: ''
														}
													>
														{t('fishCurry')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/MeatCurry">
													<a
														className={
															currentRoute === 'MeatCurry'
																? 'active-category'
																: ''
														}
													>
														{t('meatCurry')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/Biriyani">
													<a
														className={
															currentRoute === 'Biriyani'
																? 'active-category'
																: ''
														}
													>
														{t('biriyani')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/Dessert">
													<a
														className={
															currentRoute === 'Dessert'
																? 'active-category'
																: ''
														}
													>
														{t('dessert')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/Pitha">
													<a
														className={
															currentRoute === 'Pitha' ? 'active-category' : ''
														}
													>
														{t('pitha')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/VortaVaji">
													<a
														className={
															currentRoute === 'VortaVaji'
																? 'active-category'
																: ''
														}
													>
														{t('bhortaVaji')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/Pickle">
													<a
														className={
															currentRoute === 'Pickle' ? 'active-category' : ''
														}
													>
														{t('pickle')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/OtherFood">
													<a
														className={
															currentRoute === 'OtherFood'
																? 'active-category'
																: ''
														}
													>
														{t('other')}
													</a>
												</Link>
											</li>
										</ul>
									)}
								</div>
							</li>
							<li>
								<div>
									<div
										onClick={() => {
											category === 'Womans Fashon'
												? setCategory('')
												: setCategory('Womans Fashon');
										}}
									>
										<div className="d-flex justify-content-between">
											<div className="pointer main-category">
												{t('womanFashion')}
											</div>
											<div>
												{category === 'Womans Fashon' ? (
													<IoIosArrowDown className="pointer" />
												) : (
													<IoIosArrowForward className="pointer" />
												)}
											</div>
										</div>
									</div>
									{category === 'Womans Fashon' && (
										<ul className="mt-2">
											<li>
												<Link href="/products/ShareeAndBlouse">
													<a
														className={
															currentRoute == 'ShareeAndBlouse'
																? 'active-category'
																: ''
														}
													>
														{t('shareeAndBlouse')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/SalwarKameez">
													<a
														className={
															currentRoute == 'SalwarKameez'
																? 'active-category'
																: ''
														}
													>
														{t('salwarKameez')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/KurtiAndPants">
													<a
														className={
															currentRoute == 'KurtiAndPants'
																? 'active-category'
																: ''
														}
													>
														{t('singleKurtiAndPant')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/LadiesShoes">
													<a
														className={
															currentRoute == 'LadiesShoes'
																? 'active-category'
																: ''
														}
													>
														{t('ladiesShoes')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/Jewellery">
													<a
														className={
															currentRoute == 'Jewellery'
																? 'active-category'
																: ''
														}
													>
														{t('jewellery')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/CoupleCollection">
													<a
														className={
															currentRoute == 'CoupleCollection'
																? 'active-category'
																: ''
														}
													>
														{t('cuppleCollection')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/HijabBorkhaGown">
													<a
														className={
															currentRoute == 'HijabBorkhaGown'
																? 'active-category'
																: ''
														}
													>
														{t('hijabBorkhaAndGown')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/FashionAccessories">
													<a
														className={
															currentRoute == 'FashionAccessories'
																? 'active-category'
																: ''
														}
													>
														{t('fashionAccessories')}
													</a>
												</Link>
											</li>
										</ul>
									)}
								</div>
							</li>

							<li>
								<div>
									<div
										onClick={() => {
											category === 'mens fashon'
												? setCategory('')
												: setCategory('mens fashon');
										}}
									>
										<div className="d-flex justify-content-between">
											<div className="pointer main-category">
												{t('mensFashion')}
											</div>
											<div>
												{category === 'mens fashon' ? (
													<IoIosArrowDown className="pointer" />
												) : (
													<IoIosArrowForward className="pointer" />
												)}
											</div>
										</div>
									</div>
									{category === 'mens fashon' && (
										<ul className="mt-2">
											<li>
												<Link href="/products/Shirt">
													<a
														className={
															currentRoute == 'Shirt' ? 'active-category' : ''
														}
													>
														{t('shirt')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/Pant">
													<a
														className={
															currentRoute == 'Pant' ? 'active-category' : ''
														}
													>
														{t('pant')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/Panjabi">
													<a
														className={
															currentRoute == 'Panjabi' ? 'active-category' : ''
														}
													>
														{t('panjabi')}
													</a>
												</Link>
											</li>
										</ul>
									)}
								</div>
							</li>
							<li>
								<div>
									<div
										onClick={() => {
											category === 'health beauty'
												? setCategory('')
												: setCategory('health beauty');
										}}
									>
										<div className="d-flex justify-content-between">
											<div className="pointer main-category">
												{t('healthAndBeauty')}
											</div>
											<div>
												{category === 'health beauty' ? (
													<IoIosArrowDown className="pointer" />
												) : (
													<IoIosArrowForward className="pointer" />
												)}
											</div>
										</div>
									</div>
									{category === 'health beauty' && (
										<ul className="mt-2">
											<li>
												<Link href="/products/SkinCare">
													<a
														className={
															currentRoute == 'SkinCare'
																? 'active-category'
																: ''
														}
													>
														{t('skinCare')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/HairCare">
													<a
														className={
															currentRoute == 'HairCare'
																? 'active-category'
																: ''
														}
													>
														{t('hairCare')}
													</a>
												</Link>
											</li>
											<li>
												<Link href="/products/MakeupItems">
													<a
														className={
															currentRoute == 'MakeupItems'
																? 'active-category'
																: ''
														}
													>
														{t('makeupItems')}
													</a>
												</Link>
											</li>
										</ul>
									)}
								</div>
							</li>

							<li>
								<Link href="/products/BabyProducts">
									<a
										className={
											currentRoute == 'BabyProducts' ? 'active-category' : ''
										}
									>
										{t('home:babyProducts')}
									</a>
								</Link>
							</li>
							<li>
								<Link href="/products/HomeDecor">
									<a
										className={
											currentRoute == 'HomeDecor' ? 'active-category' : ''
										}
									>
										{t('home:homeDecor')}
									</a>
								</Link>
							</li>

							<li>
								<Link href="/products/Accessories">
									<a
										className={
											currentRoute == 'Accessories' ? 'active-category' : ''
										}
									>
										{t('accessories')}
									</a>
								</Link>
							</li>
							<li>
								<Link href="/products/Stationary">
									<a
										className={
											currentRoute == 'Stationary' ? 'active-category' : ''
										}
									>
										{t('stationary')}
									</a>
								</Link>
							</li>
							<li>
								<Link href="/products/Grocery">
									<a
										className={
											currentRoute == 'Grocery' ? 'active-category' : ''
										}
									>
										{t('grocery')}
									</a>
								</Link>
							</li>
							<li>
								<Link href="/products/Toys">
									<a
										className={currentRoute == 'Toys' ? 'active-category' : ''}
									>
										{t('toys')}
									</a>
								</Link>
							</li>

							<li>
								<Link href="/products/Others">
									<a
										className={
											currentRoute == 'Others' ? 'active-category' : ''
										}
									>
										{t('others')}
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* category for phone  */}

				<div className="d-md-block d-lg-none phone-category d-block">
					<CatagoryPhone category={category} setCategory={setCategory} />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
