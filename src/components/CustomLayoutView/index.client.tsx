'use client'

import React, { useEffect, useState } from 'react'
import { Gutter } from '@payloadcms/ui'
import { useConfig, useTheme } from '@payloadcms/ui'
import Link from 'next/link'
import './index.css'
import Image from 'next/image'

// Import dark mode icons
import Home from '../../graphics/BxHome.svg'
import Globe from '../../graphics/BxGlobe.svg'
import MediaIcon from '../../graphics/BxBxsImageAdd.svg'
import UserIcon from '../../graphics/BxBxsUserCircle.svg'
import FileIcon from '../../graphics/BxFileBlank.svg'
import CopyIcon from '../../graphics/BxCopyAlt.svg'
import EditIcon from '../../graphics/BxBxsEditAlt.svg'

// Import light mode icons
import HomeLight from '../../graphics/BxHomeDark.svg'
import GlobeLight from '../../graphics/BxGlobeDark.svg'
import MediaIconLight from '../../graphics/BxBxsImageAddDark.svg'
import UserIconLight from '../../graphics/BxBxsUserCircleDark.svg'
import FileIconLight from '../../graphics/BxFileBlankDark.svg'
import CopyIconLight from '../../graphics/BxBxsCopyAlt.svg'
import EditIconLight from '../../graphics/BxBxsEditAltLight.svg'
import useFetchDocs from '@/hook/useFetchDocs'

const CustomViewClient: React.FC = () => {
  const { config } = useConfig()
  const { collections, globals } = config
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

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  }

  return (
    <div className="gutter_background">
      <Gutter className="dashboard__wrap">
        <div className="main_container">
          {isLoading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div> // Replace with your loading spinner
          ) : (
            Object.keys(groupedCollections).map((group) => (
              <div style={{ marginBottom: '40px' }} key={group}>
                <h2
                  style={{
                    fontSize: '34px',
                    paddingBottom: '12px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: 'var(--text-color)',
                  }}
                >
                  {group}
                </h2>
                <div className="group_container">
                  <div className="group_flex">
                    {groupedCollections[group].map((collection: any) => (
                      <div key={collection.slug} className="channel_style">
                        <Link
                          href={
                            collection.admin.group === 'Single Pages' &&
                            docs[collection.slug]?.length > 0
                              ? `/admin/collections/${collection.slug}/${docs[collection.slug][0].id}`
                              : `/admin/collections/${collection.slug}`
                          }
                          style={{
                            borderRadius: '7px',
                            textAlign: 'center',
                            color: 'var(--text-color)',
                            fontSize: '14px',
                            fontWeight: '500',
                            textDecoration: 'none',
                          }}
                        >
                          <div className="">
                            <div className="link_container">
                              {collection.labels.plural}
                              <Image
                                src={
                                  theme === 'dark'
                                    ? collection.slug === 'media'
                                      ? MediaIcon
                                      : collection.slug === 'homepage'
                                        ? Home
                                        : collection.slug === 'users'
                                          ? UserIcon
                                          : collection.slug === 'servicesRendered'
                                            ? CopyIcon
                                            : FileIcon
                                    : collection.slug === 'media'
                                      ? MediaIconLight
                                      : collection.slug === 'homepage'
                                        ? HomeLight
                                        : collection.slug === 'users'
                                          ? UserIconLight
                                          : collection.slug === 'servicesRendered'
                                            ? CopyIconLight
                                            : FileIconLight
                                }
                                alt=""
                                className="link_icon"
                              />
                            </div>
                          </div>
                        </Link>

                        {/* Display the documents for collections in 'Channels Pages' group */}
                        {collection.admin.group === 'Channels Pages' && (
                          <div className="channel_list" style={{ marginTop: '0px' }}>
                            {docs[collection.slug] && docs[collection.slug].length > 0 ? (
                              <div>
                                {/* Slice the array to limit the number of displayed items to 3 */}
                                {docs[collection.slug].slice(0, 3).map((doc: any) => (
                                  <div key={doc.id}>
                                    {/* Link for title with text truncation */}
                                    <Link
                                      className="channel_item"
                                      href={`/admin/collections/${collection.slug}/${doc.id}`}
                                      style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                                    >
                                      <div className="">
                                        {truncateText(doc.home?.title || `Document ${doc.id}`, 30)}
                                      </div>
                                      <Image
                                        src={theme === 'dark' ? EditIcon : EditIconLight}
                                        alt="edit"
                                        className="link_icon"
                                      />
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p>No documents available for this collection</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}

          <div style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '34px',
                paddingBottom: '12px',
                fontWeight: '600',
                marginBottom: '8px',
                color: 'var(--text-color)',
              }}
            >
              Globals
            </h2>
            <div className="group_container">
              <div className="group_flex">
                {globals && globals.length > 0 ? (
                  globals.map((global: any) => (
                    <Link
                      href={`/admin/globals/${global.slug}`}
                      style={{
                        borderRadius: '7px',
                        textAlign: 'center',
                        color: 'var(--text-color)',
                        fontSize: '14px',
                        fontWeight: '500',
                        textDecoration: 'none',
                      }}
                      key={global.slug}
                    >
                      <div className="link_container channel_style">
                        {global.label}
                        <Image
                          src={theme === 'dark' ? Globe : GlobeLight}
                          alt=""
                          className="link_icon"
                        />
                      </div>
                    </Link>
                  ))
                ) : (
                  <p style={{ color: 'var(--text-color)', fontSize: '12px' }}>
                    No globals available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Gutter>
    </div>
  )
}

export default CustomViewClient
