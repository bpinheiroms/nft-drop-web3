import twd from "tailwind-styled-components";

export const Container = twd.div<any>`
pt-12 pb-24 md:grid md:grid-cols-4
`;

export const Box = twd.div<any>`
md:col-span-4 xl:col-span-3 xl:col-start-2
`;

export const Section = twd.section<any>`
pb-12 lg:pb-16
`;

export const Title = twd.h1<any>`
text-center font-poppins text-3xl font-extralight dark:text-white md:text-left md:text-4xl
`;

export const TitleSpan = twd.span<any>`
font-bold text-purple-500
`;

export const ItemContainer = twd.div<any>`
flex flex-col items-stretch justify-center space-y-8 md:space-y-24
`;

export const ItemData = twd.div<any>`
grid gap-6 sm:grid-cols-2 md:gap-8
`;
