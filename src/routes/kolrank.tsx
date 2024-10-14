import KolrankHeader from "@/routes/kolrank-header.tsx";
import KolRankTable from "@/routes/kolrank-table.tsx";

export default function KolRankPage() {
    return (
        <div className="bg-black min-h-screen">
            <KolrankHeader/>
            <KolRankTable/>
        </div>
    );
}
