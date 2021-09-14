const ProfileAccount = (props) => {
	const { title, ammount } = props;
	const formatAmmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{title}</h3>
				<p className="account-amount">{formatAmmount.format(ammount)}</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
};

export default ProfileAccount;
