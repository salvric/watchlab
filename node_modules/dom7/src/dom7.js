import $ from './$';
import Utils from './utils';
import Methods from './methods';
import Scroll from './scroll';
import Animate from './animate';
import Ajax from './ajax';

// Utils & Helpers
$.use(Utils, Methods, Scroll, Animate, Ajax);

// Export
export default $;
