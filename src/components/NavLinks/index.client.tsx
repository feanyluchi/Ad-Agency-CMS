'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Logout, useConfig, useTheme } from '@payloadcms/ui'
import './index.css'

const styles = {
  navLists: {
    padding: '60px 20px 0 20px',
    position: 'sticky',
  },
  nav: {
    marginTop: '10px',
  },
  link: {
    display: 'block',
    margin: '5px 0',
    color: 'var(--nav-link)',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  } as React.CSSProperties,
  section: {
    marginBottom: '20px',
  },
  noItems: {
    color: 'var(--nav-label)',
    fontSize: '12px',
  },
}

const NavLinks: React.FC = () => {
  const { config } = useConfig()
  const { routes: { admin: adminRoute }, collections, globals } = config


  const { theme } = useTheme()

  useEffect(() => {
    // Set the data-theme attribute on the root element based on the current theme
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const filteredCollections = collections.filter(
    (collection: any) =>
      collection.slug !== 'payload-preferences' && collection.slug !== 'payload-migrations',
  )

  const groupedCollections = filteredCollections.reduce((acc: any, collection: any) => {
    const group = collection.admin.group || 'Other'
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(collection)
    return acc
  }, {})

  return (
    <div className="navbar">
      <nav style={styles.nav}>
        {Object.keys(groupedCollections).map((group) => (
          <div style={styles.section} key={group}>
            <div className="nav_label">{group}</div>
            {groupedCollections[group].map((collection: any) => (
              <Link
                href={`${adminRoute}/collections/${collection.slug}`}
                key={collection.slug}
                style={styles.link}
                className="nav_link"
              >
                {collection.labels.plural}
              </Link>
            ))}
          </div>
        ))}
        <div style={styles.section}>
          <div className="nav_label">Globals</div>
          {globals && globals.length > 0 ? (
            globals.map((global: any) => (
              <Link
                href={`${adminRoute}/globals/${global.slug}`}
                key={global.slug}
                style={styles.link}
                className="nav_link"
              >
                {global.label}
              </Link>
            ))
          ) : (
            <p style={styles.noItems}>No globals available</p>
          )}
        </div>
      </nav>
      <div className="logout_container">
        <Logout />
      </div>
    </div>
  )
}

export default NavLinks