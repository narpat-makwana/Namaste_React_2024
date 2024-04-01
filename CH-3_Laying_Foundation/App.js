import React from "react";
import ReactDOM from "react-dom/client";


// const heading = <h1>Welcome to Namaste React</h1>

// Elements in React:
// 1st way -> using React.createElement :

const heading = React.createElement(
    "h1",
    {id:'heading'},
    "Namaste React" 
);

// JSX in React :
const headingJsx = (
    <>
        <h1 className="head"> Namaste React using JSX.. 🙏</h1>
        <h2>React 2024</h2>
        {heading}
    </>
)

// Normal Function in jsx

const func1 = function(){
    return(
        <>
            <h1>With Normal Function</h1>
        </>
    )
}

// console.log(headingJsx)

// React Components:
// A)ClassBased Component           -> deprecated not using 
// B)Functional Component

// always First letter capital (Functional Components)

const FComponent = () => {
    return (<h1 className="head">🙏 Namaste React using Functional Components 🙏</h1>);
}

const Comp = () => {
    return (<h1> Welcome to JavaScript </h1>);
}

const FComponent2 = () => {
    return(
        <>                          
            <FComponent/>           {/* This is known as component composition..*/}        
            <Comp/>
            {console.log('using js inside jsx ')}
            {heading}
            {headingJsx}
            {func1()}
        </>
    )
}

// more ways to write components:
// <FComponent><FComponent/>
// {FComponent()}

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(<FComponent2/>);     //use </> syntax to render react Func Component




/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */


