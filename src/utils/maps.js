
export const cats = [
    'allNews',
    'national',
    'business', 
    'sports', 
    'world', 
    'politics', 
    'technology', 
    'startup', 
    'entertainment', 
    'miscellaneous', 
    'hatke', 
    'science', 
    'automobile'
]

export const langs = [
    { lang: 'Arabic', code: 'ar' },
    { lang: 'Chinese', code: 'zh' },
    { lang: 'Dutch', code: 'nl' },
    { lang: 'English', code: 'en' },
    { lang: 'French', code: 'fr' },
    { lang: 'German', code: 'de' },
    { lang: 'Hindi', code: 'hi' },
    { lang: 'Italian', code: 'it' },
    { lang: 'Japanese', code: 'jp' },
    { lang: 'Korean', code: 'ko' },
    { lang: 'Polish', code: 'pl' },
    { lang: 'Portuguese', code: 'pt' },
    { lang: 'Russian', code: 'ru' },
    { lang: 'Spanish', code: 'es' },
    { lang: 'Turkish', code: 'tr' }
]

export const getLanguageCode = (language) => {
    for(let i=0;i<langs.length;i++) {
        if(langs[i].lang === language)
            return(langs[i].code);
    }
}

export const countries = [
    { country: 'Argentina', code: 'ar' },
    { country: 'Australia', code: 'au' },
    { country: 'Austria', code: 'at' },
    { country: 'Belgium', code: 'be' },
    { country: 'Brazil', code: 'br' },
    { country: 'Canada', code: 'ca' },
    { country: 'China', code: 'cn' },
    { country: 'Colombia', code: 'co' },
    { country: 'France', code: 'fr' },
    { country: 'Germany', code: 'de' },
    { country: 'Hungary', code: 'hu' },
    { country: 'India', code: 'in' },
    { country: 'Indonesia', code: 'id' },
    { country: 'Ireland', code: 'ie' },
    { country: 'Israel', code: 'il' },
    { country: 'Italy', code: 'it' },
    { country: 'Japan', code: 'jp' },
    { country: 'Lebanon', code: 'lb' },
    { country: 'Mexico', code: 'mx' },
    { country: 'Morocco', code: 'ma' },
    { country: 'Netherland', code: 'nl' },
    { country: 'NewZealand', code: 'nz' },
    { country: 'Nigeria', code: 'ng' },
    { country: 'NorthKorea', code: 'kp' },
    { country: 'Norway', code: 'no' },
    { country: 'Pakistan', code: 'pk' },
    { country: 'Philippines', code: 'ph' },
    { country: 'Poland', code: 'pl' },
    { country: 'Portugal', code: 'pt' },
    { country: 'Romania', code: 'ro' },
    { country: 'Russia', code: 'ru' },
    { country: 'SaudiArabia', code: 'sa' },
    { country: 'Serbia', code: 'rs' },
    { country: 'Singapore', code: 'sg' },
    { country: 'SouthAfrica', code: 'za' },
    { country: 'SouthKorea', code: 'kr' },
    { country: 'Spain', code: 'es' },
    { country: 'Sweden', code: 'se' },
    { country: 'Switzerland', code: 'ch' },
    { country: 'Taiwan', code: 'tw' },
    { country: 'Thailand', code: 'th' },
    { country: 'Turkey', code: 'tr' },
    { country: 'UAE', code: 'ae' },
    { country: 'UnitedKingdom', code: 'gb' },
    { country: 'USA', code: 'us' }
]

export const getCountryCode = (country) => {
    for(let i=0;i<countries.length;i++) {
        if(countries[i].lang === country)
            return(countries[i].code);
    }
}
