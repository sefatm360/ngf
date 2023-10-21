import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

interface ImegaDropdownProps {
	categoryPress: boolean;
	subCategoryPress: {
		womanFashion: boolean;
		mensFashion: boolean;
		health: boolean;
		foodItem: boolean;
	};
	setSubCategoryPress: Function;
}
const f = () => {};

const MegaDropdown = ({
	categoryPress,
	setSubCategoryPress,
	subCategoryPress,
}: ImegaDropdownProps) => {
	const { t } = useTranslation(['products', 'home']);
	return (
		<>
			<div className="mega-dropdown-section">
				<Container>
					<div
						className={`${
							!categoryPress ? 'mega-dropdown' : 'mega-dropdown-visible'
						}`}
					>
						<Row>
							<Col lg={4}>
								<Row>
									{/* <Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link href="/products/Food">
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	<Image
																		src="/assets/dropdown-icon/Food_Items.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>
																	<span className="link-title">
																		{t('foodItems')}
																	</span>
																</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col> */}

									{/*********************************** Foods items megaMenu ************************************/}

									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li
													onClick={() => {
														setSubCategoryPress({
															...subCategoryPress,
															foodItem: !subCategoryPress.foodItem,
														});
													}}
												>
													<span className="link-wrapper">
														<div className="link-wrapper-content">
															<span className="link-icon">
																{/* <FontAwesomeIcon icon={faVestPatches} /> */}
																<Image
																	src="/assets/dropdown-icon/Food_Items.svg"
																	width={20}
																	height={15}
																	alt=""
																/>
																<span className="link-title">
																	{t('foodItems')}
																</span>
															</span>
														</div>

														<div>
															<span className="link-arrow-icon">
																{subCategoryPress.foodItem ? (
																	<MdKeyboardArrowDown />
																) : (
																	<MdKeyboardArrowRight />
																)}
															</span>
														</div>
													</span>

													{/* sub */}
													<ul
														className={`sub-category ${
															subCategoryPress.foodItem ? 'd-block' : 'd-none'
														}`}
													>
														<li>
															<Link href="/products/Food">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('allFoodItems')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/CakeAndPudding">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('cakeAndPudding')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/FishCurry">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('fishCurry')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/MeatCurry">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('meatCurry')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/Biriyani">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('biriyani')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/Dessert">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>
																			<span className="link-title">
																				{t('dessert')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/Pitha">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('pitha')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/VortaVaji">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('bhortaVaji')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/Pickle">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}

																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('pickle')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/OtherFood">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}

																			<Image
																				src="/assets/dropdown-icon/Food_Items.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('other')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</Col>

									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link href="/products/Stationary">
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	{/* <FontAwesomeIcon icon={faBurger} /> */}
																	<Image
																		src="/assets/dropdown-icon/Stationery.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>

																	<span className="link-title">
																		{' '}
																		{t('stationary')}
																	</span>
																</span>
															</div>

															<div>
																<span>{/* <MdKeyboardArrowRight /> */}</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col>
									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link href="/products/Grocery">
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	{/* <FontAwesomeIcon icon={faBurger} /> */}

																	<Image
																		src="/assets/dropdown-icon/Grocery.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>

																	<span className="link-title">
																		{' '}
																		{t('grocery')}
																	</span>
																</span>
															</div>

															<div>
																<span>{/* <MdKeyboardArrowRight /> */}</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col>
									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li
													onClick={() => {
														setSubCategoryPress({
															...subCategoryPress,
															womanFashion: !subCategoryPress.womanFashion,
														});
													}}
												>
													<span className="link-wrapper">
														<div className="link-wrapper-content">
															<span className="link-icon">
																{/* <FontAwesomeIcon icon={faVestPatches} /> */}
																<Image
																	src="/assets/dropdown-icon/women.svg"
																	width={20}
																	height={15}
																	alt=""
																/>
																<span className="link-title">
																	{t('womanFashion')}
																</span>
															</span>
														</div>

														<div>
															<span className="link-arrow-icon">
																{subCategoryPress.womanFashion ? (
																	<MdKeyboardArrowDown />
																) : (
																	<MdKeyboardArrowRight />
																)}
															</span>
														</div>
													</span>

													{/* sub */}
													<ul
														className={`sub-category ${
															subCategoryPress.womanFashion
																? 'd-block'
																: 'd-none'
														}`}
													>
														<li>
															<Link href="/products/ShareeAndBlouse">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Sharee&Blouse.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('shareeAndBlouse')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/SalwarKameez">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			<Image
																				src="/assets/dropdown-icon/SalwarKameez.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('salwarKameez')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/KurtiAndPants">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/KurtiPant.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('singleKurtiAndPant')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/LadiesShoes">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/LadiesShoes.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('ladiesShoes')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/Jewellery">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Jewellery.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>
																			<span className="link-title">
																				{t('jewellery')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/CoupleCollection">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/CoupleCollection.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('cuppleCollection')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/HijabBorkhaGown">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/HijabBorkha.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('hijabBorkhaAndGown')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/FashionAccessories">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}

																			<Image
																				src="/assets/dropdown-icon/FashionAccessories.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('fashionAccessories')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</Col>
								</Row>
							</Col>

							<Col lg={4}>
								<Row>
									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link href="/products/BabyProducts">
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	{/* <FontAwesomeIcon icon={faBurger} /> */}
																	<Image
																		src="/assets/dropdown-icon/KurtiPant.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>
																	<span className="link-title">
																		{t('home:babyProducts')}
																	</span>
																</span>
															</div>

															<div>
																<span>{/* <MdKeyboardArrowRight /> */}</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col>
									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link href="/products/HomeDecor">
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	{/* <FontAwesomeIcon icon={faBurger} /> */}
																	<Image
																		src="/assets/dropdown-icon/homedecor.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>

																	<span className="link-title">
																		{t('home:homeDecor')}
																	</span>
																</span>
															</div>

															<div>
																<span>{/* <MdKeyboardArrowRight /> */}</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col>
									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link href="/products/Accessories">
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	{/* <FontAwesomeIcon icon={faBurger} /> */}
																	<Image
																		src="/assets/dropdown-icon/FashionAccessories.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>

																	<span className="link-title">
																		{t('accessories')}
																	</span>
																</span>
															</div>

															<div>
																<span>{/* <MdKeyboardArrowRight /> */}</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col>
									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li
													onClick={() => {
														setSubCategoryPress({
															...subCategoryPress,
															mensFashion: !subCategoryPress.mensFashion,
														});
													}}
												>
													<span className="link-wrapper">
														<div className="link-wrapper-content">
															<span className="link-icon">
																<Image
																	src="/assets/dropdown-icon/man.svg"
																	width={20}
																	height={15}
																	alt=""
																/>
																<span className="link-title">
																	{t('mensFashion')}
																</span>
															</span>
														</div>

														<div>
															<span className="link-arrow-icon">
																{subCategoryPress.mensFashion ? (
																	<MdKeyboardArrowDown />
																) : (
																	<MdKeyboardArrowRight />
																)}
															</span>
														</div>
													</span>

													{/* sub */}
													<ul
														className={`sub-category ${
															subCategoryPress.mensFashion
																? 'd-block'
																: 'd-none'
														}`}
													>
														<li>
															<Link href="/products/Shirt">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Shirt.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>
																			<span className="link-title">
																				{' '}
																				{t('shirt')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/Pant">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/Pant.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{' '}
																				{t('pant')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/Panjabi">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/panjabi.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('panjabi')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</Col>
								</Row>
							</Col>
							<Col lg={4}>
								<Row>
									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link
														href="/products/Toys
"
													>
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	{/* <FontAwesomeIcon icon={faBurger} /> */}

																	<Image
																		src="/assets/dropdown-icon/Toys.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>

																	<span className="link-title">
																		{' '}
																		{t('toys')}
																	</span>
																</span>
															</div>

															<div>
																<span>{/* <MdKeyboardArrowRight /> */}</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col>

									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li
													onClick={() => {
														setSubCategoryPress({
															...subCategoryPress,
															health: !subCategoryPress.health,
														});
													}}
												>
													<span className="link-wrapper">
														<div className="link-wrapper-content">
															<span className="link-icon">
																{/* <FontAwesomeIcon icon={faVestPatches} /> */}
																<Image
																	src="/assets/dropdown-icon/Health&Beauty.svg"
																	width={20}
																	height={15}
																	alt=""
																/>
																<span className="link-title ">
																	{t('healthAndBeauty')}
																</span>
															</span>
														</div>
														<div>
															<span className="link-arrow-icon">
																{subCategoryPress.health ? (
																	<MdKeyboardArrowDown />
																) : (
																	<MdKeyboardArrowRight />
																)}
															</span>
														</div>
													</span>

													{/* sub */}
													<ul
														className={`sub-category ${
															subCategoryPress.health ? 'd-block' : 'd-none'
														}`}
													>
														<li>
															<Link href="/products/SkinCare">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/SkinCare.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('skinCare')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/HairCare">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/HairCare.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('hairCare')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
														<li>
															<Link href="/products/MakeupItems">
																<span className="sub-category-link-wrapper">
																	<div className="link-wrapper-content">
																		<span className="link-icon">
																			{/* <FontAwesomeIcon
                                              icon={faVestPatches}
                                            /> */}
																			<Image
																				src="/assets/dropdown-icon/MakeupItem.svg"
																				width={20}
																				height={15}
																				alt=""
																			/>

																			<span className="link-title">
																				{t('makeupItems')}
																			</span>
																		</span>
																	</div>
																</span>
															</Link>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</Col>

									<Col lg={12}>
										<div className="mega-content-wrapper">
											<ul>
												<li>
													<Link
														href="/products/Others

"
													>
														<span className="link-wrapper">
															<div className="link-wrapper-content">
																<span className="link-icon">
																	{/* <FontAwesomeIcon icon={faBurger} /> */}
																	<Image
																		src="/assets/dropdown-icon/Others.svg"
																		width={20}
																		height={15}
																		alt=""
																	/>

																	<span className="link-title">
																		{' '}
																		{t('others')}
																	</span>
																</span>
															</div>

															<div>
																<span>{/* <MdKeyboardArrowRight /> */}</span>
															</div>
														</span>
													</Link>
												</li>
											</ul>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
};

export default MegaDropdown;
