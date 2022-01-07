import React from 'react'

export const LanguageButton: React.FC = () => {
    const [language, setLanguage] = React.useState<string>('FR')

    const changeLanguage = () => {
        if (language === 'FR') {
            setLanguage('EN')
        } else {
            setLanguage('FR')
        }
    }
    return (
        <div className="text-base cursor-pointer mr-4" onClick={changeLanguage}>{language}</div>
    )
}