import twd from "tailwind-styled-components";

export const Container = twd.header<any>`
p-8 z-50 flex flex-col items-center justify-between border-b border-pink-400/[0.15] pb-8 md:flex-row md:pb-10
`;

export const LogoTitle = twd.header<any>`
cursor-pointer font-poppins text-sm font-extralight uppercase tracking-wider text-purple-800/75 dark:text-purple-300/50 md:text-xl
`;

export const LogoSubTitle = twd.span<any>`
font-medium text-purple-800 dark:text-purple-400 ml-2`;

export const ButtonContainer = twd.div<any>`
mt-6 flex flex-col items-center space-y-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-5
`;

export const SpaceBox = twd.div<any>`
flex items-center space-x-5
`;

export const GroupItems = twd.div<any>`
group relative
`;

export const Animation = twd.div<any>`
animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-100
`;

export const ButtonTittle = twd.span<any>`
font-poppins text-lg capitalize tracking-wider text-black transition duration-200 group-hover:text-purple-500 dark:text-white dark:group-hover:text-purple-300
`;

export const TextContainer = twd.div<any>`
relative flex items-center space-x-4 divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none text-black transition duration-200 hover:text-purple-500 dark:bg-black dark:text-white dark:hover:text-purple-300
`;
