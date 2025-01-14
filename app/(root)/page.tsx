import TotalBalanceBox from "@/components/total-balance-box";
import HeaderBox from "@/components/header-box";
import React from "react";
import RightSidebar from "@/components/right-sidebar";

const Home = () => {
	const loggedIn = { firstName: "Mahmoud", lastName :"Samir" , email: "mahmoud.samir@gmail.com"};

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and manage your account and transactions efficiently."
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>

			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 500.50}]}
			/>
		</section>
	);
};

export default Home;
