const configured=require('./content/site.json').origin;
const domain=process.env.VERCEL_PROJECT_PRODUCTION_URL||process.env.VERCEL_URL;
const value=process.env.SCOLARIA_SITE_URL||(domain?'https://'+domain:configured);
const parsed=new URL(value);
if(!['http:','https:'].includes(parsed.protocol))throw new Error('Adresse publique SCOLAR·IA invalide');
module.exports=parsed.origin;
