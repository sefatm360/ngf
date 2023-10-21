import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Sidebar from '../utils/Sidebar';
import Meta from '../Meta/Meta';

interface LayoutProps {
	children: React.ReactNode;
}

const SidebarLayout = ({ children }: LayoutProps) => {
	const router = useRouter();

	return (
		<>
			<Meta title="Products | ontheway" />
			<div className="products-section py-5">
				<Container>
					<Row>
						<Col lg={3}>
							<Sidebar />
						</Col>
						<Col>{children}</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default SidebarLayout;
