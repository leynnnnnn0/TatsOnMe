import LOGO from "../../../public/images/mainLogo.png";
export default function welcome(){
    return (
       <>
        <nav className="flex items-center justify-between h-18 px-14 border-b border-gray-200">
            <img src={LOGO} alt="Logo" className="w-32"/>
            <div className="flex items-center justify-between gap-5">
                <button className="text-xs font-bold bg-primary text-white px-5 py-2 rounded-2xl cursor-pointer">
                    Log In
                </button>
            </div>
        </nav>

        <div className="max-w-7xl mx-auto py-5 space-y-5">
            <div className="space-y-3 border-b border-gray-200 pb-5">
                <p className="font-bold text-primary">Featured Posts</p>
                <section className="grid grid-cols-4 gap-3 h-50">
                    <div className="bg-gray-700 rounded-lg"></div>
                    <div className="bg-gray-700 rounded-lg"></div>
                    <div className="bg-gray-700 rounded-lg"></div>
                    <div className="bg-gray-700 rounded-lg"></div>
                </section>
            </div>


            <div className="grid grid-cols-3 gap-5">
                <div className="h-92 bg-gray-400 rounded-lg"></div>
                <div className="h-92 bg-gray-400 rounded-lg"></div>
                <div className="h-92 bg-gray-400 rounded-lg"></div>
                <div className="h-92 bg-gray-400 rounded-lg"></div>
                <div className="h-92 bg-gray-400 rounded-lg"></div>
                <div className="h-92 bg-gray-400 rounded-lg"></div>
            </div>
        </div>

  
       </>
    )
}