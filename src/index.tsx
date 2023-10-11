import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>My React and TypeScript App!</h1>;

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
