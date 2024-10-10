import { useState } from 'react';
import './styles.css';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const commands = {
        help: 'Available commands: help, clear, about, exit',
        about: 'This is a terminal application made in react',
        clear: () => setOutput([]),
        exit: () => setOutput([...output, 'Exiting...']),
    };

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim();
            if (commands[cmd]) {
                const response = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
                setOutput([...output, `> ${cmd}`, response]);
            } else {
                setOutput([...output, `> ${cmd}`, 'Command not found. Type "help" for a list of commands.']);
            }
            setInput('');
        }
    };

    return (
        <div className="terminal">
            <div className="output">
                {output.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
            <div className="input">
                <span>&gt; </span>
                <input type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleInput}
                        autoFocus />
            </div>
        </div>
    )
}

export default Terminal;