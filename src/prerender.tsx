import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { SiteRoutes } from './App';
import { routeMetadata } from './routeMetadata';
export function render(url:string){
 const page=routeMetadata[url];
 return {html:renderToString(<StaticRouter location={url}><SiteRoutes/></StaticRouter>),
  title:page.title,description:page.description};
}
