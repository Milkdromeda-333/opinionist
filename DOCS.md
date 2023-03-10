

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

- Had a hard time centering a svg with a span, and asked for help from the dev community. None of it worked but was able to solve it after playing around in the dev tools. I added a div around the svg and gave it display: inline. 


- FINALLY internalized how context is to be set up. I use the initializer to consume the data and wrap it around the children passed into the component. And, I use the entire component to import the provider and wrap the component/jsx around the object rendered in main.jsx.

- Learned that you cant style an imported component with className attribute. You have to style it from within its component.

- I had an issue because I never saved the new user I was creating on signup in the server, so I went over a past project where I knew I completed my current task, and seen what I was missing... when  a new resouce is create mongo will add the __v field.

- Was stumped by an issue for a week after trying many solutions given from github and stackoverflow. I used critical thinking skills to narrow down what may be the problem, which was my machine, and thought of a solution based on that theory. I did some research on that and was able to fix the error miraculously! I fixed my bcrypt issue by resseting my node config, and then running `npm rebuild bcrypt --build-from-source` UPDATE: I later ran into the same issue, and did some asking on stackoverflow and came to the conclusion that this `npm install bcrypt --target_arch=x64` may help me to install the correct bit size package. I was eventually able to add the 64-bit version with yarn instead of npm.

- After fixing the bcrypt error I ran into an issue with no request being able to complete with my server. On my front-end it returned error 404, and on postman it just hung. Eventually I thought maybe it had something to do with something I added, and happened to take off my CORS middleware `app.use(require('cors'));`. That ended up being the culprit.. Yet it still does not work for my front-end.

- Had an issue connecting my frontend to my backend. Got some help from a TA and they helped me realize that I was configuring my front-end to my backend as if it were CRA instead of Vite.

- To fox mybcrypt errors, i use
```
npm uninstall bcrypt

npm cache clean --force

npm i bcrypt --target_arch=x64 or
yarn add bcrypt --target_arch=x64
```

and it tends to work.

- update: im continuing to have this issue and it wont fix with my method anymore, SOO i am looking for an alternative. I believe I was able to get my app going with argon2

- I was able to bypass cors by setting `app.use(cors())`

- "axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('auth')}``" this would be shorter alternative to the axios interceptos i set in axiosHandlers in client folder

- I forgot that I wasn't using cookies anymore and I was hung up on that. After that I ran into other problems but was able to overcome the step by step with trouble-shooting.

- I am using 'https://ui-avatars.com/'

- Do not take so long to aks for help! You can save so much time that way, get to socialize with other devs, and you can learn something new.

- req.query filters through a resource and has a question mark in the url. req.params are just in the url like normal.


TOFIX:
- z index of navbar components
- when error component is open in addNewPost, the close modal doesn't work.
- formatDates is backwards with the month and day.
- voting is woncky. SOmetimes it works perfectly, other times the updates dont happen until the next call of updateFeed(). Possibly fixed with a useEffect. I had to take it out o now its broken again.

---

NOTE 2 DEV:
I will be currently abandoning this feature until further notice.