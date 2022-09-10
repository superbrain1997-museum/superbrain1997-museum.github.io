'use strict';
importScripts('https://superbrain1997-museum.herokuapp.com/sw-toolbox.js');

toolbox.precache([        
        `/`,
        `/`,
        `/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/`,
		`/projects.html`]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});