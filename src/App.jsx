
import Invoice from './components/invoice-generator';

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 ">

      <h2 className="text-3xl font-bold text-white pb-12 lg:pb-6">
        Invoice Generator
      </h2>

      <div className="w-full max-w-3xl bg-gray-900 rounded-2xl shadow-2xl p-6">
        <Invoice />
      </div>

    </div>
  );
}

export default App;
