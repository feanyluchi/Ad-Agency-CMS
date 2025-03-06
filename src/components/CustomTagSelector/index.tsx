'use client'

import * as React from 'react'
import { useField, useTheme } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'
import { withRouter } from 'next/router'

type Props = TextFieldClientProps & { apiUrl: string; apiKey: string; path: any }

export const CustomTagSelector: React.FC<Props> = ({ apiUrl, apiKey, path }) => {
  const { value, setValue } = useField<string>({
    path: path || '',
  })

  const [hashtags, setHashtags] = React.useState<{ id: string; name: string }[]>([])
  const { theme } = useTheme()
  const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    setCurrentTheme(theme) // Update theme state
  }, [theme])

  React.useEffect(() => {
    const fetchHashtags = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            'X-Api-Key': `${apiKey}`,
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json()
        setHashtags(
          data.data.map((tag: { _id: string; name: string }) => ({
            id: tag._id,
            name: tag.name,
          })),
        )
      } catch (error) {
        console.error('Error fetching hashtags:', error)
      }
    }

    fetchHashtags()
  }, [apiUrl, apiKey])

  const handleSelect = (id: string) => {
    setValue(id)
  }

  return (
    <div>
      <label className="field-label">Property Tags</label>
      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', margin: '20px 0' }}>
        {hashtags.map((tag, index) => {
          const isActive = value === tag.id
          const tagColor = getRandomColor(index)

          // Dynamic shadow based on theme
          const shadowColor = currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.3)'

          return (
            <div
              key={tag.id}
              style={{
                display: 'inline-block',
                padding: '5px', // Space for the shadow to show
                boxShadow: isActive ? `0px 0px 15px ${shadowColor}` : 'none', // Dynamic shadow
                borderRadius: '5px', // Soft rounded glow
              }}
            >
              <div
                onClick={() => handleSelect(tag.id)}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: isActive ? '6px 20px 6px 12px' : '2px 20px 2px 7px',
                  cursor: 'pointer',
                  backgroundColor: tagColor,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: isActive ? '14px' : '10px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)', // Keeps arrow shape
                  transition: 'all 0.3s ease',
                }}
              >
                {tag.name}
                {/* White Dot */}
                <div
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '4px',
                    borderRadius: '100%',
                    backgroundColor: 'white',
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const getRandomColor = (index: number) => {
  const colors = ['#FF5733', '#32620e', '#3357FF', '#FF33A8', '#A833FF', '#FF8C33']
  return colors[index % colors.length]
}
