import "./styles.css";
import {Acardion} from "./components/Acardion";
import {Raiting, RaitingvalueType} from "./components/Raiting";
import {OnnOff} from "./components/OnOff";
import {AcardionUse} from "./components/AcardionUse";
import {RaitingUse} from "./components/RaitingUse";
import {useState} from "react";
import {OnnOffAnControl} from "./components/OnOffAnControl";

export default function App() {
    let [reitingVelue, setReitingValue] = useState<RaitingvalueType>(2);
    let [acardionValue, setacardionValue] = useState(true)
    let [swichOnon, setSwichOnon] = useState(false)


    return (
        <div className="App">
            <OnnOff on={swichOnon} onChange={setSwichOnon}/>
            <OnnOffAnControl onChange={setSwichOnon}/>

            <PageTitle PageTitle={"This is Appa component"}/>
            <PageTitle PageTitle={"My friend"}/>
            <Raiting value={reitingVelue} onClick={setReitingValue}/>
            <AcardionUse titleValue={"Menu"}/>
            <AcardionUse titleValue={"Users"}/>
            <Acardion titleValue={"Menu"} colapsed={acardionValue} onChange={() => {
                setacardionValue(!acardionValue)
            }}/>
            <Acardion titleValue={"Users"} colapsed={acardionValue} onChange={() => {
                setacardionValue(!acardionValue)
            }}/>
            <Raiting value={reitingVelue} onClick={setReitingValue}/>
            <RaitingUse/>
        </div>
    );
}

type PageTitlePropsType = {
    PageTitle: string;
};

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.PageTitle}</h1>;
};
