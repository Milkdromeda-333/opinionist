export default function Home(){

    return (
        <></>
    )
}

NOTES:

- When you face burn-out and are tired, and fel like giving up, take a break. Come back with a plan. You're tired, an a fresh perspective will be useful.

Challenging things I've done:

- Tried different solutions based on my goal. I tried bootstrap-react at first because my goal was fast styling. I tried and failed to get Bootstrap to completely cooperate, and could forsee problems developing with it given its limited documentation, so I switched over to Tailwind, and did not regret.
- Figured out how to customize Tailwind, and played around with designing responsively with my customized class names.
- I wanted to implement a comment input that would resize as the person typed so thta there would be no scroll overflow, so I tried different things such as using an input instead, looking at how other websites would've implememted it, etc. I eventually came upon a stackoverflow question that was using jquery to do it, but i found an answer that showed a way to do it with react and was able to implement and troubleshoot it myself.
Heres the link: https://stackoverflow.com/a/68638979/18193299
My implementaion is in /components/Post.jsx
Heres the code:
```
const {
  useLayoutEffect,
  useState,
  useRef
} = React;

const TextArea = () => {
  const ref = useRef();
  const [value, setValue] = useState('Some initial text that both wraps and uses\nnew\nlines');

  // This only tracks the auto-sized height so we can tell if the user has manually resized
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

    ref.current.style.height = "auto";
    ref.current.style.overflow = "hidden";
    const next = `${ref.current.scrollHeight}px`;
    ref.current.style.height = next;
    autoHeight.current = next;
    ref.current.style.overflow = "auto";
  }, [value, ref, autoHeight]);


  return (
    <textarea
      ref={ref}
      style={{
        resize: 'vertical',
        minHeight: '1em',
      }}
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
}

ReactDOM.render(<TextArea />, document.getElementById('app'))
```



TOFIX:
- z index of navbar components
- figure out layout for posts