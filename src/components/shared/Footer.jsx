import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="pt-10 sm:pt-20 bg-green-950 text-neutral-content">
            <div className="container px-3 sm:p-0 mx-auto flex items-center">
                <div className="space-y-1 w-1/2">
                    <Link to='/' className="text-xl md:text-3xl font-semibold text-white">
                        <span className="bg-white px-2 mr-[2px] rounded font-bold text-green-950">CORP</span>EVE.
                    </Link>
                    <p className="text-xs">Corp Eve Event Management Ltd.</p>
                </div>
                <div className="w-1/2 space-y-2">
                    <header className="text-end font-semibold sm:text-2xl">"Our Social Media"</header>
                    <div className="flex gap-5 justify-end text-sm sm:text-base">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </div>
            <p className="text-center font-light text-sm py-10">&copy; All right reserved to <a className="font-semibold underline" href="https://github.com/bluebird089">@BLUEBIRD089</a></p>
        </footer >
    );
};

export default Footer;