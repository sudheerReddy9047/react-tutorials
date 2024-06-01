import React from "react";
import { createRoot } from 'react-dom/client';

import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { AppComponent } from './App';

createRoot(document.getElementById('root')).render(<AppComponent />)