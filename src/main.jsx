import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import { ModeContextProvider } from './context/modeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ModeContextProvider>
			<App />
		</ModeContextProvider>
	</React.StrictMode>
);