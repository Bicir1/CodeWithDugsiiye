import React from 'react';

const Hearder = () => {
    return (
        <div>
            <h1>This is Header</h1>
        </div>
    );
};


const Footer = () => {
    return (
        <div>
         <h3>this is Footer</h3>
        </div>
    );
};



const Whychoose = () => {
    return (
        <div>
          <h3>this is Why Choosse</h3>  
        </div>
    );
};



const Layout = () => {
    return (
        <div>
            <Hearder/>
                <main>
                    <Whychoose/>
                </main>
            <Footer/>
        </div>
    );
};

export default Layout;