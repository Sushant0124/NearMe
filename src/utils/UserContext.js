import { createContext } from "react";

const UserContext = createContext({
	user: { name: "Sushant", email: "sushantbansal2004@gmail.com" },
});
export default UserContext;
UserContext.displayName = "UserContext";
