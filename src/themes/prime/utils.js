import { themeGet } from '@styled-system/theme-get';
import { get as getKey } from 'styled-system';

import theme from 'themes/prime';

export const get = (key) => themeGet(key, getKey(key, theme));
