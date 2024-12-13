const KolRankTable: React.FC<any> = ({data}) => {
    const {kol_data_raw, laomo_raw, geju_raw} = data

    let kol_data = kol_data_raw;
    let laomo = laomo_raw;
    let geju = geju_raw;

    return (
        <>
            <div className="c-kol-table flex justify-center mt-0">
                <div className="c-table-skeleton w-[960px] h-[900] flex flex-col gap-4 bg-black p-4">
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
                                    <div className="w-1/4 font-bold italic text-[#FFD714] text-[22px]">{kol.score}</div>
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
            <div className="c-laomo flex justify-center" style={{marginTop: '30px'}}>
                <div
                    className="relative w-[960px] h-[80px] rounded-[16px]"
                    style={{
                        background: 'linear-gradient(90.43deg, rgba(68, 83, 87, 0) 4.21%, #1A1A1A 99.45%)'
                    }}
                >
                    <div className="absolute top-[-18px] left-0 w-[85px] h-[72px]">
                        <img src="/laomo.png" alt="Left image" className="w-full h-full object-cover"/>
                    </div>

                    {/* 劳模奖文字 */}
                    <div
                        className="absolute"
                        style={{
                            left: '100px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontFamily: 'FZRuiZhengHeiS-EB-GB, "Microsoft YaHei", sans-serif',
                            fontSize: '26px',
                            fontWeight: 400,
                            lineHeight: '38px',
                            color: '#FFD714',
                            WebkitTextStroke: '1px #FFD714',
                            letterSpacing: '-0.8px',
                            textShadow: '0 0 1px #FFD714, 0 0 2px #FFD714',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                        }}
                    >
                        劳模奖
                    </div>

                    {/* KOL信息 */}
                    <div className="absolute flex items-center"
                         style={{left: '350px', top: '50%', transform: 'translateY(-50%)'}}>
                        <img
                            src={laomo.twitter_avatar}
                            alt={laomo.kol_name}
                            className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                        />
                        <div>
                            <div className="text-white font-semibold">{laomo.kol_name}</div>
                            <div className="text-gray-400">@{laomo.twitter}</div>
                        </div>
                    </div>

                    {/* 本周推荐项目文字 */}
                    <div
                        className="absolute"
                        style={{
                            left: '650px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontFamily: 'FZRuiZhengHeiS-EB-GB, "Microsoft YaHei", sans-serif',
                            fontSize: '19px',
                            fontWeight: 700,
                            lineHeight: '22.31px',
                            color: 'white',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                        }}
                    >
                        本周推荐项目
                    </div>

                    {/* 26个 */}
                    <div
                        className="absolute"
                        style={{
                            left: '780px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontFamily: 'FZRuiZhengHeiS-EB-GB, "Microsoft YaHei", sans-serif',
                            fontSize: '36px',
                            fontWeight: 400,
                            lineHeight: '42.26px',
                            color: '#00B7FF',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                        }}
                    >
                        {laomo.recommendedNum}个
                    </div>
                </div>
            </div>


            {/* 最能格局奖div */}
            <div className="c-geju flex justify-center" style={{marginTop: '30px'}}>
                <div
                    className="relative w-[960px] h-[80px] rounded-[16px]"
                    style={{
                        background: 'linear-gradient(90.43deg, rgba(68, 83, 87, 0) 4.21%, #1A1A1A 99.45%)'
                    }}
                >
                    <div className="absolute top-[-18px] left-0 w-[85px] h-[72px]">
                        <img src="/geju.png" alt="Left image" className="w-full h-full object-cover"/>
                    </div>

                    {/* 最能格局奖文字 */}
                    <div
                        className="absolute"
                        style={{
                            left: '100px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontFamily: 'FZRuiZhengHeiS-EB-GB, "Microsoft YaHei", sans-serif',
                            fontSize: '26px',
                            fontWeight: 400,
                            lineHeight: '38px',
                            color: '#FFD714',
                            WebkitTextStroke: '1px #FFD714',
                            letterSpacing: '-0.8px',
                            textShadow: '0 0 1px #FFD714, 0 0 2px #FFD714',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                        }}
                    >
                        最能格局奖
                    </div>

                    {/* KOL信息 */}
                    <div className="absolute flex items-center"
                         style={{left: '350px', top: '50%', transform: 'translateY(-50%)'}}>
                        <img
                            src={geju.twitter_avatar}
                            alt={geju.kol_name}
                            className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                        />
                        <div>
                            <div className="text-white font-semibold">{geju.kol_name}</div>
                            <div className="text-gray-400">@{geju.twitter}</div>
                        </div>
                    </div>

                    {/* 推荐的代币跌幅最少文字 */}
                    <div
                        className="absolute"
                        style={{
                            left: '650px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontFamily: 'FZRuiZhengHeiS-EB-GB, "Microsoft YaHei", sans-serif',
                            fontSize: '19px',
                            fontWeight: 700,
                            lineHeight: '22.31px',
                            color: 'white',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale',
                        }}
                    >
                        推荐的代币跌幅最少
                    </div>

                </div>
            </div>

            <div className="h-14 bg-black"></div>

        </>


    );
}


export default KolRankTable;