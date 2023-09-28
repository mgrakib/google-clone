import Container from "../Container/Container";
import CounteryComp from "./CounteryComp";

const Footer = () => {
    return (
		<footer className="absolute bottom-0 w-full text-gray-500 bg-[#f2f2f2] text-sm">

			<Container>
				<div className=''>
					<div className="border-b">
						<CounteryComp />
					</div>

					<div className='flex flex-col sm:flex-row items-center justify-between'>
						<ul className='flex items-center space-x-4'>
							<li className='link'>About</li>
							<li className='link'>Advertising</li>
							<li className='link'>Business</li>
							<li className='link'>How Search Works</li>
						</ul>

						<ul className='flex items-center space-x-4'>
							<li className='link'>Privacy</li>
							<li className='link'>Terms</li>
							<li className='link'>Setting</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;