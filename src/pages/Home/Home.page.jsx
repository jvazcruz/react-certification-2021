import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.component';
import Carditemsvideo from '../../components/Carditemsvideo/Carditemsvideo.component';
import SideMenu from '../../components/Sidemenu/Sidemenu.component';
import { VIDEO_MOCKS } from '../../mocks.jsx';

function HomePage({ theme, setTheme }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(VIDEO_MOCKS);
        console.log(response);
        const json = await response.json();
        console.log(json.items);
        setVideos(Object.values(json.items));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <SideMenu theme={theme} setTheme={setTheme} />
      <Carditemsvideo videos={videos} />
    </>
  );
}

export default HomePage;
