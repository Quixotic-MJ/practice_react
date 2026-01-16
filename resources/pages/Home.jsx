import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';

function Home() {
  const nav = useNavigate();
  
    return (
      <div>
        This is the homepage
        <button onClick={() => {
          nav('/');
        }}>Go back to login</button>
      </div>
    );
}

export default Home;
