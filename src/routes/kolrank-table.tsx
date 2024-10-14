const kol_data = [
    {
        kol_name: "Ed",
        twitter: "Ed_x0101",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
        score: 79,
        token_recommend: [
            {
                token: "TERMINUS",
                increase: "94.73%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4",
            },
            {
                token: "SWAG",
                increase: "222.61%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682",
            },
        ],
    },
    {
        kol_name: "韩跑跑",
        twitter: "Laojiucai_02",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
        score: 70.53,
        token_recommend: [
            {
                token: "kheowzoo",
                increase: "9908.41%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7",
            },
            {
                token: "KhaoKheow",
                increase: "1486.03%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74",
            },
        ],
    },
    {
        kol_name: "Ed",
        twitter: "Ed_x0101",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
        score: 79,
        token_recommend: [
            {
                token: "TERMINUS",
                increase: "94.73%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4",
            },
            {
                token: "SWAG",
                increase: "222.61%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682",
            },
        ],
    },
    {
        kol_name: "韩跑跑",
        twitter: "Laojiucai_02",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
        score: 70.53,
        token_recommend: [
            {
                token: "kheowzoo",
                increase: "9908.41%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7",
            },
            {
                token: "KhaoKheow",
                increase: "1486.03%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74",
            },
        ],
    },
    {
        kol_name: "Ed",
        twitter: "Ed_x0101",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
        score: 79,
        token_recommend: [
            {
                token: "TERMINUS",
                increase: "94.73%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xcbde0453d4e7d748077c1b0ac2216c011dd2f406.png?size=lg&key=59c8b4",
            },
            {
                token: "SWAG",
                increase: "222.61%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x36c7188d64c44301272db3293899507eabb8ed43.png?size=lg&key=b16682",
            },
        ],
    },
    {
        kol_name: "韩跑跑",
        twitter: "Laojiucai_02",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
        score: 70.53,
        token_recommend: [
            {
                token: "kheowzoo",
                increase: "9908.41%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/solana/AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump.png?size=lg&key=f18de7",
            },
            {
                token: "KhaoKheow",
                increase: "1486.03%",
                token_image:
                    "https://dd.dexscreener.com/ds-data/tokens/solana/CLXPjdHA2ikfQVPeQJiy4vomAZseVVMuowUtngRMpump.png?size=lg&key=6bfc74",
            },
        ],
    },
];
const kol = kol_data[0];

export default function KolRankTable() {
    return (
        <>
            <div className="c-kol-table flex justify-center mt-0">
                <div className="c-table-skeleton w-[960px] h-[600px] flex flex-col gap-4 bg-gray-50 p-4">
                    <div className="w-full text-gray-200">
                        {/* Table Header */}
                        <div className="flex mb-4">
                            <div className="w-1/2 px-4 py-3 flex">
                                <div className="w-3/4">KOL</div>
                                <div className="w-1/4">评分</div>
                            </div>
                            <div className="flex-1 px-4 py-3">本周推荐代币</div>
                        </div>
                        {/* Table Data Rows */}
                        {kol_data.map((kol, index) => (
                            <div
                                key={index}
                                className="relative flex mb-4 rounded-[7px]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(160,160,160,0.17) 0%, rgba(73,73,73,0.19) 100%)",
                                }}
                            >
                                {/* 如果是第一名，添加左上角的图片 */}
                                {index === 0 && (
                                    <div className="absolute top-0 left-0 w-[57.5px] h-[23.5px]">
                                        <img
                                            src="/t1_bg.png"
                                            alt="First Place Badge"
                                            className="w-full h-full"
                                        />
                                        <div
                                            className="absolute top-0.5 left-1 w-[39px] h-[19px] flex items-center justify-center">
											<span
                                                className="font-['TT_Hoves'] text-[16px] font-black italic leading-[18.85px] text-white">
												TOP1
											</span>
                                        </div>
                                    </div>
                                )}
                                {index === 1 && (
                                    <div className="absolute top-0 left-0 w-[57.5px] h-[23.5px]">
                                        <img
                                            src="/t2_bg.png"
                                            alt="First Place Badge"
                                            className="w-full h-full"
                                        />
                                        <div
                                            className="absolute top-0.5 left-1 w-[39px] h-[19px] flex items-center justify-center">
											<span
                                                className="font-['TT_Hoves'] text-[16px] font-black italic leading-[18.85px] text-white">
												#2
											</span>
                                        </div>
                                    </div>
                                )}
                                {index === 2 && (
                                    <div className="absolute top-0 left-0 w-[57.5px] h-[23.5px]">
                                        <img
                                            src="/t3_bg.png"
                                            alt="First Place Badge"
                                            className="w-full h-full"
                                        />
                                        <div
                                            className="absolute top-0.5 left-1 w-[39px] h-[19px] flex items-center justify-center">
											<span
                                                className="font-['TT_Hoves'] text-[16px] font-black italic leading-[18.85px] text-white">
												#3
											</span>
                                        </div>
                                    </div>
                                )}

                                {index > 2 && (
                                    <div className="absolute top-0 left-0 w-[57.5px] h-[23.5px]">
                                        <img
                                            src="/t4_bg.png"
                                            alt="First Place Badge"
                                            className="w-full h-full"
                                        />
                                        <div
                                            className="absolute top-0.5 left-1 w-[39px] h-[19px] flex items-center justify-center">
											<span
                                                className="font-['TT_Hoves'] text-[16px] font-black italic leading-[18.85px] text-white">
												#{index + 1}
											</span>
                                        </div>
                                    </div>
                                )}

                                {/* KOL 信息 */}
                                <div className="w-1/2 flex items-center px-4 py-3">
                                    <div className="w-3/4 flex items-center">
                                        <img
                                            src={kol.twitter_avatar}
                                            alt={kol.kol_name}
                                            className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                                        />
                                        <div>
                                            <div>{kol.kol_name}</div>
                                            <div className="text-gray-400">@{kol.twitter}</div>
                                        </div>
                                    </div>
                                    <div className="w-1/4 font-bold">{kol.score}</div>
                                </div>
                                {/* 代币推荐 */}
                                <div className="flex-1 flex items-center px-4 py-3">
                                    <div className="flex space-x-4">
                                        {kol.token_recommend.map((token, idx) => (
                                            <div key={idx} className="flex items-center">
                                                <img
                                                    src={token.token_image}
                                                    alt={token.token}
                                                    className="w-6 h-6 rounded-full mr-2"
                                                />
                                                <div>
                                                    <div>{token.token}</div>
                                                    <div className="text-green-500">
                                                        +{token.increase}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* End of Data Rows */}
                    </div>
                </div>
            </div>


            {/* Updated laomo div */}
            <div className="laomo flex justify-center" style={{marginTop: '50px'}}>
                <div
                    className="relative w-[960px] h-[80px] rounded-[16px]"
                    style={{
                        left: '0px',
                        background: 'linear-gradient(90.43deg, rgba(68, 83, 87, 0) 4.21%, #1A1A1A 99.45%)'
                    }}
                >
                    <div className="absolute top-[-18px] left-0 w-[85px] h-[72px]">
                        <img src="/laomo.png" alt="Left image" className="w-full h-full object-cover"/>
                    </div>

                    {/* KOL信息 */}
                    <div className="absolute left-[250px] top-[15px] flex items-center">
                        <img
                            src={kol.twitter_avatar}
                            alt={kol.kol_name}
                            className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                        />
                        <div>
                            <div className="text-white font-semibold">{kol.kol_name}</div>
                            <div className="text-gray-400">@{kol.twitter}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
}
