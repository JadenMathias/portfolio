import * as React from "react";
import classes from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Header = (props) => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [size, setSize] = React.useState({
		width: undefined,
		height: undefined,
	});

	const [color, setColor] = React.useState(false);

	React.useEffect(() => {
		const handleResize = () => {
			setSize({ width: window.innerWidth, height: window.innerHeight });
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	React.useEffect(() => {
		if (size.width > 964 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const menuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const changeBackground = () => {
		if (window.scrollY > 80) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<header style={{ background: color ? "#121212" : "transparent" }} className={classes.header}>
			<div className={classes.header__content}>
				<Link to="home" spy={true} smooth={true} duration={500} offset={-80} className={classes.header__content__logo}>
					{">"} Jaden Mathias
				</Link>
				<nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
					<ul>
						<li>
							<Link to="about" spy={true} smooth={true} duration={500} offset={-75}>
								About
							</Link>
						</li>
						<li>
							<Link to="experience" spy={true} smooth={true} duration={500} offset={-75}>
								Experience
							</Link>
						</li>
						<li>
							<Link to="project" spy={true} smooth={true} duration={500} offset={-75}>
								Projects
							</Link>
						</li>
						<li>
							<Link to="edu" spy={true} smooth={true} duration={500} offset={-80}>
								Education
							</Link>
						</li>
					</ul>
				</nav>
				<div className={classes.header__content__toggle}>
					{menuOpen ? <AiOutlineClose onClick={menuToggle} /> : <BiMenuAltRight onClick={menuToggle} />}
				</div>
			</div>
		</header>
	);
};

export default Header;
