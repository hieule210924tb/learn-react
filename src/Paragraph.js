import { useContext } from 'react';
import {ThemeContext} from './ThemeContext'

function Paragraph (){
    const context = useContext(ThemeContext)
    return (
        <div>
            <p className={context.theme}> Xin chào mọi người</p>
        </div>
    )
}

export default Paragraph