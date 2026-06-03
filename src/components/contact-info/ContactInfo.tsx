import type { IconProps } from '@finografic/icons';
import { GlobeIcon, HomeIcon, MailIcon } from '@finografic/icons';
import { GithubIcon } from 'assets/icons/GithubIcon';
import { LinkedInIcon } from 'assets/icons/LinkedInIcon';
import { MobileIcon } from 'assets/icons/MobileIcon';
import type { Interpolation } from '@emotion/react';
import type { CvEdition } from 'layout/web/CVEntry';
import type { ComponentType, ReactNode } from 'react';
import type { ContactDetails } from 'types';

import { styles } from './ContactInfo.styles';

interface ContactIconProps extends IconProps {
  css?: Interpolation;
}

interface ContactRowProps {
  edition: CvEdition;
  href?: string;
  iconClassName?: string;
  iconCss?: Interpolation;
  iconName: string;
  Icon: ComponentType<ContactIconProps>;
  text: string;
}

function ContactRow({
  edition,
  href,
  iconClassName,
  iconCss,
  iconName,
  Icon,
  text,
}: ContactRowProps): ReactNode {
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

  if (edition === 'print') {
    return (
      <li className="pe-contact-row">
        <Icon className={['pe-contact-icon', iconClassName].filter(Boolean).join(' ')} />
        {content}
      </li>
    );
  }

  return (
    <li css={styles.item}>
      <span css={styles.row}>
        <Icon className={`icon icon-${iconName}`} css={iconCss} />
        {content}
      </span>
    </li>
  );
}

interface ContactInfoProps {
  contact: ContactDetails;
  edition?: CvEdition;
}

export function ContactInfo({ contact, edition = 'screen' }: ContactInfoProps): ReactNode {
  const phoneDigits = contact.phone.replace(/[^\d+]/g, '');
  const computedPhoneHref = /^\+?\d{7,15}$/.test(phoneDigits) ? `tel:${phoneDigits}` : undefined;
  const phoneHref = contact.phoneHref ?? computedPhoneHref;
  const emailHref = contact.emailHref ?? `mailto:${contact.email}`;
  const linkedinHref = contact.linkedinHref ?? `https://${contact.linkedin}`;
  const githubHref = contact.githubHref ?? `https://${contact.github}`;
  const websiteHref = contact.websiteHref ?? `https://${contact.website}`;

  if (edition === 'print') {
    return (
      <>
        <ul className="pe-contact-list">
          <ContactRow edition="print" Icon={HomeIcon} iconName="home" text={contact.location} />
          <ContactRow
            edition="print"
            Icon={MobileIcon}
            href={phoneHref}
            iconClassName="pe-contact-icon--mobile"
            iconName="phone"
            text={contact.phone}
          />
          <ContactRow edition="print" Icon={MailIcon} href={emailHref} iconName="mail" text={contact.email} />
          <ContactRow
            edition="print"
            Icon={LinkedInIcon}
            href={linkedinHref}
            iconName="linkedin"
            text={contact.linkedin}
          />
          <ContactRow
            edition="print"
            Icon={GithubIcon}
            href={githubHref}
            iconName="github"
            text={contact.github}
          />
          <ContactRow
            edition="print"
            Icon={GlobeIcon}
            href={websiteHref}
            iconName="website"
            text={contact.website}
          />
        </ul>
        {contact.workRights ? <p className="pe-work-rights">{contact.workRights}</p> : null}
      </>
    );
  }

  return (
    <>
      <ul css={styles.list}>
        <ContactRow
          edition="screen"
          Icon={HomeIcon}
          iconCss={styles.icon}
          iconName="home"
          text={contact.location}
        />
        <ContactRow
          edition="screen"
          Icon={MobileIcon}
          href={phoneHref}
          iconCss={styles.iconCustom}
          iconName="phone"
          text={contact.phone}
        />
        <ContactRow
          edition="screen"
          Icon={MailIcon}
          iconCss={styles.icon}
          href={emailHref}
          iconName="mail"
          text={contact.email}
        />
        <ContactRow
          edition="screen"
          Icon={LinkedInIcon}
          href={linkedinHref}
          iconCss={styles.iconCustom}
          iconName="linkedin"
          text={contact.linkedin}
        />
        <ContactRow
          edition="screen"
          Icon={GithubIcon}
          href={githubHref}
          iconCss={styles.iconCustom}
          iconName="github"
          text={contact.github}
        />
        <ContactRow
          edition="screen"
          Icon={GlobeIcon}
          href={websiteHref}
          iconCss={styles.iconCustom}
          iconName="website"
          text={contact.website}
        />
      </ul>
      {contact.workRightsNotes && contact.workRightsNotes.length > 0 ? (
        <p css={styles.note}>
          {contact.workRightsNotes.map((note) => (
            <span css={styles.noteLine} key={note}>
              {note}
            </span>
          ))}
        </p>
      ) : null}
    </>
  );
}
