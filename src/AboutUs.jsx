import { useState } from "react"

const AboutUs = () => {
    const [theme, setTheme] = useState('dark');
    return (
        <div className={theme==='light'?'dark':'light'}>
            <button className="bg-black text-white rounded-lg shadow-2xl flex justify-self-end mr-8 px-4 py-2 my-8 active:scale-95 dark:bg-gray-300 dark:text-black select-none" onClick={()=>setTheme(theme==='light'?'dark':'light')}>{theme==='light'?'Dark':'Light'}</button>
            <div className="dark:bg-zinc-800 dark:text-white select-none">

                <h2>There are things that will scare you.</h2>
                <input type="text" />
                <div>Hello world</div>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maiores rem nostrum tenetur debitis? Vitae reprehenderit placeat dolore nulla quam veritatis, incidunt adipisci culpa fuga ut ex quibusdam, accusantium ipsum?</p>
            </div>
        </div>
    )
}

export default AboutUs