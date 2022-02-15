## PLAN
I) initial setup
  A) Home page CHECK
    1) html CHECK
    2) css  CHECK
    3) app.js CHECK
    4) fetch-utils.js CHECK
    5) create database CHECK
  B) Create page CHECK
    1) html CHECK
    2) css  CHECK
    3) create.js  CHECK
  C) Signup/signin page CHECK
    1) html CHECK
    2) css  CHECK
    3) signin.js  CHECK
II) authentication functionality
  A) attach database to fetch-utils CHECK
  B) create signup/signin first so you can test
  C) create authentication
III) 'display home' functionality
  A) mockup elements
    1) one post CHECK
  B) render function
    1) grab mockup element CHECK
    2) TDD CHECK
    3) you have a render function CHECK
  C) data
    1) Grab data CHECK
    2) Render data (w/render function)
    3) Append data to html
  D) header
    1) Link to create
    2) Link to signup/signin
IV) 'create' functionality
  A) If not user, return home
  B) if user
    1) form
    2) get data from form
    3) create object
    4) add object to database
V) 'signup' functionality
  A) If user, return to home
  B) If not
    1) just do what you did on half-baked
VI) styles
  A) on post mouseover, post gets larger/styled

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
