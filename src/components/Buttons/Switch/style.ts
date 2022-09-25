import twd from "tailwind-styled-components";

export const Container = twd.div<any>`
group relative
`;

export const Animation = twd.div<any>`
animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-100
`

export const Item = twd.div<any>`
relative flex items-center space-x-4 divide-gray-600 rounded-full bg-white p-4 leading-none text-blue-500 transition duration-200 hover:text-purple-500 dark:bg-black dark:text-blue-200 dark:hover:text-purple-300
`