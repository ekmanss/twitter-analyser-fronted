import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const templateJson = {
    headerData: {
        title: "9月第四周(8.19-8.26)"
    },
    kol_data_raw: [
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
    ],
    laomo_raw: {
        kol_name: "Ed",
        twitter: "Ed_x0101",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1588828286464888832/RRN2JuTl_400x400.jpg",
        score: 79
    },
    geju_raw: {
        kol_name: "韩跑跑",
        twitter: "Laojiucai_02",
        twitter_avatar:
            "https://pbs.twimg.com/profile_images/1801165763371528193/AvCfTG59_400x400.jpg",
        score: 70.53
    }
};

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
            const jsonData = JSON.parse(fileContent);

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
        const blob = new Blob([jsonString], { type: 'application/json' });
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
                <button onClick={handleDownloadTemplate} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
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