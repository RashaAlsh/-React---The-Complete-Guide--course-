import { useState } from 'react';
import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts'
import TabButton from './components/TabButton';

function App() {
const [selectedTopic , setSelectedTopic] = useState('Please click a button');

  function handelSelect(selectedButton){
   setSelectedTopic(selectedButton) 
    console.log(selectedTopic)
  }

  console.log('App Component Executing')

  return (
    <div> 
       <Header/>
      <main>
      <section id='core-concepts'>
           <h2>Core Concepts</h2>
           <ul>
            <CoreConcepts  title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />

              <CoreConcepts  title={CORE_CONCEPTS[1].title} 
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image} />

              <CoreConcepts  title={CORE_CONCEPTS[2].title} 
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image} />

              <CoreConcepts  title={CORE_CONCEPTS[3].title} 
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image} />
          
           </ul>
      </section>
     <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=> handelSelect('components')}>Components</TabButton>
          <TabButton onSelect={()=>handelSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=>handelSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=>handelSelect('state')}>State</TabButton>
        </menu>
        {selectedTopic}
     </section>
      </main>
    </div>
  );
}

export default App;
