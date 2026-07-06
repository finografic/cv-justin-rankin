import { createElement, Fragment } from 'react';
import type { ReactNode } from 'react';

const HTML_LINK_PATTERN = /<a href="([^"]+)">([^<]*)<\/a>/g;
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function createDescriptionLink(label: string, href: string, key: string): ReactNode {
  return createElement(
    'a',
    {
      key,
      className: 'cv-entry__inline-link',
      href,
      rel: href.startsWith('http') ? 'noopener noreferrer' : undefined,
      target: href.startsWith('http') ? '_blank' : undefined,
    },
    label,
  );
}

function parseLinkedDescription(
  text: string,
  pattern: RegExp,
  toLink: (match: RegExpMatchArray, key: string) => ReactNode,
): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let linkIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    nodes.push(toLink(match, String(linkIndex)));
    linkIndex += 1;
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? createElement(Fragment, null, ...nodes) : text;
}

export function parseHtmlDescription(text: string): ReactNode {
  return parseLinkedDescription(text, HTML_LINK_PATTERN, (match, key) => {
    const href = match[1];
    const label = match[2];
    if (!href || !label) return match[0];
    return createDescriptionLink(label, href, key);
  });
}

export function parseMarkdownDescription(text: string): ReactNode {
  return parseLinkedDescription(text, MARKDOWN_LINK_PATTERN, (match, key) => {
    const label = match[1];
    const href = match[2];
    if (!href || !label) return match[0];
    return createDescriptionLink(label, href, key);
  });
}
