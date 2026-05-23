import { ExternalLinkIcon, GlobeIcon, HomeIcon, LinkIcon, SmartphoneIcon } from '@finografic/icons';
import type { ContactInfo as ContactInfoType } from '../data/types';
import type { Interpolation } from '@emotion/react';
import type { ReactNode } from 'react';

import { LinkedInInIcon } from '../assets/icons/LinkedInInIcon';
import { styles } from './ContactInfo.styles';

interface ContactInfoProps {
  contact: ContactInfoType;
}

interface ContactRowProps {
  href?: string;
  iconCss?: Interpolation;
  Icon: React.ComponentType<{ css?: Interpolation }>;
  text: string;
}

function ContactRow({ href, iconCss, Icon, text }: ContactRowProps): ReactNode {
  const content = href ? (
    <a
      href={href}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      target={href.startsWith('http') ? '_blank' : undefined}
    >
      {text}
    </a>
  ) : (
    text
  );

  return (
    <li css={styles.item}>
      <span css={styles.row}>
        <Icon css={iconCss ?? styles.icon} />
        {content}
      </span>
    </li>
  );
}

export function ContactInfo({ contact }: ContactInfoProps): ReactNode {
  const phoneDigits = contact.phone.replace(/[^\d+]/g, '');
  const phoneHref = /^\+?\d{7,15}$/.test(phoneDigits) ? `tel:${phoneDigits}` : undefined;

  return (
    <>
      <ul css={styles.list}>
        <ContactRow Icon={HomeIcon} text={contact.location} />
        <ContactRow Icon={SmartphoneIcon} href={phoneHref} text={contact.phone} />
        <ContactRow Icon={LinkIcon} href={`mailto:${contact.email}`} text={contact.email} />
        <ContactRow
          Icon={LinkedInInIcon}
          href={`https://${contact.linkedin}`}
          iconCss={styles.iconLinkedIn}
          text={contact.linkedin}
        />
        <ContactRow Icon={ExternalLinkIcon} href={`https://${contact.github}`} text={contact.github} />
        <ContactRow
          Icon={GlobeIcon}
          href={`https://${contact.website}`}
          iconCss={styles.iconGlobe}
          text={contact.website}
        />
      </ul>
      <p css={styles.note}>{contact.workRightsNote}</p>
    </>
  );
}
