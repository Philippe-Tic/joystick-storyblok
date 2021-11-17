import React from 'react';

import { chakra } from '@chakra-ui/react';

export const Logo = ({ ...rest }) => {
  return (
    <chakra.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517.9 181.8" {...rest}>
      <defs>
        <linearGradient id="Dégradé_sans_nom_4" x1="312.5" y1="146.9" x2="394.8" y2="146.9" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5c82d7"/>
          <stop offset="1" stopColor="#5153da"/>
        </linearGradient>
      </defs>
      <g id="Calque_2" data-name="Calque 2">
        <g id="Calque_1-2" data-name="Calque 1">
          <path d="M385 147c-8-5-19-7-31-7s-24 2-31 7h-11v14c0 11 19 21 42 21s41-10 41-21v-14Z" style={{ fill: '#1f3590' }}/>
          <ellipse cx="353.7" cy="146.9" rx="41.2" ry="21.1" style={{ fill: 'url(#Dégradé_sans_nom_4)' }}/>
          <path d="M359 148v-18l-43 25c3 4 8 7 15 9l28-16Z" style={{ fill:'#89b3e5' }}/>
          <path style={{ fill: '#edf0f4' }} d="M344 61h20v84a5 5 0 0 1-5 5h-9a5 5 0 0 1-6-5V61Z"/>
          <path d="M344 88c0 2 20-1 20-4V61h-20Z" style={{ opacity:.1 }}/>
          <circle cx="353.7" cy="35.2" r="35.2" style={{ fill:'#b81a68' }}/>
          <path d="M362 59c-21 0-38-15-38-35a33 33 0 0 1 1-9 35 35 0 1 0 59 38 41 41 0 0 1-22 6Z" style={{ fill:'#ad135f' }}/>
          <circle cx="368.1" cy="22.5" r="9.8" style={{ fill:'#fce3e9' }}/>
          <path style={{ fill: '#edf0f4' }} d="M0 121h22c0 5 2 9 9 9s9-5 9-10V86H16V66h47v55c0 20-13 30-32 30-22 0-31-13-31-30ZM73 118c0-19 13-33 35-33 21 0 34 14 34 33s-13 33-34 33-35-14-35-33Zm47 0c0-8-6-13-12-13s-12 5-12 13 5 13 12 13 12-5 12-13ZM151 158h8c5 0 8-3 9-7v-1l-25-64h24l11 35h2l10-35h24l-26 71c-5 13-13 20-28 20h-9ZM215 130h21c0 3 3 5 8 5s8-2 8-4c0-9-36 3-36-25 0-11 9-21 28-21 16 0 27 7 28 21h-19c-1-3-4-5-9-5s-7 1-7 4c0 8 36-4 36 25 0 12-10 22-29 22s-28-9-29-22ZM290 126v-23h-10V86h5c4 0 6-2 6-6V69h22v17h15v17h-15v22c0 4 2 7 7 7h8v18h-14c-15 0-24-9-24-24ZM374 118c0-19 12-33 34-33 19 0 32 11 33 28h-23a10 10 0 0 0-10-8c-7 0-12 6-12 13s5 13 12 13c5 0 8-3 10-6h23c-2 15-14 27-33 27-21-1-34-15-34-34ZM493 150l-12-24-7 8v16h-23V60h23v44l15-18h27l-19 22 21 42Z"/>
        </g>
      </g>
    </chakra.svg>
  );
};
