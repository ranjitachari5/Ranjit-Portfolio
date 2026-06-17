import 'tailwindcss'
const Navbar=()=>{
    return(
        <div className='justify-between text-shadow-blue-200 text-white flex  font-serif  '>
            <p className='m-3 text-4xl p-5 absolute right-20 h-3 '><a href='/'>Ranjit kumar a</a></p>
            <nav className='m-10 flex gap-5 ' >
                <ul className='hover:underline decoration-amber-500'><a href="/" >Home</a></ul>
                <ul className='hover:underline decoration-amber-500'><a href="/">Projects</a></ul>
                <ul className='hover:underline decoration-amber-500 '><a href='/'>Resume</a></ul>              
                <ul className='hover:underline decoration-amber-500'><a href="/">About</a></ul>
                <ul className='hover:underline decoration-amber-500'><a href='/'>Contact</a></ul>
            </nav>
        </div>
    );

};
export default Navbar;