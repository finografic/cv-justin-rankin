import type { ContactInfo as ContactInfoType } from '../data/types';
import type { ReactNode } from 'react';

import { styles } from './ContactInfo.styles';

const contactRows = (contact: ContactInfoType): Array<{ label: string; value: string; href?: string }> => [
  { label: 'Location', value: contact.location },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'LinkedIn', value: contact.linkedin, href: `https://${contact.linkedin}` },
  { label: 'GitHub', value: contact.github, href: `https://${contact.github}` },
  { label: 'Website', value: contact.website, href: `https://${contact.website}` },
  { label: 'Phone', value: contact.phone },
  { label: 'Work rights', value: contact.workRights },
  { label: 'VEVO', value: contact.vevo },
];

interface ContactInfoProps {
  contact: ContactInfoType;
}

export function ContactInfo({ contact }: ContactInfoProps): ReactNode {
  return (
    <ul css={styles.list}>
      {contactRows(contact).map(({ href, label, value }) => (
        <li css={styles.item} key={label}>
          <span css={styles.label}>{label}</span>
          <span css={styles.value}>{href ? <a href={href}>{value}</a> : value}</span>
        </li>
      ))}
    </ul>
  );
}
