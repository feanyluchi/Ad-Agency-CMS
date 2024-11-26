'use client'

import * as React from 'react'
import { useField } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'

type Props = TextFieldClientProps & { apiUrl: string; apiKey: string }

export const CustomTagSelector: React.FC<Props> = ({ apiUrl, apiKey }) => {
  const { value, setValue, path } = useField<string>({})
  const [hashtags, setHashtags] = React.useState<{ id: string; name: string }[]>([])

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
        setHashtags(data.data.map((tag: { _id: string; name: string }) => ({
          id: tag._id,
          name: tag.name,
        })))
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
      <label className="field-label">Tags</label>
      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', margin: '20px 0' }}>
        {hashtags.map((tag, index) => (
          <div
            key={tag.id}
            onClick={() => handleSelect(tag.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '2px 7px',
              borderRadius: '0px',
              cursor: 'pointer',
              backgroundColor: getRandomColor(index),
              color: 'white',
              fontWeight: 'bold',
              fontSize: '10px',
              letterSpacing: '1px',
              position: 'relative',
              textTransform: "uppercase",
              boxShadow: value === tag.id ? '0 0 10px rgba(255, 255, 255, 0.8)' : '0 2px 4px rgba(0, 0, 0, 0.2)',
              transform: value === tag.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease',
            }}
          >
            {tag.name}
            <span
              style={{
                position: 'absolute',
                right: '-12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '0',
                height: '0',
                borderStyle: 'solid',
                borderWidth: '12px 0 12px 12px',
                borderColor: `transparent transparent transparent ${getRandomColor(index)}`,
              }}
            ></span>
            <div
              style={{
                position: 'absolute',
                right: '-6px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

const getRandomColor = (index: number) => {
  const colors = ['#FF5733', '#32620e', '#3357FF', '#FF33A8', '#A833FF', '#FF8C33']
  return colors[index % colors.length]
}
