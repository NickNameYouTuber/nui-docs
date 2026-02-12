import docsPkg from '../package.json';

// Get @nicorp/nui version from dependencies
export const NUI_VERSION = docsPkg.dependencies['@nicorp/nui'].replace('^', '');
