import React from 'react';
import ModalWidget from './Widgets/ModalWidget';
import TextWidget from './Widgets/TextWidget';
import SortWidget from './Widgets/SortWidget'
import VistorCardsWidget from './Widgets/VisitorCardWidgets';
import ProfilesCardWidget from './Widgets/Profile/ProfilesCardWidget';
import ChatWidget from './Widgets/Chat/ChatWidget';

function App() {
  return (
    <div>
      <header>
        <h3>Visitor Cards Component</h3>
        <VistorCardsWidget/>
        <hr/>
        <h3>Profiles Card Component</h3>
        <ProfilesCardWidget/>
        <hr/>
        <h3>Welcome to Chat Component</h3>
        <ChatWidget/>
        <hr/>
        <h3>Modal Component</h3>
        <ModalWidget/>  
        <hr/>
        <h3>Select & Sort Component</h3>
        <SortWidget/>
        <hr/>
        <h3>Automatic style change on scroll Component</h3>
        <TextWidget/>
      </header>
    </div>
  );
}

export default App;
