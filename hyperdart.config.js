
import pkg from './package.json' with { type: 'json' };

export default {
  name: pkg.name,

  triggers: {
	keywords: [
		'npm',
		'package info',
		'latest version',
		'current version',
		'compare',
		'alternatives',
		'packages like',
		'similar to',
		'show me'
	]
	},

  query_format: {
	regex: [
		'(npm( packages?)?|package info) HD_PACKAGES.NPM_PACKAGES',
		'(latest|current) version of HD_PACKAGES.NPM_PACKAGES',
		'(npm )?(alternatives?( to| for)|packages? (like|similar to)) HD_PACKAGES.NPM_PACKAGES( npm)?',
		'compare( npm)?( packages?)? HD_PACKAGES.NPM_PACKAGES(,| vs| versus| and)? HD_PACKAGES.NPM_PACKAGES((,| vs| versus| and)? HD_PACKAGES.NPM_PACKAGES)?',
	]
	},

  client: {
    location: pkg.module,
    moduleName: pkg.umdName || 'HD' + pkg.name,
    baseURL: '/' + pkg.name
  },

  format: {
    mainline: true,
    sidebar: true
  },

  permissions: {},

  info: {},

  github: "https://github.com/pravallika-92/package-compass",
  demovideo: 'https://youtu.be/XLB6A6uqMQ8'
};
