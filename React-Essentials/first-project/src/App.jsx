import { useState } from 'react';
import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts'
import TabButton from './components/TabButton';
import {EXAMPLES} from './data.js'


function App() {
const [selectedTopic , setSelectedTopic] = useState();

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

    {CORE_CONCEPTS.map((conceptItem)=> (<CoreConcepts key={conceptItem.title} {...conceptItem} ></CoreConcepts>))}

           </ul>
      </section>
     <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === "components"} onSelect={()=> handelSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onSelect={()=>handelSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === "props"} onSelect={()=>handelSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onSelect={()=>handelSelect('state')}>State</TabButton>
        </menu>
        {!selectedTopic ?( <p>Please Select a topic </p> ) : (
        <div id='tab-content'> 
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
        </div>
        )}
     </section>
      </main>
    </div>
  );
}

export default App;
