//import WhatIsReact from './components/01-Introduction/01-WhatIsReact';
//import UsesOfReact from './components/01-Introduction/02-UsesOfReact';
//import WhyReact from './components/01-Introduction/03-WhyReact';
//import HelloWorld from './components/01-Introduction/04-HelloWorld';
//import ReactInfoCard from './components/01-Introduction/05-MiniProject';

//function App() {
// return (
//  <div>
//    <WhatIsReact />
//    <UsesOfReact />
//    <WhyReact />
//    <HelloWorld/>
//    <ReactInfoCard/>
// </div>
//);
//}
//export default App;

import WhatIsComponent from './components/02-components/01-WhatIsComponent';
import HeaderFooter from './components/02-components/02-HeaderFooter';
import NestedComponents from './components/02-components/03-NestedComponents';
import ReusableCard from './components/02-components/04-ReusableCard';
import CompanyCard from './components/02-components/05-CompanyCard';
import MiniWebsite from './components/02-components/06-MiniWebsite';
function App(){
  return(
    <div>
      <WhatIsComponent/>
      <HeaderFooter/>
      <NestedComponents/>
      <ReusableCard/>
      <CompanyCard/>
      <MiniWebsite/>
    </div>
  );
}
export default App;


