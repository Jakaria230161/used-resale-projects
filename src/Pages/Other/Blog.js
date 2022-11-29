import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">What are the different ways to manage a state in a React application?</h3>
                        <h4 className="font-semibold">The Four Kinds of React State to Manage</h4>
                        <p className="mt-1 dark:text-gray-400">1. Local state : Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                            useState is the first tool you should reach for to manage state in your components.

                            It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                        <p className="mt-1 dark:text-gray-400">2. Global state : Once you attempt to manage state across multiple components, things get a bit trickier.

                            You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                            What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                            To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>
                        <p className="mt-1 dark:text-gray-400">3. Server state : Server state can be deceptively challenging to manage.

                            At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.

                            What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?

                            To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.</p>
                        <p className="mt-1 dark:text-gray-400">4. URL state : To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.

                            URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.

                            If you are using React Router, you can get all the information you need using useHistory or useLocation.</p>

                    </div>

                    <div>
                        <h3 className="font-semibold">What is a unit test? Why should we write unit tests?</h3>
                        <p className="mt-1 dark:text-gray-400">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                        <p className="mt-1 dark:text-gray-400">How unit tests work :
                            <br />
                            A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                            Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">How does prototypical inheritance work?</h3>
                        <p className="mt-1 dark:text-gray-400">JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                            Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                            JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                            Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>

                    </div>

                    <div>
                        <h3 className="font-semibold">React vs. Angular vs. Vue?</h3>
                        <h3 className="font-semibold">Angular : </h3>
                        <p className="mt-1 dark:text-gray-400">In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code. This is what sets it apart when looking at Angular vs React.</p>
                        <h3 className="font-semibold">React : </h3>
                        <p className="mt-1 dark:text-gray-400">React, interestingly, combines the UI and behavior of components. For instance, here is the code to create a hello world component in React. In React, the same part of the code is responsible for creating a UI element and dictating its behavior.</p>
                        <h3 className="font-semibold">Vue : </h3>
                        <p className="mt-1 dark:text-gray-400">When looking into Vue vs React, in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries, like Bootstrap.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;