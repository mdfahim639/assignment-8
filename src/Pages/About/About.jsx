import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <div className="justify-center items-center">
      <h2 className="text-4xl font-semibold text-center my-4">Abouts</h2>
      <p className="text-center">
        Let explore some concept that will make you a good developer
      </p>
      <div className="bg-gray-100">
        <div className="m-4 border-b-2 p-4 shadow-lg">
          <h2 className="text-3xl font-semibold">
            What is useState and how does it work in React?
          </h2>
          <p>
            Ans : useState is a React Hook that allows you to add state to
            functional components. How it works: You call
            useState(initialValue), and it returns an array with two elements:
            The current state value. A function to update that state.
          </p>
        </div>
        <div className="m-4 border-b-2 p-4 shadow-lg">
          <h2 className="text-3xl font-semibold">
            What is the purpose of useEffect in React?
          </h2>
          <p>
            Ans : useEffect is used to handle side effects in functional
            components. Side effects include: Fetching data Updating the DOM
            manually.
          </p>
        </div>
        <div className="m-4 border-b-2 p-4 shadow-lg">
          <h2 className="text-3xl font-semibold">
            What is a custom hook in React and when should you use one?
          </h2>
          <p>
            Ans : A custom hook is a JavaScript function that starts with use
            and can use other hooks inside it. Custom hooks allow you to extract
            component logic into reusable functions. You should use a custom
            hook when you have logic that is shared between multiple components
            or when you want to encapsulate complex logic in a single function.
          </p>
        </div>
        <div className="m-4 border-b-2 p-4 shadow-lg">
          <h2 className="text-3xl font-semibold">
            Tell us something about useFormStatus() in React
          </h2>
          <p>
            Ans : UseFormStatus() is a hook provided by React Server Components
            (RSC) for forms using Server Actions (like in Next.js with app
            directory). What it does Gives you access to the form submission
            status, like: pending: if the form is being submitted
          </p>
        </div>
      </div>
      <div className="text-center ">
        <Link to={'/'}>
          <button className="btn my-4 bg-green-500 text-white rounded-2xl p-3">
            Back an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
