import { useState } from "react"
import Link from "next/link"
import HorisontalNavbar from "../../components/HorisontalNavbar"
import StudentVerticalNavbar from "../../components/StudentVerticalNavbar"
import DownIcon from "../../icons/DownIcon"
import UpIcon from "../../icons/UpIcon"

const theme = props => {

    const [equipes , setEquipe] = useState(
        [
            {
                nomEquipe : "IT experts",
                lienProfil : "/"
            },
            {
                nomEquipe : "IT experts 2",
                lienProfil : "/"
            },
            {
                nomEquipe : "IT experts 3",
                lienProfil : "/"
            },
        ]
    ) 
    const [encadreur , setEncadreur] = useState(
        [
            {
                nomEncadreur : "Malki Mimoun",
                lienProfil : "/login"
            },
            {
                nomEncadreur : "Malki Mimouna",
                lienProfil : "/theme"
            },
            {
                nomEncadreur : "Mimouna Malki",
                lienProfil : "/chat"
            },
        ]
    ) 
   
    const userType = "admin"
    const [modifier , setModifier] = useState(false)
    const [idtheme , setIdtheme] = useState(1)
    const [title , setTilte] = useState("PFE")
    const [description , setDescription] = useState("Plateforme de gestion des projets de fin d'études")
    const [specialite , setSpecialite] = useState("Application web")
    const [document , setDocument] =useState("document")
    const [countEncadreur , setCountEncadreur] = useState(encadreur.length)
    const [countEquipe , setCountEquipe] = useState(equipes.length)
    const [clickDownEquipe, setClickDownEquipe] = useState (false)
    const [clickDownEncadreur , setClickDownEncadreur] = useState (false)
    const [clickUpEquipe, setClickUpEquipe] = useState (false)
    const [clickUpEncadreur , setClickUpEncadreur] = useState (false)

    return (
        <div>
            <StudentVerticalNavbar/>
            <HorisontalNavbar/>
            <div className="bg-background h-screen w-screen relative flex flex-col items-center space-y-16 font-xyz text-textcolor justify-center">
                <div className="flex flex-col items-center justify-center">
                    <img src="/themeStudent.png" className="mix-blend-darken absolute"/>
                    <div className={`p-10 justify-center flex-col space-y-8 h-[500px] w-fit px-10 bg-white/70 backdrop-blur-sm shadow-lg rounded-xl text-[16px] ${idtheme === 1 ? "flex" : "hidden"}`}>
                        <div className="flex flex-row items-center space-x-4 text-[26px]">
                            <div className="text-[28px]">Titre :</div>
                            <div className={` ${modifier === false ? "flex" : "hidden"}`}>{title}</div>
                            <input value={title} className={`${modifier === true ? "flex" : "hidden"}`} onChange={(e) => {setTilte(e.target.value)}}/>
                        </div>
                        <div className="flex items-center flex-row space-x-4">
                            <div className="text-[19px]">Description :</div>
                            <div className={`${modifier === false ? "flex" : "hidden"}`}>{description}</div>
                            <input value={description} className={`${modifier === true ? "flex" : "hidden"}`} onChange={(e) => {setDescription(e.target.value)}}/>
                        </div>
                        <div className="flex items-center flex-row space-x-4">
                            <div className="text-[19px]">Spécialité :</div>
                            <div className={`${modifier === false ? "flex" : "hidden"}`}>{specialite}</div>
                            <input value={specialite} className={`${modifier === true ? "flex" : "hidden"}`} onChange={(e) => {setSpecialite(e.target.value)}}/>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="text-[19px]">Document(s) :</div>
                            <div className={`${modifier === false ? "flex" : "hidden"}`}>{document}</div>
                            <input value={document} className={`${modifier === true ? "flex" : "hidden"}`} onChange={(e) => {setDocument(e.target.value)}}/>
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                                <div className="text-[19px]">Encadreur(s) :</div>
                                {
                                    encadreur.map((element , index)=> {
                                        return(
                                            <div className={`${countEncadreur > 2 && index > 1 ? (clickDownEncadreur === true ? "flex" : "hidden") : "flex"}`}>
                                                <div className={`items-center justify-center flex-col space-y-10 hover:text-blue-500 bg-blue-300/20 backdrop-blur-lg rounded-full px-3 ${modifier === false ? "flex" : "hidden"}`}>{element.nomEncadreur}</div>
                                                <input value={element.nomEncadreur} className={`${modifier === true ? "flex" : "hidden"}`}/>
                                            </div>
                                        )
                                    })
                                }
                                <button className={`${clickDownEncadreur === true ? "hidden" : "flex"}`} onClick={(e) => {setClickDownEncadreur(true)}}><DownIcon/></button>
                                <button className={`${clickDownEncadreur === true && clickUpEncadreur === false ? "flex" : "hidden"}`} onClick={(e) => {setClickUpEncadreur(true)}}><UpIcon/></button>
                            </div>
                            <div className="flex flex-row items-center space-x-4">
                                <div className="text-[19px]">Affécté à :</div>
                                {
                                    equipes.map((element , index)=> {
                                        return(
                                            <div className={` flex flex-row items-center justify-center ${countEquipe > 2 && index > 1 ? (clickDownEquipe === true ? "flex" : "hidden") : "flex"}`}>
                                                <div className={`items-center justify-center flex-col space-y-10 bg-blue-300/20 backdrop-blur-lg rounded-full px-3 hover:text-blue-500 ${modifier === false ? "flex" : "hidden"} `}>{element.nomEquipe}</div>
                                                <input value={element.nomEquipe} className={`${modifier === true ? "flex" : "hidden"}`}/>
                                            </div>
                                        )
                                    })
                                }
                                <button className={`${clickDownEquipe === true ? "hidden" : "flex"}`} onClick={(e) => {setClickDownEquipe(true)}}><DownIcon/></button>
                            </div>
                        <div className="flex items-center justify-center">
                        <button className="h-[40px] w-[120px] text-[18px] bg-blue-300 hover:bg-blue-400 rounded-full " onClick={(e)=>setModifier(true)}>Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default theme;