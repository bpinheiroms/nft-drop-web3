import twd from "tailwind-styled-components";

export const BoxGrid = twd.div<any>`
grid grid-cols-3 gap-3 md:gap-6
`;

export const BoxItem = twd.div<any>`
flex flex-col gap-3
md:gap-6
`;

export const BoxItemLarge = twd(BoxItem)`
pt-24
`;
export const BoxItemMedium = twd(BoxItem)`
pt-12
`;

export const BoxDataContainer = twd.div<any>`
origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-500 ease-in-out hover:-translate-y-1
`;
