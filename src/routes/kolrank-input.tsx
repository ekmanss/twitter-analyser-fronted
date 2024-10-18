import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const templateJson = {
    headerData: {
        title: "9月第四周(8.19-8.26)"
    },
    kol_data_raw: [
        {
            "KOL Name": "Neso",
            "twitter url ": "https://twitter.com/neso",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1672221394636242945/GWrMlToc_400x400.jpg",
            "Score": 86.67,
            "Token 1": "SIGMA",
            "Increase 1": 6.2355,
            "代币头像URL": "https://dd.dexscreener.com/ds-data/tokens/solana/5SVG3T9CNQsm2kEwzbRq6hASqh1oGfjqTtLXYUibpump.png?size=lg&key=594367",
            "Token 2": "RASTO",
            "Increase 2": 3.5089,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x5408d3883ec28c2de205064ae9690142b035fed2.png?size=lg&key=5cdb9e",
            "Token 3": "ELON",
            "Increase 3": 1.2851,
            "代币头像URL_2": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x69420e3a3aa9e17dea102bb3a9b3b73dcddb9528.png?size=lg&key=6cc2c3"
        },
        {
            "KOL Name": "Wmafia.eth",
            "twitter url ": "https://x.com/Wmafia6",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1844919936063504387/eKd38-bf_400x400.jpg",
            "Score": 84.13,
            "Token 1": "MOODENG",
            "Increase 1": 13.2258,
            "代币头像URL": "https://www.dextools.io/resources/tokens/logos/ether/0x28561b8a2360f463011c16b6cc0b0cbef8dbbcad.jpg?1727024815408",
            "Token 2": "POCHITA",
            "Increase 2": 5.6212,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x4e6221c07dae8d3460a46fa01779cf17fdd72ad8.png?size=lg&key=e2ceac",
            "Token 3": "IGW",
            "Increase 3": 3.8625,
            "代币头像URL_2": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x7ce48865ee2f1c96bfb978dc33eadd7f5f82c469.png?size=lg&key=84a24e"
        },
        {
            "KOL Name": "CryptoCat🐈",
            "twitter url ": "https://twitter.com/Crypto_Cat888",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1782769676574941184/K1HHGxMf_400x400.jpg",
            "Score": 70.75,
            "Token 1": "MOODENG",
            "Increase 1": 10.8389,
            "代币头像URL": "https://www.dextools.io/resources/tokens/logos/ether/0x28561b8a2360f463011c16b6cc0b0cbef8dbbcad.jpg?1727024815408",
            "Token 2": "SASHA",
            "Increase 2": 9.3167,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/solana/6WNva7iLjTvxSfXPSmbjceW5Yc41LUH4SJNqKom5pump.png?size=lg&key=fa40a8",
            "Token 3": "GARGOYLE",
            "Increase 3": 8.3395,
            "代币头像URL_2": "https://dd.dexscreener.com/ds-data/tokens/solana/Gn1haSB4Jkh3E9PXSC2BRYrh97ReruvTqf13jd5Jpump.png?size=lg&key=50be8f"
        },
        {
            "KOL Name": "Ed",
            "twitter url ": "https://twitter.com/Ed_x0101",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
            "Score": 70.5,
            "Token 1": "AAA",
            "Increase 1": 3.3592,
            "代币头像URL": "https://dd.dexscreener.com/ds-data/tokens/sui/0xd976fda9a9786cda1a36dee360013d775a5e5f206f8e20f84fad3385e99eeb2d::aaa::aaa.png?size=lg&key=621f76",
            "Token 2": "AXOL",
            "Increase 2": 2.7242,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/sui/0xae00e078a46616bf6e1e6fb673d18dcd2aa31319a07c9bc92f6063363f597b4e::axol::axol.png?size=lg&key=137c22",
            "Token 3": "LIQ",
            "Increase 3": 1.5012,
            "代币头像URL_2": "https://dd.dexscreener.com/ds-data/tokens/sui/0x9c86d1926a0a39e906f20674d6a35f337be8625ebcb6b799ee8ff011f328bee2::liq::liq.png?size=lg&key=50a768"
        },
        {
            "KOL Name": "mitch (rtrd/acc)",
            "twitter url ": "https://x.com/idrawline",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1774942228630134784/tzr1yvLR_400x400.jpg",
            "Score": 68.56,
            "Token 1": "DOLAN",
            "Increase 1": 2.6338,
            "代币头像URL": "https://dd.dexscreener.com/ds-data/tokens/solana/4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z.png?size=lg&key=93659e",
            "Token 2": "GIKO",
            "Increase 2": 2.4385,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/solana/3WPep4ufaToK1aS5s8BL9inzeUrt4DYaQCiic6ZkkC1U.png?size=lg&key=e8e7c5",
            "Token 3": "RAPR",
            "Increase 3": 1.4699,
            "代币头像URL_2": "https://dd.dexscreener.com/ds-data/tokens/solana/RAPRz9fd87y9qcBGj1VVqUbbUM6DaBggSDA58zc3N2b.png?size=lg&key=e3aac1"
        },
        {
            "KOL Name": "汐",
            "twitter url ": "https://x.com/xixi_kawayi",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1846554561039024128/u0x1cyq6_400x400.jpg",
            "Score": 65.5,
            "Token 1": "GIGACHAD",
            "Increase 1": 8.2802,
            "代币头像URL": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0xf43f21384d03b5cbbddd58d2de64071e4ce76ab0.png?size=lg&key=aed66c",
            "Token 2": "SNAP",
            "Increase 2": 3.3415,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x284b25d8f199125da962abc9ee6e6b1b6715cae3.png?size=lg&key=66fe1a",
            "Token 3": "BURGER",
            "Increase 3": 3.0476,
            "代币头像URL_2": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x0c2e08e459fc43ddd1e2718c122f566473f59665.png?size=lg&key=293abd"
        },
        {
            "KOL Name": "叶子君Foliage",
            "twitter url ": "https://x.com/Foliage_et",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1794358730727018498/CDKIxo_6_400x400.jpg",
            "Score": 62.14,
            "Token 1": "LOOP",
            "Increase 1": 1.6488,
            "代币头像URL": "-",
            "Token 2": "SPAM",
            "Increase 2": 1.5036,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/sui/0x30a644c3485ee9b604f52165668895092191fcaf5489a846afa7fc11cdb9b24a::spam::spam.png?size=lg&key=ad7c9f",
            "Token 3": "TBC",
            "Increase 3": 0.6961,
            "代币头像URL_2": "-"
        },
        {
            "KOL Name": "Fuyyx",
            "twitter url ": "https://x.com/chenjiafu520",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1761833427358400512/THueWyOP_400x400.jpg",
            "Score": 59,
            "Token 1": "RIZZ",
            "Increase 1": 1.6494,
            "代币头像URL": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x582dd5e7c8af79d45a96de4af5d1152a061abb50.png?size=lg&key=263015",
            "Token 2": "FAC",
            "Increase 2": 0.7976,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x1a3a8cf347b2bf5890d3d6a1b981c4f4432c8661.png?size=lg&key=36fef9",
            "Token 3": "HOPPY",
            "Increase 3": 0.502,
            "代币头像URL_2": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x6e79b51959cf968d87826592f46f819f92466615.png?size=lg&key=567af5"
        },
        {
            "KOL Name": "Chenpepe.blink",
            "twitter url ": "https://x.com/nyenchenpepe/",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1842796845820731393/Kpti13ZV_400x400.jpg",
            "Score": 59,
            "Token 1": "KOI",
            "Increase 1": 1.374,
            "代币头像URL": "https://dd.dexscreener.com/ds-data/tokens/sui/0x01d430425a8a681ef26315e78a082fe744f8d0bbdbd1ab76b9fd78ada09bedca::koi::koi.png?size=lg&key=c6a178",
            "Token 2": "PAC",
            "Increase 2": 0.6247,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x4c44a8b7823b80161eb5e6d80c014024752607f2.png?size=lg&key=59b6c4"
        },
        {
            "KOL Name": "Hamburger",
            "twitter url ": "https://x.com/mayangdarana",
            "twitter_avatar": "https://pbs.twimg.com/profile_images/1805533654397206529/EZ3QvAeq_400x400.jpg",
            "Score": 58.93,
            "Token 1": "BITGOLD",
            "Increase 1": 3.9731,
            "代币头像URL": "-",
            "Token 2": "POCHITA",
            "Increase 2": 2.6391,
            "代币头像URL_1": "https://dd.dexscreener.com/ds-data/tokens/ethereum/0x92d001c60df1c2248ae9020bbac559331cefcdec.png?size=lg&key=d017d9",
            "Token 3": "BLOCK170",
            "Increase 3": 2.2578,
            "代币头像URL_2": "-"
        }
    ],
    laomo_raw: {
        kol_name: "Ed",
        twitter: "Ed_x0101",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
        score: 79,
        recommendedNum: 30
    },
    geju_raw: {
        kol_name: "韩跑跑",
        twitter: "Laojiucai_02",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
        score: 70.53
    }
};

