import type { ContactSvgIconProps } from './contact-svg-icon';
import type { ReactElement } from 'react';

import { ContactSvgIcon } from './contact-svg-icon';

export function MobileIcon(props: ContactSvgIconProps): ReactElement {
  return (
    <ContactSvgIcon {...props}>
      <path
        d="M16.73 2.065H7.27a2.386 2.386 0 0 0-2.24 2.5v14.87a2.386 2.386 0 0 0 2.24 2.5h9.46a2.386 2.386 0 0 0 2.24-2.5V4.565a2.386 2.386 0 0 0-2.24-2.5m1.24 17.37a1.39 1.39 0 0 1-1.24 1.5H7.27a1.39 1.39 0 0 1-1.24-1.5V4.565a1.39 1.39 0 0 1 1.24-1.5H8.8v.51a1 1 0 0 0 1 1h4.4a1 1 0 0 0 1-1v-.51h1.53a1.39 1.39 0 0 1 1.24 1.5Z"
        fill="currentColor"
      />
      <path d="M10 18.934h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1" fill="currentColor" />
    </ContactSvgIcon>
  );
}
