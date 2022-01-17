import React from "react"

export const LanguageButton: React.FC = () => {
    const [language, setLanguage] = React.useState<string>("FR")

    const changeLanguage = () => {
        if (language === "FR") {
            setLanguage("EN")
            document.documentElement.setAttribute("lang", "en")
        } else {
            setLanguage("FR")
            document.documentElement.setAttribute("lang", "fr")
        }
    }
    return (
        <div
            className="text-base cursor-pointer text-slate-800 dark:text-slate-200"
            onClick={changeLanguage}
        >
            {language}
        </div>
    )
}
