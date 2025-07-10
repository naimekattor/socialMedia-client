import React, { useContext, useEffect, useState } from 'react';
import img1 from '/img/img1.jpg'
import img2 from '/img/img2.jpg'
import img3 from '/img/img3.jpg'
import img4 from '/img/img4.jpg'
import img5 from '/img/img5.jpg'
import axios from 'axios';
import { AuthContext } from '@/context/authContext/AuthContext';
// Main App component
const Home = () => {
  // State for managing active navigation link (though not fully implemented for routing)
  const [activeNav, setActiveNav] = useState('home');
  const [userInfo,setUserInfo]=useState()


  const {user}=useContext(AuthContext);
  const userId=user?._id
  console.log(user);
  console.log(userInfo?.profilePicture);


  /* useEffect(()=>{
        axios.get(`http://localhost:5000/api/user/${userId}`,{
          withCredentials:true
        })
        .then(res=>{
          setUserInfo(res.data);
          
        }).catch(err=>{
          console.log(err);
          
        })
  },[]) */

  useEffect(() => {
  const fetchUser = async () => {
    try {
      if (!userId) return;
      const res = await axios.get(`http://localhost:5000/api/user/${userId}`, {
        withCredentials: true // 👈 send cookies
      })
      setUserInfo(res.data)
    } catch (err) {
      console.log("User not authenticated")
    }
  }

  fetchUser()
}, [])


  
  
  // Dummy data for posts to populate the feed
  const posts = [
    {
      id: 1,
      userName: 'Temitope Ibiyemi',
      userAvatar: img2, // Placeholder for user avatar
      postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      postImage: img2, // Placeholder for post image
      likes: '300k',
      comments: '3k',
      shares: '1k',
    },
    {
      id: 2,
      userName: 'Willian Smith',
      userAvatar: img3, // Placeholder for user avatar
      postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      postImage: img3, // Placeholder for post image
      likes: '150k',
      comments: '1.5k',
      shares: '500',
    },
    // Add more dummy posts as needed
  ];

  // Dummy data for stories
  const stories = [
    { id: 1, userAvatar: img2, userName: 'Story 1' },
    { id: 2, userAvatar: img3, userName: 'Story 2' },
    { id: 3, userAvatar: img4, userName: 'Story 3' },
    { id: 4, userAvatar: img5, userName: 'Story 4' },
    { id: 5, userAvatar: img1, userName: 'Story 5' },
  ];

  return (
    // Main container with a dark background and Inter font
    <div className="min-h-screen  text-white font-inter">
      {/* Header section */}
      <header className="fixed top-0 left-0 right-0  p-4 z-10 flex items-center justify-between shadow-lg max-w-3xl mx-auto">
        {/* User avatar in header */}
        <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-purple-500">
          <img src={userInfo?.profilePicture} alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        {/* Search input */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full p-2 rounded-full bg-[#e3e2e2]  text-[#9385b9] placeholder-[#9385b9] focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Placeholder for potential right-side header icon/menu */}
        <div className="w-10 h-10"></div>
      </header>

      {/* Main content area, adjusted for fixed header and footer */}
      <main className="pt-20 pb-20 overflow-y-auto">
        {/* Stories section */}
        <section className="px-4 py-2 ">
          <h2 className="text-lg font-semibold mb-3">Stories</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {stories.map(story => (
              <div key={story.id} className="flex-shrink-0 text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 p-0.5">
                  <img src={story.userAvatar} alt={story.userName} className="w-full h-full object-cover rounded-full" />
                </div>
                {/* <p className="text-xs mt-1 text-gray-300">{story.userName}</p> */}
              </div>
            ))}
          </div>
        </section>

        {/* Posts feed section */}
        <section className="mt-4 px-4">
          {posts.map(post => (
            <div key={post.id} className="bg-[#e1ddeb] rounded-lg shadow-md mb-6 overflow-hidden">
              {/* Post header: user info */}
              <div className="flex items-center p-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500">
                  <img src={post.userAvatar} alt={post.userName} className="w-full h-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-lg text-black">{post.userName}</p>
                  <p className="text-sm text-[#4e4992]">{post.postText}</p>
                </div>
              </div>
              {/* Post content: image */}
              <div className="w-full h-auto max-h-96 overflow-hidden">
                <img src={post.postImage} alt="Post" className="w-full h-full object-cover" />
              </div>
              {/* Post actions: likes, comments, shares */}

              <div className="flex justify-around items-center p-4 border-t border-gray-700 text-gray-300 text-sm">
                <div className="flex items-center space-x-1">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>{post.likes} Likes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.336-3.111A8.85 8.85 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 11-2 0 1 1 0 012 0zm-7 4a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                  <span>{post.comments} Comment</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.314l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.001 3.001 0 000-2.732l4.94-2.47C13.065 7.01 14.095 8 15 8z" />
                  </svg>
                  <span>{post.shares} Shares</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Fixed bottom navigation bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#583e87] p-4 z-10 shadow-lg border-t border-gray-700 max-w-3xl mx-auto">
        <nav className="flex justify-around items-center">
          {/* Navigation links */}
          <a href="#" className={`flex flex-col items-center p-2 rounded-lg ${activeNav === 'home' ? 'text-purple-400' : 'text-gray-400'}`} onClick={() => setActiveNav('home')}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </a>
          <a href="#" className={`flex flex-col items-center p-2 rounded-lg ${activeNav === 'messages' ? 'text-purple-400' : 'text-gray-400'}`} onClick={() => setActiveNav('messages')}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm11.53 1.47a.75.75 0 00-1.06 0L9 9.94l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l4-4a.75.75 0 000-1.06z" />
            </svg>
            <span className="text-xs mt-1">Messages</span>
          </a>
          <a href="#" className={`flex flex-col items-center p-2 rounded-lg ${activeNav === 'notifications' ? 'text-purple-400' : 'text-gray-400'}`} onClick={() => setActiveNav('notifications')}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-xs mt-1">Notifications</span>
          </a>
          <a href="#" className={`flex flex-col items-center p-2 rounded-lg ${activeNav === 'profile' ? 'text-purple-400' : 'text-gray-400'}`} onClick={() => setActiveNav('profile')}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
