import * as React from 'react'
import * as ReactDom from 'react-dom';
import {App} from './app.component';

ReactDom.render(<div>
    <App message='HEY'/>
</div>, document.getElementById('root'));
