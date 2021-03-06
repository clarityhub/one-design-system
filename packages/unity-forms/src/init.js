import 'normalize.css';
import WebFont from 'webfontloader';
import { fontFamilies } from '@clarityhub/unity-core/lib/typography';

const families = Object.keys(fontFamilies).map(k => {
	return `${k}:${fontFamilies[k]}&display=swap`;
});

WebFont.load({
	google: {
		families,
	},
});
