/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const EuiIconSortDown = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 11.692V3.556C7 3.249 7.224 3 7.5 3s.5.249.5.556v8.136l4.096-4.096a.5.5 0 01.707.707l-4.242 4.243a1.494 1.494 0 01-.925.433.454.454 0 01-.272 0 1.494 1.494 0 01-.925-.433L2.197 8.303a.5.5 0 11.707-.707L7 11.692z" />
  </svg>
);

export const icon = EuiIconSortDown;
