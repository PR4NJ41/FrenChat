import { lazy, Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from "./context/UserProvider";
import AccountProvider from "./context/AccountProvider";
import Loader from "./components/loader/Loader.js";

const Messenger = lazy(() => import("./components/Messenger.js"));

function App() {
	const clientId = "1079104901870-nb75dqm9tppmji26ro4l126v8ld1gb3t.apps.googleusercontent.com";

	return (
		<GoogleOAuthProvider clientId={clientId}>
			<UserProvider>
				<AccountProvider>
					<Suspense fallback={<Loader />}>
						<Messenger />
					</Suspense>
				</AccountProvider>
			</UserProvider>
		</GoogleOAuthProvider>
	);
}

export default App;
