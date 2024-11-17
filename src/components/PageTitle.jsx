import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
    const [pageTitle, setPageTitle] = useState('Home');

    const titleMap = [
      {path: '/', title:'Home'},
      {path: '/orders', title:'Moje objednávky'},
      {path: '/invoices', title:'Faktury'},
      {path: '/settings', title:'Nastavení'}
    ]
  
    let curLoc = useLocation();
    useEffect(() => {
      const curTitle = titleMap.find(item => item.path === curLoc.pathname)
      if(curTitle && curTitle.title){
        setPageTitle(curTitle.title)
        document.title = curTitle.title
      }
    }, [curLoc])

    return (
        <h1 className="col-span-2 py-8 text-3xl font-semibold">{pageTitle}</h1>
    )
};

export default PageTitle;