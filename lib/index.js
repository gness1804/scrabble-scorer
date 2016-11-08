import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application.jsx';
import vanilla from './vanilla';

require('./styles.scss');

render(<Application />, document.getElementById('application'));
