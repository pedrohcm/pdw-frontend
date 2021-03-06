import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Busca = ({ handleChange }) => (
  <Menu.Item>
    <Input action='Buscar' icon placeholder='Digite um jogo...' onChange={handleChange}>
    </Input>
  </Menu.Item>
)

export default Busca;