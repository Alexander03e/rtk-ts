import { useState } from 'react'
import styled from 'styled-components'

export const ThemeSwitchBtn = styled.button`
  padding:0.6em;
  border-radius:1em;
  background-color: var(--main-color);
  border: 1px solid var(--text-color);
  color: var(--text-color);
  margin-bottom:2em;
`

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <>
      <ThemeSwitchBtn onClick={changeTheme}>Сменить тему на {theme === 'light' ? 'темную' : 'светлую'}</ThemeSwitchBtn>
    </>
  )
}