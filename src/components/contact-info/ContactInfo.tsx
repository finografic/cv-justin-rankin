import type { IconProps } from '@finografic/icons';
import { GlobeIcon, HomeIcon, MailIcon } from '@finografic/icons';
import { GithubIcon } from 'assets/icons/GithubIcon';
import { LinkedInIcon } from 'assets/icons/LinkedInIcon';
import { MobileIcon } from 'assets/icons/MobileIcon';
import type { Interpolation } from '@emotion/react';
import type { ComponentType, ReactNode } from 'react';
import type { ContactDetails } from 'types';

import type { CvView } from 'types/cv-view.types';

import { styles } from './ContactInfo.styles';

interface ContactIconProps extends IconProps {
  css?: Interpolation;
}

interface ContactRowProps {
  view: CvView;
  href?: string;
  iconClassName?: string;
  iconCss?: Interpolation;
  iconName: string;
  Icon: ComponentType<ContactIconProps>;
  text: string;
}

function ContactRow({
  view,
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

  if (view === 'condensed') {
    return (
      <li className="cv-condensed-contact-row">
        <Icon className={['cv-condensed-contact-icon', iconClassName].filter(Boolean).join(' ')} />
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
  view?: CvView;
}

export function ContactInfo({ contact, view = 'full' }: ContactInfoProps): ReactNode {
  const phoneDigits = contact.phone.replace(/[^\d+]/g, '');
  const computedPhoneHref = /^\+?\d{7,15}$/.test(phoneDigits) ? `tel:${phoneDigits}` : undefined;
  const phoneHref = contact.phoneHref ?? computedPhoneHref;
  const emailHref = contact.emailHref ?? `mailto:${contact.email}`;
  const linkedinHref = contact.linkedinHref ?? `https://${contact.linkedin}`;
  const githubHref = contact.githubHref ?? `https://${contact.github}`;
  const websiteHref = contact.websiteHref ?? `https://${contact.website}`;

  if (view === 'condensed') {
    return (
      <>
        <ul className="cv-condensed-contact-list">
          <ContactRow view="condensed" Icon={HomeIcon} iconName="home" text={contact.location} />
          <ContactRow
            view="condensed"
            Icon={MobileIcon}
            href={phoneHref}
            iconClassName="cv-condensed-contact-icon--mobile"
            iconName="phone"
            text={contact.phone}
          />
          <ContactRow
            view="condensed"
            Icon={MailIcon}
            href={emailHref}
            iconName="mail"
            text={contact.email}
          />
          <ContactRow
            view="condensed"
            Icon={LinkedInIcon}
            href={linkedinHref}
            iconName="linkedin"
            text={contact.linkedin}
          />
          <ContactRow
            view="condensed"
            Icon={GithubIcon}
            href={githubHref}
            iconName="github"
            text={contact.github}
          />
          <ContactRow
            view="condensed"
            Icon={GlobeIcon}
            href={websiteHref}
            iconName="website"
            text={contact.website}
          />
        </ul>
        {contact.workRights ? <p className="cv-condensed-work-rights">{contact.workRights}</p> : null}
      </>
    );
  }

  return (
    <>
      <ul css={styles.list}>
        <ContactRow
          view="full"
          Icon={HomeIcon}
          iconCss={styles.icon}
          iconName="home"
          text={contact.location}
        />
        <ContactRow
          view="full"
          Icon={MobileIcon}
          href={phoneHref}
          iconCss={styles.iconCustom}
          iconName="phone"
          text={contact.phone}
        />
        <ContactRow
          view="full"
          Icon={MailIcon}
          iconCss={styles.icon}
          href={emailHref}
          iconName="mail"
          text={contact.email}
        />
        <ContactRow
          view="full"
          Icon={LinkedInIcon}
          href={linkedinHref}
          iconCss={styles.iconCustom}
          iconName="linkedin"
          text={contact.linkedin}
        />
        <ContactRow
          view="full"
          Icon={GithubIcon}
          href={githubHref}
          iconCss={styles.iconCustom}
          iconName="github"
          text={contact.github}
        />
        <ContactRow
          view="full"
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
