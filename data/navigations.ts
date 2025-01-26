export interface Navigation {
    id: number;
    key: string;
    name: string;
}

export const navigations: Navigation[] = [
    {
        id: 1,
        key: "#about",
        name: "About",
    },
    {
        id: 2,
        key: "#careers",
        name: "Careers",
    },
    {
        id: 3,
        key: "#skills",
        name: "Skills",
    },
    {
        id: 4,
        key: "#projects",
        name: "Projects",
    },
    {
        id: 5,
        key: "#contact",
        name: "Contact",
    },
];