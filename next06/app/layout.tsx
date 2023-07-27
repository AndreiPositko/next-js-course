import './globals.css';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';
import { getSortedPostsData } from '../lib/posts';

export const metadata = {
  title: "Andrew's blog",
  description: 'Created by Andrew Positko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  getSortedPostsData();
  return (
    <html lang="en">
      <body className='dark:bg-slate-800 '>
        <Navbar/>
        <MyProfilePic/>
        {children}
      </body>
    </html>
  )
}
