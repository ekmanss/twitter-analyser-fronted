import KolrankHeader from "@/routes/kolrank-header.tsx";
import KolRankTable from "@/routes/kolrank-table.tsx";
import {useLocation} from "react-router-dom";

export default function KolRankPage() {

    // const headerData = updateKOLRankData.headerData;
    // const kol_data_raw = updateKOLRankData.kol_data_raw;
    // const laomo_raw = updateKOLRankData.laomo_raw;
    // const geju_raw = updateKOLRankData.geju_raw;

    const location = useLocation();
    const updateKOLRankData = location.state as {
        headerData: any;
        kol_data_raw: any[];
        laomo_raw: any;
        geju_raw: any;
    };

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
