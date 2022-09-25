import twd from "tailwind-styled-components";

export const Container = twd.div<any>`
group relative cursor-pointer transition duration-500 ease-in-out hover:rotate-1 hover:scale-105
`;

export const Animation = twd.div<any>`
animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-80
`;

export const Box = twd.div<any>`
relative flex items-center justify-between space-x-4 divide-gray-600 rounded-xl bg-white px-1.5 leading-none text-blue-200 transition duration-200 hover:text-purple-300 dark:bg-black sm:p-2
`;

export const Block = twd.div<any>`
duration-600 w-full origin-top-left rounded-2xl p-3 sm:w-auto md:w-full
`;

export const DataContainer = twd.div<any>`
flex items-center gap-4 sm:flex-col md:flex-row md:gap-6
`;

export const ImageContainer = twd.div<any>`
rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5
`;

export const TextContainer = twd.div<any>`
text-left sm:text-center md:text-left lg:py-8
`;

export const Title = twd.h2<any>`
text-xl text-amber-500 dark:text-amber-300 md:text-2xl xl:text-3xl
`;

export const Description = twd.p<any>`
mt-2 hidden font-poppins font-extralight text-black dark:text-white sm:block
`;

export const Name = twd.p<any>`
mt-2 font-poppins font-medium text-purple-600 dark:text-purple-400
`;

export const Image = twd.img<any>`
lg:w-38 h-auto w-16 flex-shrink rounded-lg object-cover sm:w-full md:w-32
`;
