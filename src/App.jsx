import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <div className='flex items-center justify-center bg-main w-full h-screen bg-no-repeat bg-cover bg-center  font-lato'>
      <div className='w-full sm:w-[600px] min-h-[400px] bg-neutral-100 border border-amber-100 shadow-md rounded-xl mx-10'>
        <Header />
        <Layout />
      </div>
    </div>
  );
}

export default App;
