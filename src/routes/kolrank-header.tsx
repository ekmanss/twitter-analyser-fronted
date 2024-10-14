const LeftImageGroup = () => (
	<div className="absolute h-full right-1/2 transform translate-x-[-81px] w-[540px]">
		{/* X 图片 */}
		<img
			src="/X.png"
			alt="X Logo"
			className="absolute z-10 w-[88.93px] h-[99.39px] top-[82px] right-[345px]"
		/>

		{/* FINDER 图片 */}
		<img
			src="/FINDER.png"
			alt="Finder Image"
			className="absolute z-10 w-[333.47px] h-[99.24px] top-[82.14px] right-0"
		/>

		{/* FWG Raw 图片 */}
		<img
			src="/fwg_raw.png"
			alt="FWG Raw Image"
			className="absolute z-20 w-[311px] h-[401px] top-[24px] right-[40px]"
		/>
	</div>
);

const RightImageGroup: React.FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <div className="absolute left-0 h-full w-full">
                {/* 0xcult 和 X2 图片的容器 */}
                <div
                    className="absolute z-30"
                    style={{
                        top: "24px",
                        left: "595px",
                        width: "328.63px",
                        height: "16.77px",
                    }}
                >
                    {/* 0xcult 图片 */}
                    <img
                        src="/0xcult_xfinder.png"
                        alt="0xcult Logo"
                        className="absolute w-[328px] h-[36px] left-0 top-0"
                    />
                </div>

                {/* 文本元素容器 */}
                <div className="absolute z-30 top-[65px] left-[573px] w-[380px]">
                    {/* 更新的日期文字 */}
                    <GradientText
                        className="absolute w-full h-[34px] top-0 left-0 text-center whitespace-nowrap overflow-hidden text-ellipsis"
                        gradient="linear-gradient(91.02deg, rgba(255, 146, 0, 0.6) 1.49%, rgba(255, 204, 0, 0.6) 40.53%, rgba(223, 128, 0, 0.6) 97.9%)"
                        style={{
                            fontFamily: "PingFang SC",
                            fontSize: "24px",
                            fontWeight: 400,
                            lineHeight: "33.6px",
                            letterSpacing: "0.35em",
                        }}
                    >
                        {title}
                    </GradientText>

                    {/* KOL榜单 文字 */}
                    <GradientText
                        className="absolute w-full h-[96px] top-[32px] left-0 text-center"
                        gradient="linear-gradient(91.02deg, #FF9200 1.49%, #FFCC00 40.53%, #DF8000 97.9%)"
                        style={{
                            fontFamily: "FZRuiZhengHeiS-EB-GB",
                            fontSize: "90px",
                            fontWeight: 400,
                            lineHeight: "96.27px",
                        }}
                    >
                        KOL榜单
                    </GradientText>

                    {/* MEMECOIN 背景布局 */}
                    <div
                        className="absolute w-full h-[28px] top-[132px] left-[2px] flex items-center justify-center rounded bg-gradient-to-r from-[#FFCA00] to-[#D99400]"
                        style={{
                            padding: "6px 8px",
                        }}
                    >
				<span
                    className="font-medium text-[#1B111A]"
                    style={{fontFamily: "PingFang SC", fontSize: "16px"}}
                >
					MEMECOIN
				</span>
                    </div>
                </div>
            </div>
        </>
    )
};

interface GradientTextProps {
    children: React.ReactNode;
    gradient: string;
    style?: React.CSSProperties;
    className?: string;
}

interface KolrankHeaderProps {
    data:{
        title: string;
    }

}

const GradientText: React.FC<GradientTextProps> = ({
                                                       children,
                                                       gradient,
                                                       style,
                                                       className,
                                                   }) => (
    <div
        className={className}
        style={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            ...style,
        }}
    >
        {children}
    </div>
);

const KolrankHeader: React.FC<KolrankHeaderProps> = ({data}) => {
    console.log("data", data);
    const {title} = data;

    return (
        <div className="relative h-[260px] overflow-hidden">
            {/* 居中容器 */}
            <div className="relative w-[1080px] h-full mx-auto">
                {/* 页面中心线 */}
                {/*<div className="absolute left-1/2 top-0 bottom-0 w-px bg-red-500 z-50 transform -translate-x-1/2"></div>*/}

                {/* 左侧图片组 */}
                <LeftImageGroup/>

                {/* 右侧图片组 */}
                <RightImageGroup title={title}/>
            </div>

            {/* 分割线 */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                    background:
                        "linear-gradient(to right, rgba(255, 146, 0, 0), rgba(255, 146, 0, 0.5), rgba(255, 146, 0, 0))",
                }}
            ></div>
        </div>
    );
}


export default KolrankHeader;
