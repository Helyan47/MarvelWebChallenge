import AppContextProvider from './AppContext';

const Providers = ({ children }) => {
	return <AppContextProvider>{children}</AppContextProvider>;
};

export default Providers;
