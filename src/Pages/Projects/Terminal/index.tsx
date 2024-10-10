import { useState } from 'react';
import './styles.css';

type CommandResponse = string | (() => void);

const Terminal = () => {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string[]>([]);

    const commands: Record<string, CommandResponse> = {
        help: 'Available commands: help, clear, about, exit',
        about: 'This is a terminal application made in React',
        clear: () => setOutput([]),
        exit: () => setOutput((prev) => [...prev, 'Exiting...']),
    };

    const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input.trim();
            if (commands[cmd]) {
                const response = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
                
                // Only add the response to output if it's a string
                if (typeof response === 'string') {
                    setOutput((prev) => [...prev, `> ${cmd}`, response]);
                } else {
                    setOutput((prev) => [...prev, `> ${cmd}`]);
                }
            } else {
                setOutput((prev) => [...prev, `> ${cmd}`, 'Command not found. Type "help" for a list of commands.']);
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
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleInput}
                    autoFocus 
                />
            </div>
        </div>
    );
};

export default Terminal;
