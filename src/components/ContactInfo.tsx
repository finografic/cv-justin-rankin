import styled from '@emotion/styled';
import type { ContactInfo as ContactInfoType } from '../data/types';
import type { ReactNode } from 'react';

import { theme } from '../styles/theme';

const List = styled.ul({
  display: 'grid',
  gap: '0.7rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const Item = styled.li({
  display: 'grid',
  gap: '0.15rem',
});

const Label = styled.span({
  color: theme.colors.muted,
  fontFamily: theme.fonts.heading,
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

const Value = styled.span({
  fontSize: '1rem',
});

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
    <List>
      {contactRows(contact).map(({ href, label, value }) => (
        <Item key={label}>
          <Label>{label}</Label>
          <Value>{href ? <a href={href}>{value}</a> : value}</Value>
        </Item>
      ))}
    </List>
  );
}
