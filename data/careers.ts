export interface Career {
    id: number;
    name: string;
    time: string;
    location: string;
    details: string;
}

export const careers: Career[] = [
    {
        id: 1,
        name: "ゲームクリエイター専門学校",
        time: "2020 - 2023",
        location: "日本/群馬県",
        details:
            "専門学校では、主にゲーム制作に携わりました。\n"
            + "C++を使ったコンソールゲームからUnityを使った3Dゲームまで、幅広いジャンルのゲームを制作しました。",
    },
    {
        id: 2,
        name: "ソフトウェアエンジニア",
        time: "2023 - 2024",
        location: "日本/神奈川県",
        details:
            "この会社では、証券会社の債権債務システムや石油タンカーの計測システムの開発に携わりました。",
    },
    {
        id: 3,
        name: "フロントエンドエンジニア",
        time: "2024 - present",
        location: "日本/東京都",
        details:
            "今の会社ではフロントエンドエンジニアとして、日本向けのソーシャルゲームの開発・運営をしています。\n"
            + "新しいタイトルの開発に携わりたいと考えています。",
    },
];