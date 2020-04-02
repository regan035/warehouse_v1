import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

export const API = publicRuntimeConfig.PRODUCTION? 'https://warehouseapp.com': 'http://localhost:3001';
export const APP_NAME = publicRuntimeConfig.APP_NAME