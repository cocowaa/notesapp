import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import amplifyConfig from '../amplify_outputs.json';

Amplify.configure(amplifyConfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ padding: 20 }}>
          <h1>Hello, {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App
