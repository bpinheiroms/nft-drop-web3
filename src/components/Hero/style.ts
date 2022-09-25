import twd from "tailwind-styled-components";

export const Container = twd.div<any>`
grid flex-grow items-center gap-0 pb-12 md:grid-cols-2 md:gap-24 md:pb-48 md:pt-24
`;

export const DescriptionContainer = twd.div<any>`
col-span-1 mb-12 mt-16 flex flex-col space-y-6 rounded-xl text-center md:mb-0 md:text-left lg:justify-center lg:space-y-2
`;

export const DescriptionText = twd.h1<any>`
text-3xl font-extralight dark:text-white md:max-w-md md:text-6xl
`;

export const DescriptionSpan = twd.span<any>`
font-bold text-purple-500
`;

export const Box = twd.div<any>`
col-span-1
`;
