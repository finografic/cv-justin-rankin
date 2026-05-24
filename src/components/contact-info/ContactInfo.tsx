import type { IconProps } from '@finografic/icons';
import { GlobeIcon, HomeIcon, MailIcon } from '@finografic/icons';
import { GithubIcon } from 'assets/icons/GithubIcon';
import { LinkedInIcon } from 'assets/icons/LinkedInIcon';
import { MobileIcon } from 'assets/icons/MobileIcon';
import type { Interpolation } from '@emotion/react';
import type { ComponentType, ReactNode } from 'react';
import type { ContactDetails } from 'types';

import { styles } from './ContactInfo.styles';

interface ContactIconProps extends IconProps {
  css?: Interpolation;
}

interface ContactRowProps {
  href?: string;
  iconCss?: Interpolation;
  iconName: string;
  Icon: ComponentType<ContactIconProps>;
  text: string;
}

function ContactRow({ href, iconCss, iconName, Icon, text }: ContactRowProps): ReactNode {
  const content = href ? (
    <a
      href={href}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      target={href.startsWith('http') ? '_blank' : undefined}
    >
      {text}
    </a>
  ) : (
    <>{text}</>
  );

  return (
    <li css={styles.item}>
      <span css={styles.row}>
        <Icon className={`icon icon-${iconName}`} css={iconCss} />
        {content}
      </span>
    </li>
  );
}

export function ContactInfo({ contact }: { contact: ContactDetails }): ReactNode {
  const phoneDigits = contact.phone.replace(/[^\d+]/g, '');
  const phoneHref = /^\+?\d{7,15}$/.test(phoneDigits) ? `tel:${phoneDigits}` : undefined;

  return (
    <>
      <ul css={styles.list}>
        <ContactRow Icon={HomeIcon} iconCss={styles.icon} iconName="home" text={contact.location} />
        <ContactRow
          Icon={MobileIcon}
          href={phoneHref}
          iconCss={styles.iconCustom}
          iconName="phone"
          text={contact.phone}
        />
        <ContactRow
          Icon={MailIcon}
          iconCss={styles.icon}
          href={`mailto:${contact.email}`}
          iconName="mail"
          text={contact.email}
        />
        <ContactRow
          Icon={LinkedInIcon}
          href={`https://${contact.linkedin}`}
          iconCss={styles.iconCustom}
          iconName="linkedin"
          text={contact.linkedin}
        />
        <ContactRow
          Icon={GithubIcon}
          href={`https://${contact.github}`}
          iconCss={styles.iconCustom}
          iconName="github"
          text={contact.github}
        />
        <ContactRow
          Icon={GlobeIcon}
          href={`https://${contact.website}`}
          iconCss={styles.iconCustom}
          iconName="website"
          text={contact.website}
        />
      </ul>
      {contact.workRightsNotes.map((note) => (
        <p css={styles.note} key={note}>
          {note}
        </p>
      ))}
    </>
  );
}
