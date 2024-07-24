import { ModalData } from "../modal/modal.store";

interface User {
  id: string
  name: string
  src: string
  status: 'Ativo' | 'Caído' | 'Vencedor'
  fallen_time?: string
}

export const users = [
  {
    id: '0',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '1',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '2',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '3',
    name: 'Seth',
    src: '/caido.jpg',
    status: 'Caído',
    fallen_time: '01/09 01:10'
  },
  {
    id: '4',
    name: 'Seth',
    src: '/caido.jpg',
    status: 'Caído',
    fallen_time: '02/09 11:00'
  },
  {
    id: '5',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '6',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '7',
    name: 'Seth',
    src: '/caido.jpg',
    status: 'Caído',
    fallen_time: '05/09 00:00'
  },
  {
    id: '8',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '9',
    name: 'Seth',
    src: '/caido.jpg',
    status: 'Caído',
    fallen_time: '09/09 02:45'
  },
  {
    id: '10',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '11',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '12',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '13',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '14',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '15',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '16',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '17',
    name: 'Seth',
    src: '/caido.jpg',
    status: 'Caído',
    fallen_time: '11/09 11:11'
  },
  {
    id: '18',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
  {
    id: '19',
    name: 'Seth',
    src: '/ativo.jpg',
    status: 'Ativo'
  },
] as User[]