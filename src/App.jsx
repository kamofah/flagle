import { Navbar } from './components/Navbar';
import { FlagView } from './components/FlagView';
// import { PlayView } from './components/PlayView.tsx';
import Footer from './components/ui/Footer.tsx';
import Form from './components/Form.tsx';
import DisabledAttempt from './components/DisabledAttempt.tsx';
// import { getListOfCountries } from './utils/misc.js';


const App = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-1 justify-between h-full items-center flex-col p-4 gap-2.5 ">
        <Navbar></Navbar>
        <div className="flex flex-1 justify-center w-full items-center flex-col p-4 gap-2.5 ">
          <FlagView ></FlagView>
        
          { [1,2,3,4,5,6].map( (attempt) => {
            return <DisabledAttempt key={attempt.id} />;
          })}
          {/* <PlayView></PlayView> */}
          {/* <DisabledAttempt></DisabledAttempt> */}
          <Form countries={{}} onClickAction={() => {}}/>
        </div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default App;
