import { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { API } from "../helper";
// import { Fragment } from "react/cjs/react.production.min";


const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			// try {
				const url = `${API}/api/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			// } catch (error) {
				// console.log(error);
				// setValidUrl(false);
			// }
		};
		verifyEmailUrl();
	}, [param]);

	console.log(validUrl)
	return (
		<Fragment>
			{validUrl ? (
				<div className="container">
					{/* <img src={success} alt="success_img" className={styles.success_img} /> */}
					<h1>Email verified successfully</h1>
					<Link to="/sign-in">
						<button className="btn">Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default EmailVerify;