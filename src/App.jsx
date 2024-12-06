import { Navbar } from './components/Navbar';
import { FlagView } from './components/FlagView';
import Button from './components/ui/Button';
import Footer from './components/ui/Footer.tsx';
import TextInput from './components/ui/TextInput.tsx';

const App = () => {
  return (
    <div className="h-screen bg-[#121213]">
      <div className="flex flex-col h-full p-4 gap-2.5">
        <Navbar />
        <FlagView ></FlagView>
        <TextInput></TextInput>
        <Button buttonText={'Guess'}/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
