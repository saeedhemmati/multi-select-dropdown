import React from 'react';
import { Container, createRoot } from 'react-dom/client';
import { App } from './App';
import './style/main.scss';

const root = createRoot(document.getElementById('app') as Container);
root.render(<App />);
