import { useClient } from "next/client";

const ClientOnly = ({ children }) => {
	const isClient = useClient();

	return isClient ? children : null;
};

export default ClientOnly;
