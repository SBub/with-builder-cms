import React from 'react'
import { Router } from '@builder.io/react'
import DocsPage from './page/DocsPage'

function App () {
  return <Router path='/c/docs' exact={false} component={DocsPage} />
}

export default App
