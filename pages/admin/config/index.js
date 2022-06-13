
import Link from "next/link";
import { useState } from "react";
import HorisontalNavbar from "../../../components/HorisontalNavbar";
import StudentVerticalNavbar from "../../../components/StudentVerticalNavbar";
import DownIcon from "../../../icons/DownIcon"
import ArrowIcon from "../../../icons/ArrowIcon";
import AffecterTheme from "./AffecterTheme";
import AdminVerticalNavbar from "../../../components/AdminVerticalNavbar";


const config = props => {

    const [promotion , setPromotion] = useState(
        [
            {promo : ["2CPI"]} , 
            {promo : ["1CS"]} , 
            {promo : ["2CS"]} , 
            {promo : ["3CS"]} , 
        ]  
    )
    
    const [affecterTheme , setAffecterTheme] = useState(false)
    const [affecterThemeEquipe , setAffecterThemeEquipe] = useState(false)
    const [affecterThemeEnseignant , setAffecterThemeEnseignant] = useState(false)
    const [affectationThemeFifo , setAffectationThemeFifo] = useState(false)
    const [affecterThemeMoy , setAffecterThemeMoy] = useState(false)
    const [validerEquipes , setvaliderEquipe] = useState(false)
    const [ValiderEquipePromotion , setValiderEquipePromotion] = useState(promotion)
    const [downIconValiderEquipePromotion , setDownIconValiderEquipePromotion] = useState(false)
    const [longueur , setLongueur] = useState(ValiderEquipePromotion.length)
    const [choosenPromo , setChoosenPromo] = useState(false)
    const [minEtudiantEquipe , setMinEtudiantEquipe] = useState(1)
    const [maxEtudiantEquipe , setMaxEtudiantEquipe] = useState(1)
    const [affecterEtudiantSansEquipes , setAffecterEtudiantsSansEquipes] = useState(false)
    const [bouttonAffectationEquipe , setBouttonAffectationEquipes] = useState(false)
    const [conpleterEquipes , setCompleterEquipes] = useState(false)
    const [bouttonCompleterEquipe , setBouttonComplterEquipes] = useState(false)

    const clickChoixPromotionHandler = (element) => 
        {
           
                setValiderEquipePromotion(element.promo) ; 
                setLongueur(ValiderEquipePromotion.length) ; 
                setDownIconValiderEquipePromotion(false)
          
        }

    const clickValiderAffectationAutomatique = (e) => {
        bouttonAffectationEquipe === true ? setAffecterEtudiantsSansEquipes(true) : setCompleterEquipes(true) ; 
        setBouttonAffectationEquipes(false) ; 
        setBouttonComplterEquipes(false)
    }
    
    return (
        <div>
            <AdminVerticalNavbar/>
            <HorisontalNavbar/>
            <div className="bg-background space-x-10 h-screen w-screen relative flex flex-row items-center justify-center font-xyz text-textcolor">
                <div className="flex items-center justify-center relative flex-col text-[20px]">
                    <div className="text-[30px] absolute top-10">Centre de contrôl :</div>
                    <img 
                        src="/config.jpg" 
                        className={`h-[600px] object-contain mix-blend-darken ${validerEquipes === true || affecterTheme === true ? "opacity-20":""}`}
                    />
                    
                    <div className={`absolute h-[300px] w-[400px] z-50 bg-white space-y-6 shadow-lg rounded-xl flex-col justify-center items-center flex ${(bouttonAffectationEquipe === true) ||  bouttonCompleterEquipe === true ? "flex":"hidden"}`}>
                        <div className="text-center">{bouttonAffectationEquipe === true ? "En cliquant sur valider , l'affectation se fera de manière automatique" : "En cliquant sur valider , les équipes non satisfaisantes les condition seront complété aléatoirement"}</div>
                        <button 
                            className="h-[40px] w-[120px] hover:bg-blue-500 bg-[#8FD4FB] rounded-full" 
                            onClick={(e) => clickValiderAffectationAutomatique(e)}
                        >
                            Valider
                        </button>
                    </div>
                </div>

                <div className="flex flex-col fit p-3 w-[350px] bg-white text-[20px] rounded-lg shadow-lg">
                    <Link href='/addstudent'>
                        <button className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent">Ajouter des étudiant</button>
                    </Link>
                    <Link href='/addteacher'>
                        <button className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent">Ajouter des enseignant</button>
                    </Link>
                    <Link href='/admin/addentreprise'>
                        <button className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent">Ajouter des entreprise</button>
                    </Link>
                    <Link href='/admin/studentlist'>
                        <button className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent">Liste des étudiants</button>
                    </Link>
                    <Link href='/admin/teacherlist'>
                        <button className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent">Liste des enseignant</button>
                    </Link>
                    <button 
                        className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent" 
                        onClick={(e) => setvaliderEquipe(true)}
                    >
                        Valider les équipes
                    </button>
                    <Link href="/theme">
                        <button className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent">Valider les thèmes</button>
                    </Link> 
                    <button 
                        className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent"
                        onClick={(e) => setAffecterTheme(true)}
                    >
                        Affecter les thèmes
                    </button>
                    <button 
                        className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent"
                        
                    >
                        Affecter les equipes
                    </button>
                    <Link href="/admin/fichevoeux">
                        <button className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent">Fiches de voeux</button>
                    </Link>
                    <button 
                        className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent"
                        
                    >
                        Préparer les soutenances
                    </button>
                    <button 
                        className="h-[40px] w-full hover:border-2 border-y-slate-200 border-x-transparent"
                        
                    >
                        Rapport de projet
                    </button>
                </div>
            </div>
        </div>
    )
}
export default config;