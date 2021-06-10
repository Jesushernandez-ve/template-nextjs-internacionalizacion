import React from 'react'
import { useRouter } from 'next/router'

export default function LanguagueSelection() {
  const router = useRouter()

  const changeLang = (e) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    })
  }
  return (
    <select onChange={changeLang}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  )
}
