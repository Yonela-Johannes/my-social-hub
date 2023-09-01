import { BiBookHeart, BiMessageAlt, BiNews } from 'react-icons/bi';
import { RiVideoLine, RiImage2Fill } from 'react-icons/ri';
import hlomla from '../assets/hlomla.png'
import yonela from '../assets/yonela.jpg'
import iniko from '../assets/iniko.jpeg'
import diamond from '../assets/diamond.jpeg'

import {
  MdOutlineChat,
  MdOutlineVideoLibrary,
  MdOutlineBusiness,
  MdOutlineSlowMotionVideo,
  MdOutlineInfo,
} from 'react-icons/md';
import { HiCodeBracket } from 'react-icons/hi2';

export const servers = [
  {
    name: 'General',
    image: hlomla,
  },
  {
    name: 'Team',
    image: yonela,
  },
  {
    name: 'Nomi',
    image: iniko,
  },
  {
    name: 'Administrator',
    image: diamond,
  },
]
export const sidebarLinks = [

  { id: 10,
    click: 'post',
    name: 'Post', to: '/posts', icon: BiMessageAlt },
  { id: 1,
    click: 'blog',
    name: 'Blog', to: '/blogs', icon: MdOutlineChat },
  { id: 8,
    click: 'gallery',
    name: 'Gallery', to: '/gallery', icon: RiImage2Fill },
  { id: 4,
    click: 'videos',
    name: 'Videos', to: '/videos', icon: MdOutlineSlowMotionVideo },
  { id: 20,
    click: 'dev',
  name: 'Dev', to: '/devs', icon: HiCodeBracket },
  { id: 9,
    click: 'qna',
    name: 'Q&A', to: '/qna', icon: MdOutlineInfo
  },
];

export const adminLinks = [
  { id: 10,
    click: 'post',
    name: 'Post', to: '/posts-list', icon: BiMessageAlt },
  { id: 1,
    click: 'blog',
    name: 'Blog', to: '/blogs-list', icon: MdOutlineChat },
  { id: 8,
    click: 'gallery',
    name: 'Gallery', to: '/gallery', icon: RiImage2Fill },
  { id: 4,
    click: 'videos',
    name: 'Videos', to: '/videos', icon: MdOutlineSlowMotionVideo },
  { id: 2,
    click: 'dev',
    name: 'Dev', to: '/devs', icon: HiCodeBracket },
    { id: 25,
      click: 'work',
      name: 'Work', to: '/work-list', icon: HiCodeBracket },
  { id: 9,
    click: 'qna',
    name: 'Q&A', to: '/qna-list', icon: MdOutlineInfo
  },

];

export const links = [
  { id: 7,
    click: 'post',
    name: 'Post', to: '/posts', icon: BiMessageAlt },
  { id: 1,
    click: 'blog',
    name: 'Blog', to: '/blogs', icon: MdOutlineChat },
  { id: 2,
    click: 'stories',
    name: 'Story', to: '/stories', icon: BiBookHeart },
  { id: 3,
    click: 'reels',
    name: 'Reel', to: '/reels', icon: RiVideoLine },
  { id: 4,
    click: 'videos',
    name: 'Video', to: '/videos', icon: MdOutlineVideoLibrary },
];
