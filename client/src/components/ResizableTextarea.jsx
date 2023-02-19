import { useRef, useLayoutEffect } from "react";

export default function ResizableTextArea({ textInput, setTextInput, name, id, placeholder, height }) {
    
    // DOCS: To use, pass in state to control text value, and attributes for the textarea

    const ref = useRef();
    const autoHeight = useRef();

    useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    if (
      autoHeight.current !== undefined &&
      ref.current.style.height !== autoHeight.current
    ) {
      // don't auto size if the user has manually changed the height
      return;
        }
        
    ref.current.style.height = height;
    ref.current.style.overflow = "hidden";
    const next = `${ref.current.scrollHeight}px`;
    ref.current.style.height = next;
    autoHeight.current = next;
    ref.current.style.overflow = "auto";
    }, [textInput, ref, autoHeight]);

    return (
        <textarea type="text"
            name={name}
            id={id}
            placeholder={placeholder}
            ref={ref}
            className="
            w-full
            rounded-lg
            text-my-dark-blue
            p-2
            focus:outline focus:outline-[3px]
            "
            value={textInput}
            onChange={event => setTextInput(event.target.value)} />
    )
}