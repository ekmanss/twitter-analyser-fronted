import KolrankHeader from "@/routes/golddog-header.tsx";
import KolRankTable from "@/routes/kolrank-table.tsx";
import {useLocation} from "react-router-dom";

export default function GolddogPage() {

    // const headerData = updateKOLRankData.headerData;
    // const kol_data_raw = updateKOLRankData.kol_data_raw;
    // const laomo_raw = updateKOLRankData.laomo_raw;
    // const geju_raw = updateKOLRankData.geju_raw;

    const location = useLocation();
    let updateKOLRankData = location.state as {
        headerData: any;
        kol_data_raw: any[];
        laomo_raw: any;
        geju_raw: any;
    };
    updateKOLRankData = {
        "headerData": {
            "title": "9月第四周(8.19-8.26)"
        },
        "kol_data_raw": [
            {
                "kol_name": "Ed",
                "twitter": "Ed_x0101",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
                "score": 79,
                "token_recommend": [
                    {
                        "token": "TERMINUS",
                        "increase": "94.73%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4"
                    },
                    {
                        "token": "SWAG",
                        "increase": "222.61%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682"
                    }
                ]
            },
            {
                "kol_name": "韩跑跑",
                "twitter": "Laojiucai_02",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
                "score": 70.53,
                "token_recommend": [
                    {
                        "token": "kheowzoo",
                        "increase": "9908.41%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7"
                    },
                    {
                        "token": "KhaoKheow",
                        "increase": "1486.03%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74"
                    }
                ]
            },
            {
                "kol_name": "Ed",
                "twitter": "Ed_x0101",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
                "score": 79,
                "token_recommend": [
                    {
                        "token": "TERMINUS",
                        "increase": "94.73%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4"
                    },
                    {
                        "token": "SWAG",
                        "increase": "222.61%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682"
                    }
                ]
            },
            {
                "kol_name": "韩跑跑",
                "twitter": "Laojiucai_02",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
                "score": 70.53,
                "token_recommend": [
                    {
                        "token": "kheowzoo",
                        "increase": "9908.41%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7"
                    },
                    {
                        "token": "KhaoKheow",
                        "increase": "1486.03%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74"
                    }
                ]
            },
            {
                "kol_name": "Ed",
                "twitter": "Ed_x0101",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
                "score": 79,
                "token_recommend": [
                    {
                        "token": "TERMINUS",
                        "increase": "94.73%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4"
                    },
                    {
                        "token": "SWAG",
                        "increase": "222.61%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682"
                    }
                ]
            },
            {
                "kol_name": "韩跑跑",
                "twitter": "Laojiucai_02",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
                "score": 70.53,
                "token_recommend": [
                    {
                        "token": "kheowzoo",
                        "increase": "9908.41%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7"
                    },
                    {
                        "token": "KhaoKheow",
                        "increase": "1486.03%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74"
                    }
                ]
            },
            {
                "kol_name": "Ed",
                "twitter": "Ed_x0101",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
                "score": 79,
                "token_recommend": [
                    {
                        "token": "TERMINUS",
                        "increase": "94.73%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4"
                    },
                    {
                        "token": "SWAG",
                        "increase": "222.61%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682"
                    }
                ]
            },
            {
                "kol_name": "韩跑跑",
                "twitter": "Laojiucai_02",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
                "score": 70.53,
                "token_recommend": [
                    {
                        "token": "kheowzoo",
                        "increase": "9908.41%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7"
                    },
                    {
                        "token": "KhaoKheow",
                        "increase": "1486.03%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74"
                    }
                ]
            },
            {
                "kol_name": "Ed",
                "twitter": "Ed_x0101",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
                "score": 79,
                "token_recommend": [
                    {
                        "token": "TERMINUS",
                        "increase": "94.73%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4"
                    },
                    {
                        "token": "SWAG",
                        "increase": "222.61%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682"
                    }
                ]
            },
            {
                "kol_name": "韩跑跑",
                "twitter": "Laojiucai_02",
                "twitter_avatar": "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
                "score": 70.53,
                "token_recommend": [
                    {
                        "token": "kheowzoo",
                        "increase": "9908.41%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7"
                    },
                    {
                        "token": "KhaoKheow",
                        "increase": "1486.03%",
                        "token_image": "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74"
                    }
                ]
            }
        ],
        "laomo_raw": {
            "kol_name": "Ed",
            "twitter": "Ed_x0101",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
            "score": 79,
            "recommendedNum": 30
        },
        "geju_raw": {
            "kol_name": "韩跑跑",
            "twitter": "Laojiucai_02",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
            "score": 70.53
        }
    }

    if (!updateKOLRankData) {
        return <div>Error: No data received. Please go back and upload a valid JSON file.</div>;
    }

    const { headerData, kol_data_raw, laomo_raw, geju_raw } = updateKOLRankData;

    if (!headerData || !kol_data_raw || !laomo_raw || !geju_raw) {
        return <div>Error: Missing data. Please ensure all required fields are present in the uploaded JSON.</div>;
    }

    return (
        <div className="bg-black min-h-screen">
            <KolrankHeader data={headerData}/>
            <KolRankTable data={
                {kol_data_raw, laomo_raw, geju_raw}
            }/>
        </div>
    );
}
