/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PurchaseIndexImport } from './routes/purchase/index'
import { Route as imageImageImport } from './routes/(image)/image'
import { Route as authRegisterImport } from './routes/(auth)/register'
import { Route as authLoginImport } from './routes/(auth)/login'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PurchaseIndexRoute = PurchaseIndexImport.update({
  id: '/purchase/',
  path: '/purchase/',
  getParentRoute: () => rootRoute,
} as any)

const imageImageRoute = imageImageImport.update({
  id: '/(image)/image',
  path: '/image',
  getParentRoute: () => rootRoute,
} as any)

const authRegisterRoute = authRegisterImport.update({
  id: '/(auth)/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/register': {
      id: '/(auth)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterImport
      parentRoute: typeof rootRoute
    }
    '/(image)/image': {
      id: '/(image)/image'
      path: '/image'
      fullPath: '/image'
      preLoaderRoute: typeof imageImageImport
      parentRoute: typeof rootRoute
    }
    '/purchase/': {
      id: '/purchase/'
      path: '/purchase'
      fullPath: '/purchase'
      preLoaderRoute: typeof PurchaseIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/image': typeof imageImageRoute
  '/purchase': typeof PurchaseIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/image': typeof imageImageRoute
  '/purchase': typeof PurchaseIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/register': typeof authRegisterRoute
  '/(image)/image': typeof imageImageRoute
  '/purchase/': typeof PurchaseIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/register' | '/image' | '/purchase'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/register' | '/image' | '/purchase'
  id:
    | '__root__'
    | '/'
    | '/(auth)/login'
    | '/(auth)/register'
    | '/(image)/image'
    | '/purchase/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authLoginRoute: typeof authLoginRoute
  authRegisterRoute: typeof authRegisterRoute
  imageImageRoute: typeof imageImageRoute
  PurchaseIndexRoute: typeof PurchaseIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authLoginRoute: authLoginRoute,
  authRegisterRoute: authRegisterRoute,
  imageImageRoute: imageImageRoute,
  PurchaseIndexRoute: PurchaseIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)/login",
        "/(auth)/register",
        "/(image)/image",
        "/purchase/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(auth)/register": {
      "filePath": "(auth)/register.tsx"
    },
    "/(image)/image": {
      "filePath": "(image)/image.tsx"
    },
    "/purchase/": {
      "filePath": "purchase/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
