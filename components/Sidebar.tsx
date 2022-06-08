import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start '>
      <img className=" m-5 h-10 w-10" src ="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="Logo"/> 
      <SidebarRow Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={HashtagIcon} title="Explore"/>
      <SidebarRow Icon={BellIcon} title="Notifications"/>
      <SidebarRow Icon={MailIcon} title="Messages"/>
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
      <SidebarRow Icon={CollectionIcon} title="Lists"/>
      <SidebarRow Icon={UserIcon} title="Sign In"/>
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="more"/>
      </div>
      
     
  )
}

export default Sidebar