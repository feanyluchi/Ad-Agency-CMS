'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logout, useConfig, useTheme } from '@payloadcms/ui'
import './index.css'
import useFetchDocs from '@/hook/useFetchDocs'

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
  const {
    routes: { admin: adminRoute },
    collections,
    globals,
  } = config
  const { theme } = useTheme()

  const { isLoading, docs } = useFetchDocs()

  const filteredCollections = collections.filter(
    (collection: any) =>
      collection.slug !== 'payload-preferences' && collection.slug !== 'payload-migrations' && collection.slug !== 'payload-locked-documents',
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
        {isLoading ? (
          <span>...</span> // Replace with your loading spinner or message
        ) : (
          Object.keys(groupedCollections).map((group) => (
            <div style={styles.section} key={group}>
              <div className="nav_label">{group}</div>
              {groupedCollections[group].map((collection: any) => (
                <div key={collection.slug}>
                  <Link
                    href={
                      collection.admin.group === 'Single Pages' && docs[collection.slug]?.length > 0
                        ? `${adminRoute}/collections/${collection.slug}/${docs[collection.slug][0].id}`
                        : `${adminRoute}/collections/${collection.slug}`
                    }
                    style={styles.link}
                    className="nav_link"
                  >
                    {collection.labels.plural}
                  </Link>
                </div>
              ))}
            </div>
          ))
        )}
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
