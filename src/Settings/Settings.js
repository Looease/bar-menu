import React from "react";

export const Settings = ({selectedTitle, setTitle}) => {
    const updateTitle = (event) => {
        const newTitle = event.target.value;
        setTitle (newTitle);
    }  
    return (
        <section>
            <h2>Settings</h2>
            <div>
            <label><input onChange={updateTitle} value={selectedTitle}></input>
            </label>
            </div>
        </section>
    );
};

