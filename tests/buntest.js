import { Cajax } from '../index.js'

const client = new Cajax('https://pastefy.app/api/v2/paste/Ns8GL2TB')

console.log(await client.get('').then(r => r.json()))