function convertFormat(inputData: any) {
    return inputData.map(item => {
        const tokenRecommend = [];

        for (let i = 1; i <= 3; i++) {
            if (item[`Token ${i}`]) {
                tokenRecommend.push({
                    token: item[`Token ${i}`],
                    increase: `${(item[`Increase ${i}`] * 100).toFixed(2)}%`,
                    token_image: item[`代币头像URL${i === 1 ? '' : '_' + (i - 1)}`]
                });
            }
        }

        return {
            kol_name: item["KOL Name"],
            twitter: item["twitter url "].split("/").pop(),
            twitter_avatar: item.twitter_avatar,
            score: Math.round(item.Score),
            token_recommend: tokenRecommend
        };
    });
}

export default function KolRankInputPage() {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
            setError(null); // 清除之前的错误
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setError('请选择一个文件上传。');
            return;
        }

        try {
            const fileContent = await file.text();
            let jsonData = JSON.parse(fileContent);

            const converte_kol_data_raw = convertFormat(jsonData.kol_data_raw)

            templateJson.kol_data_raw = converte_kol_data_raw

            jsonData = templateJson
            console.log("converted::", jsonData)

            // 验证JSON数据结构
            if (!jsonData.headerData || !jsonData.kol_data_raw || !jsonData.laomo_raw || !jsonData.geju_raw) {
                throw new Error('JSON文件结构不正确。请确保包含所有必要的字段。');
            }

            navigate('/kolrank', {
                state: jsonData
            });
        } catch (error) {
            if (error instanceof Error) {
                setError(`无效的JSON文件: ${error.message}`);
            } else {
                setError('发生未知错误。请检查您的输入。');
            }
            console.error(error);
        }
    };

    const handleDownloadTemplate = () => {
        const jsonString = JSON.stringify(templateJson, null, 2);
        const blob = new Blob([jsonString], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'kol_rank_template.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">KOL排名数据输入</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="jsonFile" className="block mb-2">上传JSON文件：</label>
                    <input
                        type="file"
                        id="jsonFile"
                        accept=".json"
                        onChange={handleFileChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    提交并前往KOL排名页面
                </button>
            </form>
            <div className="mt-4">
                <button onClick={handleDownloadTemplate}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    下载模板JSON
                </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
                <p>请上传包含以下结构的JSON文件：</p>
                <ul className="list-disc list-inside mt-2">
                    <li>headerData: 包含标题信息</li>
                    <li>kol_data_raw: KOL数据数组</li>
                    <li>laomo_raw: 特定KOL数据</li>
                    <li>geju_raw: 另一个特定KOL数据</li>
                </ul>
                <p className="mt-2">您可以下载模板JSON文件作为参考。</p>
            </div>
        </div>
    );
}