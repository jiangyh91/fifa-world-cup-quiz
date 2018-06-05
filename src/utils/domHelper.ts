import * as React from 'react';

export const dataAttribute = (
  attrName: string,
  e: React.FormEvent<HTMLElement>
) => e.currentTarget.getAttribute(`data-${attrName}`);
