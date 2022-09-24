import twd from "tailwind-styled-components";

export const Container = twd.div<any>`
  min-h-screen 
  bg-white 
  dark:bg-black
`;

export const Gradient = twd.div<any>`
  to-blue-400[0.35]
  dark:to-blue-400[0.25] 
  bg-gradient-to-tr 
  from-purple-400/[0.35]
  dark:from-purple-400/[0.15]
`;

export const Box = twd.div<any>`
  mx-auto 
  flex 
  min-h-screen 
  max-w-7xl 
  flex-col
`