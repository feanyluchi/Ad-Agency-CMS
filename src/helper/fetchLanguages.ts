const languageNameMapping: Record<string, Record<string, string>> = {
  en: { en: 'English' },
  nl: { en: 'Dutch', nl: 'Nederlands' },
  es: { en: 'Spanish', es: 'Español' },
  fr: { en: 'French', fr: 'Français' },
  de: { en: 'German', de: 'Deutsch' },
}

export interface LanguageOption {
  code: string
  label: Record<string, string>
}

/**
 * Fetch languages from the website settings API
 */
export const fetchLanguages = async (): Promise<LanguageOption[]> => {
  try {
    const apiKey = process.env.PUBLIC_API_KEY
    const apiUrl = `${process.env.PUBLIC_API_URL}/websitesetting/websitesetting/view-websitesetting`

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey || '',
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    return data.data.languages.map((language: any) => {
      const languageCode = language.code
      const languageLabel = languageNameMapping[languageCode] || { en: languageCode }

      return {
        code: languageCode,
        label: languageLabel,
      }
    })
  } catch (error) {
    console.error('Error fetching languages:', error)
    return []
  }
}
