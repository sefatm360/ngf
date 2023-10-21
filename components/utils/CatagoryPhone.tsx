import React from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';

import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CatagoryPhone = ({ category, setCategory }: any) => {
	const { t } = useTranslation(['products', 'home']);
	const [showIcon, setShowIcon] = useState(false);
	const [menu, setMenu] = useState('');
	const router = useRouter();
	const currentRoute = router.query.dynamicCategory;

	function CustomToggle({ children, eventKey }: any) {
		const decoratedOnClick = useAccordionButton(eventKey, () =>
			setShowIcon(true)
		);

		return (
			<div>
				<h6 onClick={decoratedOnClick}>{children}</h6>
			</div>
		);
	}
	const handelClick = () => {
		setShowIcon(!showIcon);
	};

	return (
		<div>
			<Accordion defaultActiveKey="0">
				<Card>
					<Card.Header onClick={handelClick}>
						<CustomToggle eventKey="0">
							<div className="d-flex justify-content-between">
								<div>
									<span className="show-category-btn">{t('showcategory')}</span>
								</div>
								<div>
									{showIcon ? <IoIosArrowDown /> : <IoIosArrowForward />}
								</div>
							</div>
						</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<ul className="ps-0 categories  ">
								{/* <li>
                  <CustomToggle eventKey='0'>
                    <Link href='/products/recent-product'>
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
                  </CustomToggle>
                </li> */}

								{/* <li>
                  <CustomToggle eventKey='0'>
                    <Link href='/products/Food'>
                      <a
                        className={
                          currentRoute == 'Food' ? 'active-category' : ''
                        }>
                        {t('foodItems')}
                      </a>
                    </Link>
                  </CustomToggle>
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
																currentRoute === 'Pitha'
																	? 'active-category'
																	: ''
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
																currentRoute === 'Pickle'
																	? 'active-category'
																	: ''
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
											<div className="d-flex  justify-content-between">
												<div className="pointer main-category">
													{t('womanFashion')}{' '}
												</div>
												<div>
													{category === 'Womans Fashon' ? (
														<IoIosArrowDown />
													) : (
														<IoIosArrowForward />
													)}
												</div>
											</div>
										</div>
										{category === 'Womans Fashon' && (
											<ul className="mt-2">
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
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
														<IoIosArrowDown />
													) : (
														<IoIosArrowForward />
													)}
												</div>
											</div>
										</div>
										{category === 'mens fashon' && (
											<ul className="mt-2">
												<li>
													<CustomToggle eventKey="0">
														<Link href="/products/Shirt">
															<a
																className={
																	currentRoute == 'Shirt'
																		? 'active-category'
																		: ''
																}
															>
																{t('shirt')}
															</a>
														</Link>
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
														<Link href="/products/Pant">
															<a
																className={
																	currentRoute == 'Pant'
																		? 'active-category'
																		: ''
																}
															>
																{t('pant')}
															</a>
														</Link>
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
														<Link href="/products/Panjabi">
															<a
																className={
																	currentRoute == 'Panjabi'
																		? 'active-category'
																		: ''
																}
															>
																{t('panjabi')}
															</a>
														</Link>
													</CustomToggle>
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
														<IoIosArrowDown />
													) : (
														<IoIosArrowForward />
													)}
												</div>
											</div>
										</div>
										{category === 'health beauty' && (
											<ul className="mt-2">
												<li>
													<CustomToggle eventKey="0">
														<Link href="/products/SkinCare">
															<a
																className={
																	currentRoute == 'SkinCare'
																		? 'active-category'
																		: ''
																}
															>
																{t('skilCare')}
															</a>
														</Link>
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
												<li>
													<CustomToggle eventKey="0">
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
													</CustomToggle>
												</li>
											</ul>
										)}
									</div>
								</li>

								<li>
									<CustomToggle eventKey="0">
										<Link href="/products/BabyProducts">
											<a
												className={
													currentRoute == 'BabyProducts'
														? 'active-category'
														: ''
												}
											>
												{t('home:babyProducts')}
											</a>
										</Link>
									</CustomToggle>
								</li>
								<li>
									<CustomToggle eventKey="0">
										<Link href="/products/HomeDecor">
											<a
												className={
													currentRoute == 'HomeDecor' ? 'active-category' : ''
												}
											>
												{t('home:homeDecor')}
											</a>
										</Link>
									</CustomToggle>
								</li>

								<li>
									<CustomToggle eventKey="0">
										<Link href="/products/Accessories">
											<a
												className={
													currentRoute == 'Accessories' ? 'active-category' : ''
												}
											>
												{t('accessories')}
											</a>
										</Link>
									</CustomToggle>
								</li>
								<li>
									<CustomToggle eventKey="0">
										<Link href="/products/Stationary">
											<a
												className={
													currentRoute == 'Stationary' ? 'active-category' : ''
												}
											>
												{t('stationary')}
											</a>
										</Link>
									</CustomToggle>
								</li>
								<li>
									<CustomToggle eventKey="0">
										<Link href="/products/Grocery">
											<a
												className={
													currentRoute == 'Grocery' ? 'active-category' : ''
												}
											>
												{t('grocery')}
											</a>
										</Link>
									</CustomToggle>
								</li>
								<li>
									<CustomToggle eventKey="0">
										<Link href="/products/Toys">
											<a
												className={
													currentRoute == 'Toys' ? 'active-category' : ''
												}
											>
												{t('toys')}
											</a>
										</Link>
									</CustomToggle>
								</li>

								<li>
									<CustomToggle eventKey="0">
										<Link href="/products/Others">
											<a
												className={
													currentRoute == 'Others' ? 'active-category' : ''
												}
											>
												{t('others')}
											</a>
										</Link>
									</CustomToggle>
								</li>
							</ul>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			{/* <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>{t('showcategory')}</Accordion.Header>
          <Accordion.Body>
            <ul className='ps-0 categories  '>
              <li>
                <Link
                  to='/products/recent-product'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('home:recentProducts')}
                </Link>
              </li>
              <li>
                <Link
                  to='/products/food-items'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('foodItems')}
                </Link>
              </li>
              <li>
                <div>
                  <div
                    onClick={() => {
                      category === 'Womans Fashon'
                        ? setCategory('')
                        : setCategory('Womans Fashon');
                      setShow((prev) => !prev);
                    }}
                  >
                    <div className='d-flex  justify-content-between'>
                      <div className='pointer'> {t('womanFashon')} </div>
                      <div>
                        {category === 'Womans Fashon' ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </div>
                  </div>
                  {category === 'Womans Fashon' && (
                    <ul>
                      <li>
                        <Link
                          to='/products/saree-blouse'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('shareeAndBlouse')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/salwar-kameez'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('salwarKameez')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/kurti-pant'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('singleKurtiAndPant')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/Ladies-Shoes'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('ladiesShoes')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/jewellery'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('jewellery')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/couple-set'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('cuppleCollection')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/hijab-borkha-gown'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('hijabBorkhaAndGown')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/fashion-accessories'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('fashionAccessories')}
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
                      setShow((prev) => !prev);
                    }}
                  >
                    <div className='d-flex justify-content-between'>
                      <div className='pointer'> {t('mensFashon')}</div>
                      <div>
                        {category === 'mens fashon' ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </div>
                  </div>
                  {category === 'mens fashon' && (
                    <ul>
                      <li>
                        <Link
                          to='/products/shirt'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('shirt')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/pant'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('pant')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/Panjabi'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('panjabi')}
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
                      setShow((prev) => !prev);
                    }}
                  >
                    <div className='d-flex justify-content-between'>
                      <div className='pointer'> {t('healthAndBeauty')}</div>
                      <div>
                        {category === 'health beauty' ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </div>
                  </div>
                  {category === 'health beauty' && (
                    <ul>
                      <li>
                        <Link
                          to='/products/skin-care'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('skilCare')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/hair-care'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('hairCare')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/products/makeup-item'
                          className={({ isActive }) =>
                            isActive ? 'active-category' : ''
                          }
                        >
                          {t('makeupItems')}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>

              <li>
                <Link
                  to='/products/baby-products'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('home:babyProducts')}
                </Link>
              </li>
              <li>
                <Link
                  to='/products/home-decor'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('home:homeDecor')}
                </Link>
              </li>

              <li>
                <Link
                  to='/products/accessories'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('accessories')}
                </Link>
              </li>
              <li>
                <Link
                  to='/products/stationary'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('stationary')}
                </Link>
              </li>
              <li>
                <Link
                  to='/products/grocery'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('grocery')}
                </Link>
              </li>
              <li>
                <Link
                  to='/products/toys'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('toys')}
                </Link>
              </li>

              <li>
                <Link
                  to='/products/others'
                  className={({ isActive }) =>
                    isActive ? 'active-category' : ''
                  }
                >
                  {t('others')}
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
		</div>
	);
};

export default CatagoryPhone;
