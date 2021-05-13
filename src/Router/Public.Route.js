import React, { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

import { Route } from 'react-router-dom'

import { AppLoading, PublicLayout } from 'Components'

const PublicRoute = ({ component: Component, ...rest }) => {
  const loading = useStoreState((state) => state.auth.loading)
  const getUser = useStoreActions((actions) => actions.auth.getUser)

  useEffect(() => {
    getUser()
  }, [getUser])

  if (loading) return <AppLoading title="Loading Page" />

  return (
    <Route
      {...rest}
      render={(props) => (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )}
    />
  )
}
export default PublicRoute
