import ModelPage from "@/components/ModelPage";
import {getModel} from "@/data/models";
import {asset} from "@/lib/asset";

const model=getModel("nordhus-92");
const description=model.description+" "+model.price+".";

export const metadata={
 title:"NORDHUS 92 — dom modułowy 92 m²",
 description,
 openGraph:{title:"NORDHUS 92 — dom modułowy 92 m² | NORDHUS",description,images:[asset("/images/model-92.jpg")],type:"website"},
 twitter:{card:"summary_large_image",title:"NORDHUS 92 — dom modułowy 92 m² | NORDHUS",description,images:[asset("/images/model-92.jpg")]}
};

export default function Page(){return <ModelPage model={model}/>}
