

export default function Home(){

    return (
        <></>
    )
}

NOTES:

- When you face burn-out and are tired, and fel like giving up, take a break. Come back with a plan. You're tired, an a fresh perspective will be useful. (This has helped me withing the span of this project 2x)

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

- Had a hard time centering a svg with a span, and asked for help from the dev community. None of it worked but was able to solve it after playing around in the dev tools. I added a di around he svg and gave it display: inline. 


- FINALLY internalized how context is to be set up. I use the initializer to consume the data and wrap it around the children passed into the component. And, I use the entire component to import the provider and wrap the component/jsx around the object rendered in main.jsx.

- Learned that you cant style an imported component with classNamr attribute. You have to style it from within its component.

- I had an issue because I never saved the new user I was creating on signup in the server, so I went over a past project where I knew I completed my current task, and seen what I was missing... when  a new resouce is create mongo will add the __v field.

- Was stumped by an issue for a week after trying many solutions given from github and stackoverflow. I used critical thinking skills to narrow down what may be the problem, which was my machine, and thought of a solution based on that theory. I did some research on that and was able to fix the error miraculously! I fixed my bcrypt issue by resseting my node config, and then running `npm rebuild bcrypt --build-from-source`

TOFIX:
- z index of navbar components

---