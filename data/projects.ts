export interface Project {
    id: number;
    title: string;
    imageUrl: string;
    details: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "しにさんじ - オフィシャルウェブサイト",
        imageUrl: "/images/projects/shinisanji.png",
        details: "「しにさんじ」はゲームやオタク文化を共有しあうコミュニティです。\n私はウェブサイトの制作、運用を行っています。",
        link: "https://www.shinisanji.help/",
    },
];